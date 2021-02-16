import React from "react";

import MovingSphere from "ui/moving-sphere/MovingSphere";
import Logo from "public/svg/logoComponent/Logo";
import ScrollLine from "ui/scrollLine/ScrollLine";

export default function MainPageTableOfContents() {
  return (
    <div className="main-page-table-of-contents">
      <div className="main-page-table-of-contents__work">
        <MovingSphere />
        <h1 className="main-page-table-of-contents__work__headling">
          Work with digital currency and CFDs with ease
        </h1>
        <p className="main-page-table-of-contents__work__text">
          Get an easy-to-use platform, expert trade ideas and efficient support
          with a true industry leader.
        </p>
        <button className="main-page-table-of-contents__work__button">
          Open an account
        </button>
        <div className="main-page-table-of-contents__work__wrapper-line">
          <ScrollLine />
        </div>
      </div>
      <div className="main-page-table-of-contents__about">
        <MovingSphere />
        <h2 className="main-page-table-of-contents__about__headling">
          About Orbit GTM
        </h2>
        <Logo />
        <p className="main-page-table-of-contents__about__text">
          Orbit GTM is a cutting-edge trading platform that allows you to have
          wide access to the cryptocurrency market and CFD contracts. With the
          help of our implements, you will be able to trade your assets on
          different markets. The platform is suitable for beginners and
          experienced traders.
        </p>
        <p className="main-page-table-of-contents__about__text">
          We are ready to help you understand how this market works. We’ll
          ensure you with educational materials which can build strong traders
          from newcomers and improve already skilled traders. Simplify your
          digital trading with us.
        </p>
        <div className="main-page-table-of-contents__about__wrapper-line">
          <ScrollLine />
        </div>
      </div>
    </div>
  );
}
