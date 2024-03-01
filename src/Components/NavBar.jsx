import React from "react";
import { FaSearch } from "react-icons/fa";
import "../App.css"
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container"style={{gap:"25px"}}>
        <form className="d-flex" role="search">
            <div className="search-wrapper">
              <input
                className="form-control me-2 search-input"
                type="search"
                aria-label="Search"
                placeholder="Search..."
              />
              <FaSearch className="search-icon" />
            </div>
          </form>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="">
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  Website Builders
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true">
                  Today's Deals
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
