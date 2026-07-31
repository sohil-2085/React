import ProductCard from "../ProductCard/ProductCard";

function ProductList({ products, addToCart }) {
  return (
    <div className="mx-4 mt-8 md:mx-8 lg:mx-32">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
