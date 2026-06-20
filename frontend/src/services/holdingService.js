import api from "./api/axios";

export const getHoldings =
  async () => {

    const response =
      await api.get(
        "/holdings"
      );

    return response.data;
};

export const getHoldingBySymbol =
  async (symbol) => {

    const response =
      await api.get(
        `/holdings/${symbol}`
      );

    return response.data;
};