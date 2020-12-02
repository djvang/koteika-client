import ProductCard from "../ProductCard";

const ProductsGrid = ({ products = [] }) => {
  return (
    <div className="grid grid_products">
      {products.map((product) => {
        return (
          <div key={product.id} className="grid_item">
            <ProductCard {...product} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
