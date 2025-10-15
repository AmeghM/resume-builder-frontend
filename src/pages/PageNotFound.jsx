import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <section className="bg-light w-100">
        <div
          className="text-center d-flex justify-content-center align-items-center flex-column"
          style={{ height: "500px" }}
        >
          <img
            src="https://lh5.googleusercontent.com/proxy/Jh6xaJJFtCN5pmzHd5fMrfq0SIyMYBItLVSg3GlgTePkuQk8U2XQv1Doe0OhACDo_fl7uTJXPbNmQ9XDDPjUHoCMyYcjL47PbISmCYNc"
            alt=""
            style={{ width: "250px" }}
          />
          <h4>ERROR: PAGE NOT FOUND</h4>
          <h1 style={{ fontSize: "80px" }}>404</h1>
          <p>This page isn’t available.</p>
          <Link to={"/"} className="btn btn-primary">
            Go to Home
          </Link>
        </div>
      </section>
    </>
  );
}

export default PageNotFound;
