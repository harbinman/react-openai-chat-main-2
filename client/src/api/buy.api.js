import axiosClient from "./axios.client";
export const buy = async (money, name) => {
  try {
    const response = await axiosClient.post("/users/buy", {
      price: money,
      title: name,
      userName: localStorage.getItem("username"),
    });

    return { response };
  } catch (err) {
    return { err };
  }
};
