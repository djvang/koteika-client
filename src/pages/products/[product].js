import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import Product from "../../components/Product";
import Link from "next/link";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getServerSideProps(context) {
  const productId = context.params.product;

  const product = await fetch(
    `${API_URL}/products/${productId}`
  ).then((response) => response.json());

  const products = await fetch(
    `${API_URL}/products?id_ne=${productId}&_limit=6`
  ).then((response) => response.json());

  return {
    props: { product, products },
  };
}

export default function ProductPage({ product, products }) {
  return (
    <div>
      <Header />

      <main className="main">
        <Container>
          <Product product={product} />

          {products?.length > 0 && (
            <div className="products__related">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
              >
                {products.map((product) => {
                  return (
                    <SwiperSlide key={product.id}>
                      <Link href={`/products/${product.id}`}>
                        <a className="card card_product-2">
                          <div className="card__media">
                            <img
                              src={`${process.env.NEXT_PUBLIC_API_URL}${product?.featured_images.formats.thumbnail.url}`}
                              className="card__image"
                              alt=""
                            />
                          </div>
                          <div className="card__body">
                            <h3 className="card__title">{product.title}</h3>
                            <div className="card__params">
                              <div className="card__param">
                                Размеры (ШхГхВ) - {product.size.width}х
                                {product.size.depth}х{product.size.height} см
                              </div>
                              <div className="card__param">
                                Площадь - {product.area.value} м2
                              </div>
                              <span className="card__param">
                                Цена за сутки:
                                <span className="card__price">
                                  {product.price}₽
                                </span>
                              </span>
                            </div>
                            <div className="card__actions">
                              <span className="button button_primary">
                                Забронировать
                              </span>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          )}
        </Container>
        <Banner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
