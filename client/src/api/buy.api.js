import axiosClient from "./axios.client";
export const buy = async (product) => {
  try {
    const response = await axiosClient.post("/users/buy", {
      price: product.price,
      title: product.title,
      userName: localStorage.getItem("username"),
    });

    return { response };
  } catch (err) {
    return { err };
  }
};
