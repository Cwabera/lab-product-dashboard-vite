import { Card, CardContent, Typography, Button } from "@mui/material"
import styles from "../styles/ProductCard.module.css"

function ProductCard({ product, onRemove }) {
  return (
    <Card className={styles.card}>
      <CardContent
        className={!product.available ? "outOfStockClass" : ""}
      >
        <Typography variant="h6">
          {product.name}
        </Typography>

        <Typography>
          ${product.price}
        </Typography>

        <Typography>
          {product.available ? "In Stock" : "Out of Stock"}
        </Typography>

        <Button
          variant="outlined"
          onClick={() => onRemove(product.id)}
        >
          Remove
        </Button>
      </CardContent>
    </Card>
  )
}

export default ProductCard