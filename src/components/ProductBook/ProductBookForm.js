import { useState } from "react";
import Button from "../Button";
import Input, { InputGroup, InputText } from "../Input";

import { useForm, Controller } from "react-hook-form";
import NumberFormat from "react-number-format";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function InputBookingDate({ control, errors }) {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const endDatePlusOneDay = new Date(startDate);
  endDatePlusOneDay.setDate(endDatePlusOneDay.getDate() + 1);

  return (
    <>
      <div className="input-booking-date">
        <div>Дата заезда</div>
        <div className="input-booking-date-item">
          <span className="input-booking-date-label">с</span>

          <Controller
            name="startDate"
            control={control}
            rules={{ required: true }}
            render={({ onChange, value }) => {
              return (
                <DatePicker
                  customInput={<Input error={errors.startDate} />}
                  selected={value}
                  minDate={new Date()}
                  onChange={(date) => {
                    onChange(date);
                    setStartDate(date);
                  }}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                />
              );
            }}
          />
        </div>
        <div className="input-booking-date-item">
          <span className="input-booking-date-label">по</span>

          <Controller
            name="endDate"
            control={control}
            rules={{ required: true }}
            render={({ onChange, value }) => {
              return (
                <DatePicker
                  customInput={<Input error={errors.endDate} />}
                  selected={value}
                  minDate={endDatePlusOneDay}
                  onChange={(date) => {
                    onChange(date);
                    setEndDate(date);
                  }}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                />
              );
            }}
          />
        </div>
      </div>
      {(errors.startDate || errors.endDate) && (
        <InputText error={true}>
          Укажите дату{" "}
          {errors.startDate && errors.endDate
            ? "заеда и выезда"
            : errors.startDate
            ? "заезда"
            : "выезда"}{" "}
        </InputText>
      )}
    </>
  );
}

function ProductBookForm({ onSubmitted, product }) {
  const { handleSubmit, register, errors, control } = useForm();
  const onSubmit = (values) => {
    const data = {
      ...values,
      product: product.id,
      price: `${product.price}`,
    };

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(data);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("${process.env.NEXT_PUBLIC_API_URL}/orders", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log("Форма отправлена");
        onSubmitted && onSubmitted();
      })
      .catch((error) => console.log("error", error));
  };

  // console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <Input
          name="username"
          error={errors.username}
          placeholder="Ваше имя"
          ref={register({
            required: true,
            minLength: 1,
          })}
        />
        {errors.username && (
          <InputText error={true}>Укажите Ваше имя</InputText>
        )}
      </InputGroup>
      <InputGroup>
        <Input
          name="petname"
          error={errors.petname}
          placeholder="Имя Питомца"
          ref={register({
            required: true,
            minLength: 1,
          })}
        />
        {errors.petname && (
          <InputText error={true}>Укажите имя питомца</InputText>
        )}
      </InputGroup>
      <InputGroup>
        <Controller
          control={control}
          name="phone"
          rules={{
            required: true,
            minLength: 10,
          }}
          render={({ onChange, value, name, ref }) => {
            return (
              <NumberFormat
                name={name}
                type="tel"
                format="+38 (###) ##-###-##"
                mask="_"
                error={errors.phone}
                value={value}
                placeholder="Телефон"
                customInput={Input}
                inputRef={ref} // TODO focus
                onValueChange={({ value }) => onChange(value)}
              />
            );
          }}
        />

        {errors?.phone?.type === "required" && (
          <InputText error={true}>Укажите телефон</InputText>
        )}
        {errors?.phone?.type === "minLength" && (
          <InputText error={true}>НЕ валидный номер телефона</InputText>
        )}
      </InputGroup>
      <InputGroup>
        <Input
          type="email"
          placeholder="E-mail"
          name="email"
          error={errors.email}
          ref={register({
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "НЕ валидный email адрес",
            },
          })}
        />
        {errors?.email?.type === "required" && (
          <InputText error={true}>Укажите почту</InputText>
        )}
        {errors?.email?.type === "pattern" && (
          <InputText error={true}>{errors?.email?.message}</InputText>
        )}
      </InputGroup>
      <InputGroup>
        <InputBookingDate control={control} errors={errors} />
      </InputGroup>

      <div style={{ textAlign: "center" }}>
        <Button primary>Отправить заявку</Button>
      </div>
    </form>
  );
}

export default ProductBookForm;
