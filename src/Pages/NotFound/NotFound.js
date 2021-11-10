import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="text-dark text-center">
        <h1 className="py-4 bg-warning fw-bold">
          Sorry, the page not found !!!
        </h1>
      </div>
      <div className="d-flex align-items-end justify-content-center h-75">
        <Link to="/home">
          {" "}
          <button className="btn btn-warning btn-lg not-found-btn fw-bolder">
            {" "}
            Go Back{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
