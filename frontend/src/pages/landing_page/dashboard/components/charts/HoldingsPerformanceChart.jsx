import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

import "./HoldingsPerformanceChart.css";

const HoldingsPerformanceChart = ({
  holdings
}) => {

  const data = [
    {
      month: "Jan",
      TCS: 0,
      INFY: 0,
      AXISBANK: 0,
      TITAN: 0
    },
    {
      month: "Feb",
      TCS: 2,
      INFY: 4,
      AXISBANK: 1,
      TITAN: -1
    },
    {
      month: "Mar",
      TCS: 5,
      INFY: 8,
      AXISBANK: 3,
      TITAN: 2
    },
    {
      month: "Apr",
      TCS: 7,
      INFY: 10,
      AXISBANK: 4,
      TITAN: 3
    },
    {
      month: "May",
      TCS: 10,
      INFY: 14,
      AXISBANK: 6,
      TITAN: 5
    },
    {
      month: "Jun",
      TCS: 15,
      INFY: 18,
      AXISBANK: 8,
      TITAN: 7
    }
  ];

  return (

    <div className="performance-card">

      <h2>
        Holdings Performance
      </h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <LineChart data={data}>

          <CartesianGrid
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="month"
          />

          <YAxis />

          <Tooltip />

          <Legend />

          <Line
            type="monotone"
            dataKey="TCS"
            stroke="#387ed1"
          />

          <Line
            type="monotone"
            dataKey="INFY"
            stroke="#4caf50"
          />

          <Line
            type="monotone"
            dataKey="AXISBANK"
            stroke="#ff9800"
          />

          <Line
            type="monotone"
            dataKey="TITAN"
            stroke="#9c27b0"
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  );
};

export default HoldingsPerformanceChart;