import api from "./api/axios";

export const buyStock =
  async (orderData) => {

    const response =
      await api.post(
        "/orders/buy",
        orderData
      );

    return response.data;
};

export const sellStock =
  async (orderData) => {

    const response =
      await api.post(
        "/orders/sell",
        orderData
      );

    return response.data;
};

export const getHistory =
  async () => {

    const response =
      await api.get(
        "/orders/history"
      );

    return response.data;
};