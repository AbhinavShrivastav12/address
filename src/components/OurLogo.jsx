import React from "react";
import "../index.css";
import { IoCloudUpload } from "react-icons/io5";
import { FaSearchPlus } from "react-icons/fa";

const OurLogo = () => {
  return (
    <div className="our-logo">
      <p style={{ textAlign: "center", paddingBottom:"10px" }}>Our Logo</p>
      <hr className="h-line"/>
      <picture>
        <img src="/uk.png" alt="Logo" />
      </picture>
      <div className="logo-container">
        <div className="logo-seen">
          <p>Use Logo</p>
          <div className="post-city">
            <button className="yes-no">Yes</button>
            <button className="yes-no">No</button>
          </div>
        </div>
        <div className="logo-seen">
          <p>Choose Logo</p>
          <button>
            <span>Upload New</span>
            <IoCloudUpload className="icons"/>
          </button>
        </div>
        <div className="logo-seen">
          <p>Preview Logo</p>
          <button>
            <span>Preview</span>
            <FaSearchPlus className="icons" style={{margin:"0 30px"}}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurLogo;
