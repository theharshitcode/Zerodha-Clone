import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">

      <img
        src="/media/image/logo.svg"
        alt="Zerodha"
        className="sidebar-logo"
      />

      <ul>

        <li>Dashboard</li>

        <li>Orders</li>

        <li>Holdings</li>

        <li>Positions</li>

        <li>Funds</li>

        <li>Apps</li>

      </ul>

    </aside>
  );
};

export default Sidebar;