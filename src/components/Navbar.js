import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  let location = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="/">
            e-Notebook
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link  ${
                    location.pathname === "/" ? "active" : ""
                  } `}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  } mx-2`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <form className="d-flex">
        <Link className="btn btn-outline-light mx-2" to="/login" type="submit">Login</Link>
        <Link className="btn btn-outline-light mx-2" to="/signup" type="submit">Signup</Link>
      </form>
        </div>
       
      </nav>
    </>
  );
}

export default Navbar;
