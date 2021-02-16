import React from "react";
import ScrollLine from "ui/scrollLine/ScrollLine";

export default function MainPageMaterials() {
  return (
    <div className="main-page-materials">
      <h2 className="main-page-materials__headling">
        Our educational materials
      </h2>
      <div className="main-page-materials__images">
        <div className="main-page-materials__images__laptop"></div>
        <div className="main-page-materials__images__ipad"></div>
        <div className="main-page-materials__images__iphone"></div>
      </div>
      <p className="main-page-materials__text">
        We provide a high-quality trading education, signals and market
        researches to help approve your traders’ confidence. Our products can be
        applied in Crypto trading, as well as for regulated market platforms
        including Cysec, MiFID2, and others.
      </p>
      <button className="main-page-materials__button">Explore more</button>
      <div className="main-page-materials__wrapper-line">
        <ScrollLine />
      </div>
    </div>
  );
}
