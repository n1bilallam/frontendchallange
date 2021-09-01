import React from "react";
import "./Skelton.css";
function Skelton() {
  return (
    <div className="skelton">
      <ul className="o-vertical-spacing o-vertical-spacing--l">
        <li className="blog-post o-media">
          <div className="o-media__figure">
            <span
              className="skeleton-box"
              style={{ width: "120px", height: "150px" }}
            ></span>
          </div>
          <div className="o-media__body">
            <div className="o-vertical-spacing">
              <h3 className="blog-post__headline">
                <span className="skeleton-box" style={{ width: "35%" }}></span>
              </h3>
              <p>
                <span className="skeleton-box" style={{ width: "80%" }}></span>
                <span className="skeleton-box" style={{ width: "90%" }}></span>
              </p>
              <div className="blog-post__meta">
                <span className="skeleton-box" style={{ width: "70px" }}></span>
                <span className="skeleton-box" style={{ width: "70px" }}></span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Skelton;
