import { useState } from "react";

import Icon from "../Icon";

import SwiperCore, { Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import ProductBookModal from "../ProductBook/ProductBookModal";

SwiperCore.use([Thumbs]);

const Product = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="product">
      <div className="product__left">
        <div className="gallery">
          <div className="gallery__left">
            {product?.images?.length > 0 && (
              <Swiper
                direction="horizontal"
                spaceBetween={30}
                slidesPerView={3}
                style={{ marginBottom: -30 }}
                onSwiper={setThumbsSwiper}
                watchSlidesVisibility
                watchSlidesProgress
                breakpoints={{
                  640: {
                    direction: "vertical",
                  },
                }}
              >
                {product.images.map((product) => {
                  return (
                    <SwiperSlide key={product.id}>
                      <img
                        className="gallery__thumbnail"
                        src={`${process.env.NEXT_PUBLIC_API_URL}${product.formats.thumbnail.url}`}
                        alt=""
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            )}
          </div>
          <div className="gallery__body">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              thumbs={{ swiper: thumbsSwiper }}
            >
              {product.images.map((product) => {
                return (
                  <SwiperSlide key={product.id}>
                    <img
                      className="gallery__image"
                      src={`${process.env.NEXT_PUBLIC_API_URL}${
                        product.formats?.small?.url ??
                        product.formats?.thumbnail?.url
                      }`}
                      alt=""
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="product__body">
        <h1 className="product__title">{product.title}</h1>
        <div className="product__properties">
          {product?.size && (
            <div className="product__property">
              Размеры (ШхГхВ) - {product.size.width}х{product.size.depth}х
              {product.size.height} см
            </div>
          )}
          <div className="product__property">
            Площадь - {product.area.value} м2
          </div>
          {product?.features?.length > 0 && (
            <div className="product__property">
              Оснащение номера
              <div className="product__properties">
                {product.features.map((feature) => {
                  return (
                    <div className="product__property">
                      <Icon name={feature.slug} />
                      {feature.title}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <div className="product__price">Цена за сутки: {product.price}₽</div>
        <div className="product__actions">
          <ProductBookModal product={product} />
        </div>
      </div>
    </div>
  );
};

export default Product;
