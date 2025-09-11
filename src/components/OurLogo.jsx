import React from "react";
import "../index.css";
import { IoCloudUpload } from "react-icons/io5";
import { FaSearchPlus } from "react-icons/fa";

const OurLogo = () => {
  return (
    <div className="our-logo">
      <p style={{ textAlign: "center" }}>Our Logo</p>
      <hr className="h-line"/>
      <picture>
        <img src="/uk.png" alt="Logo" />
      </picture>
      <div className="logo-container">
        <div className="logo-seen">
          <p>Use Logo</p>
          <div className="post-city">
            <button>Yes</button>
            <button>No</button>
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
            <FaSearchPlus style={{marginTop: "3px"}}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurLogo;
