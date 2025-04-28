import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="logo">
            <h1>KanhaTech</h1>
          </div>

          <nav className={`menu-mobile ${showMenu ? "show" : ""}`}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="ham-menu">
            <button onClick={() => setShowMenu(!showMenu)}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
