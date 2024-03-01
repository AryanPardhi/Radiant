import React from "react";
import img1 from "../assets/img1.png";
import { Link } from "react-router-dom";
const BottomPart = () => {
  return (
    <>
      <div className="container p-5">
        <h1 style={{ color: "#2C384A" }}>Related deals you might like for</h1>
        <div className="card-container d-flex align-items-center justify-content-center gap-2 flex-wrap">
          <div
            className="card p-2 text-center"
            style={{ width: "24rem", position: "relative" }}
          >
            <img
              src={img1}
              className="card-img-top"
              alt="..."
              style={{ width: "70%", marginLeft: "15%" }}
            />
            <span className="d-flex gap-3">
              <p
                className="p-1 mt-2"
                style={{
                  backgroundColor: "#F2F4F7",
                  color: "#074786",
                  width: "max-content",
                  borderRadius: "5px",
                }}
              >
                26% Off
              </p>
              <p
                className="p-1 mt-2"
                style={{
                  backgroundColor: "#F2F4F7",
                  color: "#074786",
                  width: "max-content",
                  borderRadius: "5px",
                }}
              >
                Limited Time
              </p>
            </span>

            <div className="card-body">
              <h5 className="card-title">WebBuilder 1</h5>
              <p className="card-text">Computer Modern clasic with wix support</p>
              <span className="d-flex gap-2">
                <p className="fs-5">$39.96</p>
                <p className="fs-6 text-decoration-line-through">$49.96</p>
                <p className="fs-6 text-danger">(20% Off)</p>
              </span>
              <Link to="" className="btn btn-primary">
                View Deals
              </Link>
            </div>
          </div>
          <div
            className="card p-2 text-center"
            style={{ width: "24rem", position: "relative" }}
          >
            <img
              src={img1}
              className="card-img-top"
              alt="..."
              style={{ width: "70%", marginLeft: "15%" }}
            />
            <span className="d-flex gap-3">
              <p
                className="p-1 mt-2"
                style={{
                  backgroundColor: "#F2F4F7",
                  color: "#074786",
                  width: "max-content",
                  borderRadius: "5px",
                }}
              >
                26% Off
              </p>
              <p
                className="p-1 mt-2"
                style={{
                  backgroundColor: "#F2F4F7",
                  color: "#074786",
                  width: "max-content",
                  borderRadius: "5px",
                }}
              >
                Limited Time
              </p>
            </span>

            <div className="card-body">
              <p className="card-text">Computer Modern clasic with wix support</p>
              <span className="d-flex gap-2">
                <p className="fs-5">$39.96</p>
                <p className="fs-6 text-decoration-line-through">$49.96</p>
                <p className="fs-6 text-danger">(20% Off)</p>
              </span>
              <Link to="" className="btn btn-primary">
                View Deals
              </Link>
            </div>
          </div>
          <div
            className="card p-2 text-center"
            style={{ width: "24rem", position: "relative" }}
          >
            <img
              src={img1}
              className="card-img-top"
              alt="..."
              style={{ width: "70%", marginLeft: "15%" }}
            />
            <span className="d-flex gap-3">
              <p
                className="p-1 mt-2"
                style={{
                  backgroundColor: "#F2F4F7",
                  color: "#074786",
                  width: "max-content",
                  borderRadius: "5px",
                }}
              >
                26% Off
              </p>
              <p
                className="p-1 mt-2"
                style={{
                  backgroundColor: "#F2F4F7",
                  color: "#074786",
                  width: "max-content",
                  borderRadius: "5px",
                }}
              >
                Limited Time
              </p>
            </span>

            <div className="card-body">
              <h5 className="card-title">WebBuilder 1</h5>
              <p className="card-text">Computer Modern clasic with wix support</p>
              <span className="d-flex gap-2">
                <p className="fs-5">$39.96</p>
                <p className="fs-6 text-decoration-line-through">$49.96</p>
                <p className="fs-6 text-danger">(20% Off)</p>
              </span>
              <Link to="" className="btn btn-primary">
                View Deals
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-5 d-flex align-items-center justify-content-between">
          <h3 style={{ color: "#5C6874" }}>
            Sign up and get exclusive special deals
          </h3>
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-primary" type="submit">
                  SignUp
                </button>
              </form>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default BottomPart;
