import "./Signup.css";

const accountTypes = [
  "Individual Account",
  "HUF Account",
  "NRI Account",
  "Minor Account",
  "Corporate / LLP / Partnership"
];

const AccountTypes = () => {
  return (
    <section className="account-types">

      <h2>Explore different account types</h2>

      <div className="account-grid">

        {accountTypes.map((type) => (
          <div className="account-card" key={type}>
            <h3>{type}</h3>
          </div>
        ))}

      </div>

    </section>
  );
};

export default AccountTypes;