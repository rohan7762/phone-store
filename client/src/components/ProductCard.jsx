function ProductCard({ product }) {
  return (
    <div>
      <img
        src={product.images?.[0]}
        alt={product.name}
        width="200"
      />

      <h3>{product.name}</h3>

      <p>{product.brand}</p>

      <p>Rs. {product.price}</p>

      <p>Stock: {product.stock}</p>

      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;