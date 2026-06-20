import api from "./api/axios";

export const getAllStocks =
  async () => {

    const response =
      await api.get("/stocks");

    return response.data;
};

export const searchStocks =
  async (query) => {

    const response =
      await api.get(
        `/stocks/search?q=${query}`
      );

    return response.data;
};

export const getStockBySymbol =
  async (symbol) => {

    const response =
      await api.get(
        `/stocks/${symbol}`
      );

    return response.data;
};