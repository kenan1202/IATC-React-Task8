import { Link, NavLink } from "react-router-dom";
import './Navbar.css';

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="logo">
          <Link to="/">Cryptocurrency Prices by Market Cap</Link>
        </div>
        <nav>
          <NavLink to="/" className = 'link'>Home</NavLink>
          <NavLink to="/crypto" className = 'link'>Crypto Values</NavLink>
          <NavLink to="/trend" className = 'link'>Trends</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
