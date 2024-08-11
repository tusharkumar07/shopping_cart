import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../../assets/css/navbar.css";

const Navbar = ({ cart }) => {
  const [clicked, setClicked] = useState(false);
  console.log(cart);

  const isEmpty = () => {
    return cart.length === 0 ? "" : "navCart";
  };

  return (
    <div className={`mainNav ${clicked ? "show" : ""}`}>
      <div className="container">
        <div className="nav_container">
          <ul className={` ${clicked ? "show" : ""}`}>
            <li>
              <NavLink
                to="/"
                onClick={() => setClicked(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => setClicked(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </NavLink>
            </li>
          </ul>
          <div className="logo">
            <Link to="/" onClick={() => setClicked(false)}>
            CartSwift
            </Link>
          </div>
          <ul className={`components ${clicked ? "show" : ""}`}>
            <li>
              {" "}
              <NavLink
                data-content={cart ? cart.length : null}
                to="/cart"
                onClick={() => setClicked(false)}
                className={({ isActive }) =>
                  isActive ? `${isEmpty()} active` : `${isEmpty()}`
                }
              >
                Cart <i className="fa-solid fa-cart-shopping" style={{ color: 'orangered' }}></i>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                onClick={() => setClicked(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Products
              </NavLink>
            </li>
          </ul>
          <div className="nav_btn">
            <i
              className="fa-solid fa-bars"
              onClick={() => setClicked(!clicked)}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
