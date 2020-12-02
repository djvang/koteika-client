import Button from "../Button";
import Checkbox from "../Checkbox";

import { useForm } from "react-hook-form";

const Filter = ({ areas, features, onSubmit = () => {} }) => {
  const { register, handleSubmit, reset } = useForm({
    // defaultValues: {}; you can populate the fields by this attribute
  });

  return (
    <div className="filter">
      <form className="filter__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="filter__item">
          <span className="filter__label">Цена за сутки, ₽</span>
          <div className="filter__control">
            <div className="price">
              <input
                className="price__from"
                name="price__from"
                type="text"
                ref={register()}
                placeholder="от 100"
              />
              <input
                className="price__to"
                name="price__to"
                type="text"
                ref={register()}
                placeholder="до 600"
              />
            </div>
          </div>
        </div>
        {areas.length > 0 && (
          <div className="filter__item">
            <span className="filter__label">Площадь</span>
            {areas.map((area) => {
              return (
                <p key={area.id} className="filter__control">
                  <Checkbox name="areas" ref={register()} value={area.id}>
                    {area.value} м2
                  </Checkbox>
                </p>
              );
            })}
          </div>
        )}

        {features.length > 0 && (
          <div className="filter__item">
            <span className="filter__label">Оснащение номера</span>
            {features.map((feature) => {
              return (
                <p key={feature.id} className="filter__control">
                  <Checkbox name="features" ref={register()} value={feature.id}>
                    {feature.title}
                  </Checkbox>
                </p>
              );
            })}
          </div>
        )}

        <div className="filter__actions">
          <Button type="submit" secondary>
            Применить
          </Button>
          <Button type="button" tertiary onClick={reset}>
            Сбросить фильтр
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
