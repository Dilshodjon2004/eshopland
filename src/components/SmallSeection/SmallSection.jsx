import React from "react";
import "./SamllSection.scss";
import Cards from "../../data/Cards.json";
const SmallSection = () => {
  return (
    <section className="second-section">
      <div className="allcart">
        {Cards.map((item) => (
          <>
            <div className="cart">
              <img src={item.imgAdd} alt="" />
              <p>{item.descr}</p>
              <h1>{item.title}</h1>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default SmallSection;
