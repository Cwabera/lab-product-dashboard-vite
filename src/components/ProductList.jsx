import ProductCard from "./ProductCard"

function ProductList({ products, onRemove }) {
  if (!products || products.length === 0) {
    return <p>No products available</p>
  }

  return (
    <>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onRemove={onRemove}
        />
      ))}
    </>
  )
}

export default ProductList