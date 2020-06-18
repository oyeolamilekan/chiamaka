import { FiBook, FiHome } from "react-icons/fi";

import Logo from "../assets/images/rsz_id.png";
import { NavLink } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <NavLink exact to="/" activeClassName="active" className="nav-link">
          <img src={Logo} alt="logo" style={{width:"120px"}}/>
        </NavLink>
        <div className="specialBar">{/* <Search /> */}</div>
        <a
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          href="/#"
        >
          <span className="navbar-toggler-icon" />
        </a>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li
              className={`nav-item`}
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-link"
              >
                <FiHome className="mr-2"/>
                Home
              </NavLink>
            </li>
            

            <li
              className={`nav-item`}
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <NavLink
                exact
                to="/about_book"
                activeClassName="active"
                className="nav-link"
              >
                  <FiBook className="mr-2"/>
                My Book
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
