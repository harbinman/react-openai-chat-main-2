import axiosClient from "./axios.client";
export const buy = async (product) => {
  try {
    const response = await axiosClient.post("/buy", {
      price: product.price,
      title: product.title,
    });

    return { response };
  } catch (err) {
    return { err };
  }
};
