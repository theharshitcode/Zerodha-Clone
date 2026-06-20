import Chart from "react-apexcharts";

const StockChart = ({ stock }) => {

  if (!stock) return null;

  const series = [
    {
      data: [
        {
          x: "2026-06-15",
          y: [3400, 3550, 3380, 3500]
        },
        {
          x: "2026-06-16",
          y: [3500, 3600, 3450, 3580]
        },
        {
          x: "2026-06-17",
          y: [3580, 3620, 3520, 3560]
        },
        {
          x: "2026-06-18",
          y: [3560, 3700, 3550, 3680]
        },
        {
          x: "2026-06-19",
          y: [3680, 3750, 3650, stock.currentPrice]
        }
      ]
    }
  ];

  const options = {

    chart: {
      type: "candlestick",
      height: 350,
      toolbar: {
        show: true
      }
    },

    title: {
      text: `${stock.symbol} Price Chart`,
      align: "left"
    },

    xaxis: {
      type: "category"
    },

    yaxis: {
      tooltip: {
        enabled: true
      }
    }
  };

  return (

    <div
      className="chart-card"
    >

      <Chart
        options={options}
        series={series}
        type="candlestick"
        height={350}
      />

    </div>

  );
};

export default StockChart;