import { Link } from "@remix-run/react";
import "./Header.css";

export const Header = () => (
  <header className="header">
    <h1 className="header__title">小作品集</h1>
    <nav className="navigation">
      <Link to="/" className="navigation__link">
        Home
      </Link>
      |
      <Link to="/entry/1" className="navigation__link">
        エントリー1
      </Link>
      |
      <Link to="/entry/2" className="navigation__link">
        エントリー2
      </Link>
      |
      <Link to="/entry/3" className="navigation__link">
        エントリー3
      </Link>
    </nav>
  </header>
);
