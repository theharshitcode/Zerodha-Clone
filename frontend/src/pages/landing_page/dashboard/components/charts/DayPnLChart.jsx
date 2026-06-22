import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

import "./DayPnLChart.css";

const DayPnLChart = () => {

  const data = [
    { time: "09:15", pnl: 0 },
    { time: "10:00", pnl: 120 },
    { time: "11:00", pnl: 350 },
    { time: "12:00", pnl: 180 },
    { time: "13:00", pnl: 500 },
    { time: "14:00", pnl: 720 },
    { time: "15:30", pnl: 940 }
  ];

  return (

    <div className="pnl-card">

      <div className="pnl-header">

        <h2>Today's P&L</h2>

        <h3 className="profit">
          +₹940
        </h3>

      </div>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <AreaChart data={data}>

          <CartesianGrid
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="time"
          />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="pnl"
            stroke="#4caf50"
            fill="#4caf50"
            fillOpacity={0.2}
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>

  );
};

export default DayPnLChart;