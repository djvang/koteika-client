import { useState, useEffect } from "react";

import Header from "../components/Header";
import Heading from "../components/Heading";
import ProductsGrid from "../components/ProductsGrid";
import Filter from "../components/Filter";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getServerSideProps(context) {
  const products = await fetch(`${API_URL}/products`).then((response) =>
    response.json()
  );

  if (!products) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products,
    }, // will be passed to the page component as props
  };
}

export default function ProductsPage({ products = [] }) {
  const [filter, setFilter] = useState({});
  const [features, setFeatures] = useState([]);
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/features`)
      .then((response) => response.json())
      .then((json) => setFeatures(json));

    fetch(`${API_URL}/areas`)
      .then((response) => response.json())
      .then((json) => setAreas(json));
  }, []);

  return (
    <div>
      <Header />
      <Heading />
      <main className="main">
        <section className="section section_products">
          <div className="container">
            <div className="layout layout_products">
              <div className="layout_item">
                <Filter
                  areas={areas}
                  features={features}
                  onSubmit={(data) => setFilter(data)}
                />
              </div>
              <div className="layout_item">
                <ProductsGrid products={products} />
              </div>
            </div>
          </div>
        </section>
        <Banner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
