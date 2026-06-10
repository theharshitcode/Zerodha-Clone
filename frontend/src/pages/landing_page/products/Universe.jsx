
import "./ProductPage.css";

const universeItems = [
  {
    image: "/media/image/smallcaseLogo.png",
    description:
      "Thematic investing platform that helps you invest in diversified baskets of stocks and ETFs."
  },
  {
    image: "/media/image/streakLogo.png",
    description:
      "Systematic trading platform that allows you to create and backtest strategies without coding."
  },
  {
    image: "/media/image/sensibullLogo.svg",
    description:
      "Options trading platform for creating strategies and analysing positions."
  },
  {
    image: "/media/image/zerodhaFundhouse.png",
    description:
      "Asset management venture creating simple and transparent index funds."
  },
  {
    image: "/media/image/tijori.svg",
    description:
      "Investment research platform offering detailed stock and sector insights."
  },
  {
    image: "/media/image/dittoLogo.png",
    description:
      "Personalized advice on life and health insurance."
  }
];

const Universe = () => {
  return (
    <section className="universe">

      <h2>The Zerodha Universe</h2>

      <p>
        Extend your trading and investment experience
        even further with our partner platforms
      </p>

      <div className="universe-grid">

        {universeItems.map((item, index) => (
          <div
            key={index}
            className="universe-card"
          >
            <img
              src={item.image}
              alt="partner"
            />

            <p>{item.description}</p>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Universe;