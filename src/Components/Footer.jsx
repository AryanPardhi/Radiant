import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <> 
      <div className="container p-5" style={{width:"100%", position:"relative"}}>
        <div
          className="d-flex align-items-start justify-content-around p-5"
          style={{ backgroundColor: "#212731", color: "#FFFFFF",gap:"20px" }}
        >
          <div>
            <h6 className="fw-normal">CATEGORIES</h6>
            <ul className="fw-lighter p-0" style={{listStyle:"none"}}>
                <li>Web Browser</li>
                <li>Hosting</li>
                <li>Data Center</li>
                <li>Robotic-Automation</li>
            </ul>
          </div>
          <div>
            <h6 className="fw-normal">CONTACT</h6>
            <ul className="fw-lighter p-0" style={{listStyle:"none"}}>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms Of Service</li>
                <li>Categories</li>
                <li>About</li>
            </ul>
          </div>
          <div
            className="dropdown"
            style={{ backgroundColor: "transparent", color:"white", marginBottom: "20px" }}
          >
            <button
              className="btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ backgroundColor: "white" }}
            >
              United State
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <Link className="dropdown-item active" to="">
                  India
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="">
                  Russia
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="">
                  Japan
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
