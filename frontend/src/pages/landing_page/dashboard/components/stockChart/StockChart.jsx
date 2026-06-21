import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

import {
  getStockChart
} from "../../../../../services/marketService";

const symbolMap = {
  TCS: "TCS",
  INFY: "INFY",
  AXISBANK: "AXISBANK",
  RELIANCE: "RELIANCE",

  HDFCBANK: "HDFCBANK",
  ICICIBANK: "ICICIBANK",
  SBIN: "SBIN",
  KOTAKBANK: "KOTAKBANK",
  INDUSINDBK: "INDUSINDBK",

  WIPRO: "WIPRO",
  HCLTECH: "HCLTECH",
  TECHM: "TECHM",

  TATAMOTORS: "TATAMOTORS",
  MARUTI: "MARUTI",
  HEROMOTOCO: "HEROMOTOCO",
  EICHERMOT: "EICHERMOT",

  TITAN: "TITAN",
  ASIANPAINT: "ASIANPAINT",
  NESTLEIND: "NESTLEIND",
  BRITANNIA: "BRITANNIA",
  HINDUNILVR: "HINDUNILVR",

  SUNPHARMA: "SUNPHARMA",
  DRREDDY: "DRREDDY",
  CIPLA: "CIPLA",
  DIVISLAB: "DIVISLAB",
  APOLLOHOSP: "APOLLOHOSP",

  ULTRACEMCO: "ULTRACEMCO",
  GRASIM: "GRASIM",

  BAJFINANCE: "BAJFINANCE",

  TATASTEEL: "TATASTEEL",
  JSWSTEEL: "JSWSTEEL",

  NTPC: "NTPC",
  POWERGRID: "POWERGRID",
  ONGC: "ONGC",
  BPCL: "BPCL",
  COALINDIA: "COALINDIA",

  BHARTIARTL: "BHARTIARTL",

  ADANIENT: "ADANIENT",
  ADANIPORTS: "ADANIPORTS"
};

const StockChart = ({ stock }) => {

  const [series, setSeries] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  useEffect(() => {

    const loadChart = async () => {

      if (!stock) return;

      try {

        setLoading(true);
        setError("");

        const apiSymbol =
          symbolMap[
            stock.symbol
          ] || stock.symbol;

        const data =
          await getStockChart(
            apiSymbol
          );

        if (
          !data ||
          !data.values
        ) {

          setError(
            "Chart data not available"
          );

          return;
        }

        const candles =
          data.values
            .slice()
            .reverse()
            .map(item => ({

              x: new Date(
                item.datetime
              ).getTime(),

              y: [
                Number(item.open),
                Number(item.high),
                Number(item.low),
                Number(item.close)
              ]

            }));
        setSeries([
          {
            data: candles
          }
        ]);

      } catch (err) {

        console.error(err);

        setError(
          `${stock.symbol} chart data not available`
        );

      } finally {

        setLoading(false);

      }

    };

    loadChart();

  }, [stock]);

  if (!stock) {

    return (
      <div className="chart-card">
        <h3>
          Select a stock
          to view chart
        </h3>
      </div>
    );

  }

  if (loading) {

    return (
      <div className="chart-card">
        <h3>
          Loading chart...
        </h3>
      </div>
    );

  }

  if (error) {

    return (
      <div className="chart-card">
        <h3>
          {error}
        </h3>
      </div>
    );

  }

  const options = {

    chart: {
      type: "candlestick",
      height: 400,
      toolbar: {
        show: true
      }
    },

    title: {
      text:
        `${stock.symbol} Price Chart`,
      align: "left"
    },

    xaxis: {
      type: "datetime"
    },

    yaxis: {
      tooltip: {
        enabled: true
      }
    }

  };

  return (

    <div className="chart-card">

      <Chart
        options={options}
        series={series}
        type="candlestick"
        height={400}
      />

    </div>

  );

};

export default StockChart;