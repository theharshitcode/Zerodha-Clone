import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

import "./AssetAllocationChart.css";

const COLORS = [
  "#387ed1",
  "#4caf50",
  "#ff9800",
  "#9c27b0",
  "#f44336",
  "#00bcd4",
  "#795548"
];

const AssetAllocationChart = ({
  holdings
}) => {

  const chartData =
    holdings.map(
      holding => ({

      name:
        holding.symbol,

      value:
        holding.quantity *
        holding.avgPrice

    }));

  return (

    <div className="asset-chart-card">

      <h2>
        Asset Allocation
      </h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <PieChart>

          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            innerRadius={70}
            outerRadius={120}
            paddingAngle={3}
          >

            {
              chartData.map(
                (_, index) => (

                <Cell
                  key={index}
                  fill={
                    COLORS[
                      index %
                      COLORS.length
                    ]
                  }
                />

              ))
            }

          </Pie>

          <Tooltip />

          <Legend />

        </PieChart>

      </ResponsiveContainer>

    </div>

  );
};

export default AssetAllocationChart;