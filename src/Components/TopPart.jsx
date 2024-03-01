import React from "react";
import img1 from "../assets/img1.png";
import { Link } from "react-router-dom";
import "../index.css";
const TopPart = () => {
  return (
    <>
      <div className="container p-5">
        <h1 style={{ color: "#2C384A" }}>Best Website Builders in the US</h1>
        <div
          style={{
            height: "1.33px",
            width: "100%",
            backgroundColor: "#E1E4E6",
          }}
        ></div>
        <div
          className="d-flex align-items-center justify-content-between py-2 flex-wrap"
          style={{ color: "#4B5665" }}
        >
          <div className="d-flex gap-2 py-2">
            <i className="ri-checkbox-circle-line"></i>
            <p>
              Last Updated <span>-</span> February 22, 2020{" "}
            </p>
            <i className="ri-information-line"></i>
            <p>Advertising Disclosure</p>
          </div>
          <div
            className="dropdown"
            style={{ backgroundColor: "transparent", marginBottom: "20px" }}
          >
            <button
              className="btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ backgroundColor: "transparent" }}
            >
              Top Relevant
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <Link className="dropdown-item active" to="">
                  Action
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="">
                  Another action
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="">
                  Something else here
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            marginTop: "-11px",
            height: "1.33px",
            width: "100%",
            backgroundColor: "#E1E4E6",
          }}
        ></div>
        <div className="buttons d-flex py-2 gap-5 flex-wrap">
          <button type="button" className="bt btn btn-light">
            Tools
          </button>
          <button type="button" className="bt btn btn-light">
            AWS Builder
          </button>
          <button type="button" className="bt btn btn-light">
            Start Build
          </button>
          <button type="button" className="bt btn btn-light">
            Build Supplies
          </button>
          <button type="button" className="bt btn btn-light">
            Tooling
          </button>
          <button type="button" className="bt btn btn-light">
            BlueHosting
          </button>
        </div>
        <div className="py-2">
          <p className="link">
            Home
            <span>
              <i className="ri-arrow-right-s-line"></i>
            </span>
            Hosting for all
            <span>
              <i className="ri-arrow-right-s-line"></i>
            </span>
            Hosting
            <span>
              <i className="ri-arrow-right-s-line"></i>
            </span>
            Hosting6
            <span>
              <i className="ri-arrow-right-s-line"></i>
            </span>
            Hosting5
          </p>
        </div>
        {/* cards of top part */}
        <div className="mb-2 card p-5 d-flex justify-content-between" style={{flexDirection:"row"}}>
          <span
            className="position-absolute top-0 start-0 translate-middle badge rounded-pill p-3"
            style={{ backgroundColor: "#FF7724" }}
          >
            <i className="ri-trophy-line px-2" style={{ color: "white" }}></i>
            Best Choise
          </span>
          <span
            className="position-absolute top-50 start-0 translate-middle badge rounded-pill p-3"
            style={{ backgroundColor: "#FFFFFF", color: "#626E79" }}
          >
            1
          </span>
          <figure className="imgdiv">
            <img className="card-img" src={img1} alt="img" />
            <figcaption className="px-5">Builder 1</figcaption>
          </figure>
          <div className="text" style={{ width: "50vw" }}>
            <p>
              <span className="fw-bold">
                WixPro 72-Inch Responsive Website Builder
              </span>
              - Comprehensive Digital Platform Creation Tool, Streamlined Design
              Interface for Professional Websites and Online Stores (Black/Blue)
            </p>
            <h6>Main Highlights</h6>
            <p className="p-2">
              [What You Get]: Receive the WixPro website builder suite, access
              to premium design templates, an extensive library of widgets and
              apps, and detailed step-by-step guides.
            </p>
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "blue",
              }}
            >
              Show More <i className="ri-arrow-drop-down-line"></i>
            </button>
          </div>
          <div className="right d-flex flex-column" style={{ gap: "60px" }}>
            <div className="rectangle">
              <p
                className="text-center m-0 p-0"
                style={{ fontSize: "32px", color: "#074786" }}
              >
                9.8
              </p>
              <p
                className="text-center m-0 p-0"
                style={{ fontSize: "14px", color: "#074786" }}
              >
                Exceptional
              </p>
              <span className="text-center" style={{ paddingLeft: "1.3vw" }}>
                <i style={{ color: "#FFB80F" }} className="ri-star-s-fill"></i>
                <i style={{ color: "#FFB80F" }} className="ri-star-s-fill"></i>
                <i style={{ color: "#FFB80F" }} className="ri-star-s-fill"></i>
                <i style={{ color: "#FFB80F" }} className="ri-star-s-fill"></i>
                <i style={{ color: "#FFB80F" }} className="ri-star-s-fill"></i>
              </span>
            </div>
            <button type="button" className="btn btn-primary px-5">
              View
            </button>
          </div>
        </div>
        <div className="mb-2 card p-5 d-flex flex-row justify-content-between">
          <span
            className="position-absolute top-0 start-0 translate-middle badge rounded-pill p-3"
            style={{ backgroundColor: "#FF7724" }}
          >
            <i className="ri-vip-diamond-line px-2" style={{ color: "white" }}></i>
            Best Value
          </span>
          <span
            className="position-absolute top-50 start-0 translate-middle badge rounded-pill p-3"
            style={{ backgroundColor: "#FFFFFF", color: "#626E79" }}
          >
            2
          </span>
          <figure className="imgdiv">
            <img className="card-img" src={img1} alt="img" />
            <figcaption className="px-5">Builder</figcaption>
          </figure>
          <div className="text" style={{ width: "50vw" }}>
            <p>
              <span className="fw-bold">
                SiteCraft 68-Inch Ultimate Web Design Studio
              </span>
              - Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor
              for Dynamic Websites and E-commerce Platforms (Green/White)
            </p>
            <h6>Main Highlights</h6>
            <p className="p-2">
              [What You Get]: Gain access to the SiteCraft design studio,
              featuring a robust selection of design elements, SEO optimization
              tools, and e-commerce integrations.
            </p>
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "blue",
              }}
            >
              Show More <i className="ri-arrow-drop-down-line"></i>
            </button>
          </div>
          <div className="right d-flex flex-column" style={{ gap: "60px" }}>
            <div className="rectangle">
              <p
                className="text-center m-0 p-0"
                style={{ fontSize: "32px", color: "#074786" }}
              >
                9.5
              </p>
              <p
                className="text-center m-0 p-0"
                style={{ fontSize: "14px", color: "#074786" }}
              >
                Excellent
              </p>
              <span className="text-center" style={{ paddingLeft: "1.3vw" }}>
                <i style={{ color: "#FFB80F" }} className="ri-star-s-fill"></i>
                <i style={{ color: "#FFB80F" }} className="ri-star-s-fill"></i>
                <i style={{ color: "#FFB80F" }} className="ri-star-s-fill"></i>
                <i style={{ color: "#FFB80F" }} className="ri-star-s-fill"></i>
                <i style={{ color: "#FFB80F" }} className="ri-star-half-s-fill"></i>
              </span>
            </div>
            <button type="button" className="btn btn-primary px-5">
              View
            </button>
          </div>
        </div>
        <div className="mb-2 card p-5 d-flex flex-row justify-content-between">
          <span
            className="position-absolute top-50 start-0 translate-middle badge rounded-pill p-3"
            style={{ backgroundColor: "#FFFFFF", color: "#626E79" }}
          >
            3
          </span>
          <figure className="imgdiv">
            <img className="card-img" src={img1} alt="img" />
            <figcaption className="px-5">Builder 1</figcaption>
          </figure>
          <div className="text" style={{ width: "50vw" }}>
            <p>
              <span className="fw-bold">
                WixPro 72-Inch Responsive Website Builder
              </span>
              - Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)
            </p>
            <h6>Main Highlights</h6>
            <p className="p-2">
            [What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.
            </p>
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "blue",
              }}
            >
              Show More <i className="ri-arrow-drop-down-line"></i>
            </button>
          </div>
          <div className="right d-flex flex-column" style={{ gap: "60px" }}>
            <div className="rectangle">
              <p
                className="text-center m-0 p-0"
                style={{ fontSize: "32px", color: "#074786" }}
              >
                9.3
              </p>
              <p
                className="text-center m-0 p-0"
                style={{ fontSize: "14px", color: "#074786" }}
              >
                Exceptional
              </p>
              <span className="text-center" style={{ paddingLeft: "1.3vw" }}>
                <i style={{ color: "#FFB80F" }} className="ri-star-s-fill"></i>
                <i style={{ color: "#FFB80F" }} className="ri-star-s-fill"></i>
                <i style={{ color: "#FFB80F" }} className="ri-star-s-fill"></i>
                <i style={{ color: "#FFB80F" }} className="ri-star-s-fill"></i>
                <i style={{ color: "#FFB80F" }} className="ri-star-s-fill"></i>
              </span>
            </div>
            <button type="button" className="btn btn-primary px-5">
              View
            </button>
          </div>
        </div>
        <div className="mb-2 card p-5 d-flex flex-row justify-content-between">
          <span
            className="position-absolute top-50 start-0 translate-middle badge rounded-pill p-3"
            style={{ backgroundColor: "#FFFFFF", color: "#626E79" }}
          >
            4
          </span>
          <figure className="imgdiv">
            <img className="card-img" src={img1} alt="img" />
            <figcaption className="px-5">CDK</figcaption>
          </figure>
          <div className="text" style={{ width: "50vw" }}>
            <p>
              <span className="fw-bold">
              CDK Resposive Builder
              </span>
              : An extensive library of widgets and apps, and detailed step-by-step guides
            </p>
            <h6 className="p-1" style={{backgroundColor:"#F2F4F7" ,color:"#074786", width:"max-content",borderRadius:"5px"}}>26% Off</h6>
            <h6>Main Highlights</h6>
            <div
              className="px-1 py-1"
              style={{ backgroundColor: "#FFF4ED", borderRadius: "20px" }}
            >
              <p className="px-3">
                <span
                  className="px-2 mx-2"
                  style={{ backgroundColor: "#FFFFFF", color: "#1B88F4" }}
                >
                  9.9
                </span>
                Building Responsive
              </p>
              <p className="px-3">
                <span
                  className="px-2 mx-2"
                  style={{ backgroundColor: "#FFFFFF", color: "#1B88F4" }}
                >
                  8.9
                </span>
                Cool
              </p>
              <p className="px-3">
                <span
                  className="px-2 mx-2"
                  style={{ backgroundColor: "#FFFFFF", color: "#1B88F4" }}
                >
                  8.9
                </span>
                Docs
              </p>
            </div>
            <h6 style={{ color: "#2C384A" }}>Why we love it</h6>
            <p style={{ color: "#4B5665" }}>
              <span className="px-2">
                <i
                  className="ri-checkbox-circle-line"
                  style={{ color: "#0954A1", backgroundColor: "#EBF5FF" }}
                ></i>
              </span>
              Documentation
            </p>
            <p style={{ color: "#4B5665" }}>
              <span className="px-2">
                <i
                  className="ri-checkbox-circle-line"
                  style={{ color: "#0954A1", backgroundColor: "#EBF5FF" }}
                ></i>
              </span>
              Easy Use
            </p>
            <p style={{ color: "#4B5665" }}>
              <span className="px-2">
                <i
                  className="ri-checkbox-circle-line"
                  style={{ color: "#0954A1", backgroundColor: "#EBF5FF" }}
                ></i>
              </span>
              Out of box
            </p>
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "blue",
              }}
            >
              Show More <i className="ri-arrow-drop-down-line"></i>
            </button>
          </div>
          <div className="right d-flex flex-column" style={{ gap: "60px" }}>
            <div className="rectangle">
              <p
                className="text-center m-0 p-0"
                style={{ fontSize: "32px", color: "#074786" }}
              >
                9.1
              </p>
              <p
                className="text-center m-0 p-0"
                style={{ fontSize: "14px", color: "#074786" }}
              >
                Very Good
              </p>
              <span className="text-center" style={{ paddingLeft: "1.3vw" }}>
                <i style={{ color: "#FFB80F" }} className="ri-star-s-fill"></i>
                <i style={{ color: "#FFB80F" }} className="ri-star-s-fill"></i>
                <i style={{ color: "#FFB80F" }} className="ri-star-s-fill"></i>
                <i style={{ color: "#FFB80F" }} className="ri-star-s-fill"></i>
                <i style={{ color: "#FFB80F" }} className="ri-star-s-line"></i>
              </span>
            </div>
            <button type="button" className="btn btn-primary px-5">
              View
            </button>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default TopPart;
