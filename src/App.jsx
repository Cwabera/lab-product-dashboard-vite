import { useState } from "react"
import { Container, Button } from "@mui/material"
import ProductList from "./components/ProductList"
import "./App.css"

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 999, available: true },
    { id: 2, name: "Phone", price: 699, available: false },
    { id: 3, name: "Tablet", price: 499, available: true }
  ])

  const [showAvailableOnly, setShowAvailableOnly] = useState(false)

  const handleRemove = (id) => {
    setProducts(products.filter(product => product.id !== id))
  }

  const filteredProducts = showAvailableOnly
    ? products.filter(product => product.available)
    : products

  return (
    <Container>
      <h1>Product Dashboard</h1>

      <Button
        variant="contained"
        onClick={() => setShowAvailableOnly(!showAvailableOnly)}
      >
        {showAvailableOnly ? "Show All" : "Show Available Only"}
      </Button>

      <ProductList
        products={filteredProducts}
        onRemove={handleRemove}
      />
    </Container>
  )
}

export default App