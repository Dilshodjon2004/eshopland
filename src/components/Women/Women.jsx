import React from "react";
import "./Women.scss";
const Women = () => {
  return (
    <div className="women-section">
      <div className="header">
        <h1>Women Collection</h1>
        <p>Avaiable in {new Date().getFullYear()}</p>
      </div>
      <div className="look">
        <p>We have 50% off for all products</p>
        <button>Take a look</button>
      </div>
    </div>
  );
};

export default Women;
