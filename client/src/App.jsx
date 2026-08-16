import { useEffect, useState } from "react";
import { getProducts } from "./services/api";
import ProductCard from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to load products:", error);
      }
    };

    loadProducts();
  }, []);

  return (
    <div>
      <h1>Phone Store</h1>

      <h2>Products</h2>

      {products.map((product) => (
  <ProductCard
    key={product._id}
    product={product}
  />
))}
    </div>
  );
}

export default App;