import React from "react";
import "./CreamSection.scss";
import arr from "../../data/Gifts";
const CreamSection = () => {
  return (
    <section className="main">
      <div className="center-text">
        <h1>Good Gifts Made Easy</h1>
      </div>

      <div className="allExp">
        {arr.map((item) => (
          <div className="exps">
            <div className="gift">
              <img src={item.img} alt="" />
            </div>
            <p>{item.title}</p>
            <p>{item.descr}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CreamSection;
