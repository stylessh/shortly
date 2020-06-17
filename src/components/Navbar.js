import React from "react";
import "../styles/navbar.scss";

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="left">
        <button className="logo">
          <img src="/images/logo.svg" alt="logo" />
        </button>

        <ul className="links">
          <li>
            <button>Features</button>
          </li>
          <li>
            <button>Pricing</button>
          </li>
          <li>
            <button>Resources</button>
          </li>
        </ul>
      </div>
      <div className="right">
        <button className="login">
          Login
        </button>

        <button className="signup">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
