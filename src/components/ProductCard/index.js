import Button from "../Button";
import Icon from "../Icon";

import Link from "next/link";

const ProductCard = ({
  id,
  title,
  params = [],
  price,
  size,
  area,
  features,
  featured_images,
}) => {
  return (
    <Link href={`/products/${id}`}>
      <a className="card card_product">
        <div className="card__media">
          <img
            src={`${process.env.NEXT_PUBLIC_API_URL}${featured_images.formats.thumbnail.url}`}
            className="card__image"
            alt=""
          />
        </div>
        <div className="card__body">
          <h3 className="card__title">{title}</h3>
          <div className="cadr__params">
            <div className="card__param">
              Размеры (ШхГхВ) - {size.width}х{size.depth}х{size.height} см
            </div>
            <div className="card__param">Площадь - {area.value} м2</div>

            {features.length > 0 && (
              <div className="card__param">
                Оснащение номера
                <span className="card__features">
                  {features?.map((feature, index) => {
                    return (
                      <span
                        key={index}
                        title={feature.title}
                        className="card__feature"
                      >
                        <Icon name={feature?.slug} />
                      </span>
                    );
                  })}
                </span>
              </div>
            )}

            {price && (
              <span className="card__param">
                Цена за сутки:
                <span className="card__price">{price}₽</span>
              </span>
            )}
          </div>
          <div className="card__actions">
            <Button primary block as="span">
              Забронировать
            </Button>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;
