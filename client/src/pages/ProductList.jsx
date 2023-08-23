import React from "react";
import { Box, Grid } from "@mui/material";
import ProductCard from "../components/ProductCard";
import { buy } from "../api/buy.api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const products = [
  {
    title: "1级会员",
    price: "19.99",
    description: "无限使用chatgpt3.5，有效期1个月",
  },

  // Add more products here
];

const ProductList = () => {
  const navigate = useNavigate();
  const handleBuy = async (product) => {
    // 在这里执行购买商品的操作，可以根据 product 数据执行相关逻辑
    console.log("价格:", product.price);
    const { response, err } = await buy(product);
    if (response) {
      console.log(JSON.stringify(response.message));
      alert(JSON.stringify(response.message));
      localStorage.setItem("class", response.class);
      if (response.success) {
        navigate("/");
      }
    }

    if (err) toast.error(err.message);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      flexDirection="rows" // 垂直居中
    >
      {products.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          handleBuy={() => handleBuy(product)}
        />
      ))}
    </Box>
  );
};
export default ProductList;
