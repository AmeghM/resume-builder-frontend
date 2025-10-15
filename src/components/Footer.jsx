import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-primary text-light pt-4 pb-4  mt-5">
        <div className="container text-center">
          <h5 className="mb-3">ResSwift</h5>
          <p className="mb-1">resswift@gmail.com | +91-9087654321</p>
          <p className="mb-3">
            <a href="#" className="text-light text-decoration-none mx-2">
              LinkedIn
            </a>
            |
            <a href="#" className="text-light text-decoration-none mx-2">
              WhatsApp
            </a>
            |
            <a href="#" className="text-light text-decoration-none mx-2">
              Twitter
            </a>
          </p>
          <div className="border-top border-secondary pt-3">
            <p className="mb-0">© ResSwift. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
