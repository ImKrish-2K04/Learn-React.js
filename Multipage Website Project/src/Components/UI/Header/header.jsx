import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="logo">
            <NavLink to="/">
              <h1>World Atlas</h1>
            </NavLink>
          </div>

          <nav>
            <ul>
              <li>
                <NavLink to="/">home</NavLink>
              </li>
              <li>
                <NavLink to="/about">about</NavLink>
              </li>
              <li>
                <NavLink to="country">country</NavLink>
              </li>
              <li>
                <NavLink to="contact">contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
