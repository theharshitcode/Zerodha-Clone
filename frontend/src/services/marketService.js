import axios from "axios";

const API_KEY =
    import.meta.env
        .VITE_TWELVE_DATA_API_KEY;

export const getStockChart =
    async (symbol) => {

        const response =
            await axios.get(
                "https://api.twelvedata.com/time_series",
                {
                    params: {
                        symbol,
                        interval: "1day",
                        outputsize: 30,
                        apikey: API_KEY
                    }
                }
            );
        return response.data;
    };