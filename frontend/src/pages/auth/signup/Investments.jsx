import "./Signup.css";

const investments = [
  {
    image: "/media/image/stocks-acop.svg",
    title: "Stocks",
    description: "Invest in all exchange-listed securities"
  },
  {
    image: "/media/image/mf-acop.svg",
    title: "Mutual funds",
    description: "Invest in commission-free direct mutual funds"
  },
  {
    image: "/media/image/ipo-acop.svg",
    title: "IPO",
    description: "Apply to the latest IPOs instantly via UPI"
  },
  {
    image: "/media/image/fo-acop.svg",
    title: "Futures & options",
    description: "Hedge and mitigate market risk"
  }
];

const Investments = () => {
  return (
    <section className="investments">

      <h2>Investment options with Zerodha demat account</h2>

      <div className="investment-grid">

        {investments.map((item) => (
          <div className="investment-card" key={item.title}>

            <img src={item.image} alt={item.title} />

            <h3>{item.title}</h3>

            <p>{item.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Investments;