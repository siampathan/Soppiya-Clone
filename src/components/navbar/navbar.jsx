import "./navbar-style.scss";

const Navbar = () => {
  return (
    <div>
      <div className="header">
        <div className="header-logo">
          <img src="https://soppiya.com/media/assets/soppiya.png" alt="logo" />
        </div>

        <div className="hamburger">
          <h3>Hamburger</h3>
        </div>

        <div className="header-content">
          <ul>
            <li>Docs</li>
            <li>Store</li>
            <li>Pricing</li>
            <li>Sign in</li>
            <li className="get-start">Get Started</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
