import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import ProductCard from "../components/ProductCard";
import { buy } from "../api/buy.api";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import { buildMd5Para } from "../utils/buildMd5Para";
import { bulidRequestPara } from "../utils/buildRequestpara";
import { generateOrderNumber } from "../utils/orderId";

const products = [
  {
    title: "1级会员",
    price: "19.9",
    description: "无限使用chatgpt3.5，有效期1个月",
  },

  // Add more products here
];
// const products = JSON.parse(import.meta.env.VITE_PRODUCTS);
console.log("products is", products);

const ProductList = () => {
  const [ispadding, setIspadding] = useState(false);

  const navigate = useNavigate();
  const search = useLocation().search;

  const money = new URLSearchParams(search).get("money");
  const param = new URLSearchParams(search).get("param");
  const name = param;
  const trade_status = new URLSearchParams(search).get("trade_status");
  console.log(name, money);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { response, err } = await buy(money, name);

        console.log("response is ", response);
        if (response) {
          console.log(JSON.stringify(response.message));
          toast(response.message);

          localStorage.setItem("class", response.class);
          if (response.success) {
            navigate("/");
          }
        }
        if (err) toast.error(err.message);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIspadding(false); // 确保在处理完异步操作后更新状态
      }
    };

    // 检查 trade_status 参数
    if (trade_status === "TRADE_SUCCESS") {
      // 在这里执行购买商品的操作，可以根据 product 数据执行相关逻辑
      fetchData();
    }
  }, [trade_status, money]);

  const handleEpay = async (product) => {
    //处理易支付接口内容
    console.log("处理易支付接口内容");
    console.log(product.title);
    console.log(product.price);
    const orderNumber = generateOrderNumber();
    const { md5Value, Md5Para } = buildMd5Para(
      product.price,
      orderNumber,
      product.title
    );
    console.log("sign is :", md5Value);

    const payurl = bulidRequestPara(Md5Para, md5Value);
    if (md5Value) {
      window.open(payurl, "_self");
    }
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
          ispadding={ispadding}
          product={product}
          handleEpay={() => handleEpay(product)}
        />
      ))}
    </Box>
  );
};
export default ProductList;
