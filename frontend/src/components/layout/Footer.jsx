import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-company">
          <img className="logo"
            src="/media/image/logo.svg"
            alt="Zerodha"
          />

          <p>
            © 2010 - 2026, Zerodha Clone
          </p>

          <p>
            All rights reserved.
          </p>
        </div>

        <div>
          <h4>Account</h4>

          <a href="/">Open Account</a>
          <a href="/">Fund Transfer</a>
          <a href="/">MTF</a>
          <a href="/">Commodity</a>
        </div>

        <div>
          <h4>Support</h4>

          <a href="/">Contact Us</a>
          <a href="/">Support Portal</a>
          <a href="/">Downloads</a>
          <a href="/">Blog</a>
        </div>

        <div>
          <h4>Company</h4>

          <a href="/">About</a>
          <a href="/">Careers</a>
          <a href="/">Press & Media</a>
          <a href="/">Open Source</a>
        </div>

        <div>
          <h4>Quick Links</h4>

          <a href="/">Brokerage</a>
          <a href="/">Market Holidays</a>
          <a href="/">Calculators</a>
          <a href="/">IPO</a>
        </div>

      </div>

      <div className="footer-bottom">

        <p>
          This project is built for educational and
          portfolio purposes only and is not affiliated
          with Zerodha.
        </p>

      </div>

    </footer>
  );
};

export default Footer;