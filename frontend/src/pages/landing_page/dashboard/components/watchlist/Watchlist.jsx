import { useEffect, useState } from "react";
import { getAllStocks, searchStocks }
  from "../../../../../services/stockService";

import "./Watchlist.css";

const Watchlist = ({

  setSelectedStock
}) => {
  const [search,setSearch] = useState("");

    useEffect(() => {

  const fetchSearch =
    async () => {

      try {

        if (
          search.trim() === ""
        ) {

          const data =
            await getAllStocks();

          setStocks(
            data.stocks
          );

          return;
        }

        const data =
          await searchStocks(
            search
          );

        setStocks(
          data.stocks
        );

      } catch (error) {

        console.error(error);

      }

    };

  fetchSearch();

}, [search]);
  const [stocks, setStocks] =
    useState([]);

  useEffect(() => {

    const fetchStocks =
      async () => {

        try {

          const data =
            await getAllStocks();

          setStocks(
            data.stocks
          );

        } catch (error) {

          console.error(error);

        }

      };

    fetchStocks();

  }, []);

  return (
    <div className="watchlist">

      <h3>Watchlist</h3>
      <input
        type="text"
        placeholder="Search stocks..."
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
        className="search-box"
      />

      {stocks.map(stock => (

        <div
          key={stock._id}
          className="stock-item"
          onClick={() =>
            setSelectedStock(stock)
          }
        >

          <div>

            <h4>{stock.symbol}</h4>

            <p>
              {stock.companyName}
            </p>

          </div>

          <span>
            ₹{stock.currentPrice}
          </span>

        </div>

      ))}

    </div>
  );
};

export default Watchlist;