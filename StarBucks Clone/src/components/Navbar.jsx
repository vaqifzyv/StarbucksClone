import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="left-section">
        <div className="logo">
          <a href="#">
            <img
              src="src/assets/images/starbucks-logo-png-transparent.png"
              alt=""
            />
          </a>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="https://www.starbucks.com/menu">MENU</a>
            </li>
            <li>
              <a href="https://www.starbucks.com/rewards">REWARDS</a>
            </li>
            <li>
              <a href="https://www.starbucks.com/gift">GIFT CARDS</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-section">
        <a href="https://www.starbucks.com/store-locator">Find a store</a>
        <div className="nav-buttons">
          <button className="signBtn">Sign in</button>
          <button className="joinBtn">Join now</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
