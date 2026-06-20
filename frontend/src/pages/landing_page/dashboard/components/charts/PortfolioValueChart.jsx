import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

import "./PortfolioValueChart.css";

const PortfolioValueChart = ({ holdings }) => {

  const totalValue =
    holdings.reduce(
      (sum, item) =>
        sum +
        (
          item.quantity *
          item.avgPrice
        ),
      0
    );

  const chartData = [
    {
      day: "Mon",
      value: totalValue * 0.85
    },
    {
      day: "Tue",
      value: totalValue * 0.88
    },
    {
      day: "Wed",
      value: totalValue * 0.92
    },
    {
      day: "Thu",
      value: totalValue * 0.97
    },
    {
      day: "Fri",
      value: totalValue
    }
  ];

  return (

    <div className="portfolio-chart-card">

      <div className="chart-header">

        <h2>
          Portfolio Value
        </h2>

        <h3>
          ₹{
            totalValue
              .toLocaleString()
          }
        </h3>

      </div>

      <ResponsiveContainer
        width="100%"
        height={320}
      >

        <LineChart
          data={chartData}
        >

          <CartesianGrid
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="day"
          />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#387ed1"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  );
};

export default PortfolioValueChart;