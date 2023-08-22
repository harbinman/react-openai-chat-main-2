import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";

const ProductCard = ({ product, handleBuy }) => {
  const { title, price, description } = product;

  return (
    <Card sx={{ maxWidth: 300, margin: "50px" }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="subtitle1" color="text.primary">
          价格: {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" onClick={handleBuy}>
          Buy
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
