import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import "./PortfolioChart.css";

const PortfolioChart = ({
  holdings
}) => {

  const data =
    holdings.map(item => ({

      name: item.symbol,

      value:
        item.quantity *
        item.avgPrice

    }));

  return (

    <div className="portfolio-chart">

      <h2>
        Portfolio Allocation
      </h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={120}
            label
          >

            {data.map(
              (_, index) => (

              <Cell
                key={index}
              />

            ))}

          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>

  );
};

export default PortfolioChart;