import React from "react";
import "../index.css";
import { FaList, FaSearch } from "react-icons/fa";
import { IoDocumentText, IoSettings } from "react-icons/io5";

const NavBar = () => {
  return (
    <nav>
      <div className="main-nav">
        <div className="left-section">
          <button className="nav-svg business">
            <span>Business Details</span>
            <FaSearch  className="icons"/>
          </button>
          <button className="nav-svg">
            <span>Settings</span>
            <IoSettings className="icons"/>
          </button>
          <button className="nav-svg">
            <span>Standard texts</span>
            <FaList className="icons"/>
          </button>
          <button className="nav-svg">
            <span>Go to invoices</span>
            <IoDocumentText className="icons"/>
          </button>
        </div>
        <div className="right-section">
          <div className="nav-svg">
            <span>English</span>
            <picture>
              <img src="/uk.png" alt="Flag" />
            </picture>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
