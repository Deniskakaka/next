import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import animationMainPage from "animation/mainPage";

const MainPageInstruments = () => {
  const headling = useRef();
  const instrumentsImage = useRef();
  const instruments = useRef();
  const shares = useRef();
  const cryptocurrency = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    animationMainPage.planetAnimation(instruments.current, headling.current);
  });

  const moveImage = (pathLength, url) => {
    instrumentsImage.current.src = `${url}`;
    instrumentsImage.current.style.transform = `translateY(${
      150 * pathLength
    }px)`;
  };

  return (
    <div className="main-page-instruments" ref={instruments}>
      <h2 className="main-page-instruments__headling" ref={headling}>
        Trade your favorite instruments from around the world
      </h2>
      <div className="main-page-instruments__wrapper-item">
        <img
          src="/static/pexels-mayofi-5912326 1 (1).png"
          className="main-page-instruments__wrapper-item__image"
          ref={instrumentsImage}
        />
        <div
          className="main-page-instruments__item"
          onMouseOver={() =>
            moveImage(0.1, "/static/pexels-mayofi-5912326 1 (1).png")
          }
        >
          <div className="main-page-instruments__item__wrapper-text">
            <h3 className="main-page-instruments__item__headling">Forex</h3>
            <p className="main-page-instruments__item__text">
              Trade on the strenght of one currency versus another
            </p>
          </div>
          <Link href="/">
            <a className="main-page-instruments__item__link">
              More info <img src="/static/arrow.png" />
            </a>
          </Link>
        </div>
        <div
          className="main-page-instruments__item"
          onMouseOver={() =>
            moveImage(
              1.13,
              "/static/analyzing-data-close-up-young-businessman-who-holds-glasses-looks-gff-while-working-creative-office 1.png"
            )
          }
        >
          <div className="main-page-instruments__item__wrapper-text">
            <h3 className="main-page-instruments__item__headling">Indicies</h3>
            <p className="main-page-instruments__item__text">
              Trade on a basket of top shares representing the perfomance of a
              country`s economy
            </p>
          </div>
          <Link href="/">
            <a className="main-page-instruments__item__link">
              More info <img src="/static/arrow.png" />
            </a>
          </Link>
        </div>
        <div
          className="main-page-instruments__item"
          ref={cryptocurrency}
          onMouseOver={() =>
            moveImage(2.42, "/static/pexels-worldspectrum-843700 1.png")
          }
        >
          <div className="main-page-instruments__item__wrapper-text">
            <h3 className="main-page-instruments__item__headling">
              Cryptocurrency
            </h3>
            <p className="main-page-instruments__item__text">
              Speculate on the price of some of the most popular
              cryptocurrencies
            </p>
          </div>
          <Link href="/">
            <a className="main-page-instruments__item__link">
              More info <img src="/static/arrow.png" />
            </a>
          </Link>
        </div>
        <div
          className="main-page-instruments__item"
          onMouseOver={() =>
            moveImage(3.74, "/static/pexels-todd-trapani-1385056 1.png")
          }
        >
          <div className="main-page-instruments__item__wrapper-text">
            <h3 className="main-page-instruments__item__headling">
              Commodities
            </h3>
            <p className="main-page-instruments__item__text">
              Speculate on the price of all the most popular commodities,
              including gold , silver, oil and natural gas
            </p>
          </div>
          <Link href="/">
            <a className="main-page-instruments__item__link">
              More info <img src="/static/arrow.png" />
            </a>
          </Link>
        </div>
        <div
          className="main-page-instruments__item"
          ref={shares}
          onMouseOver={() =>
            moveImage(5.1, "/static/Depositphotos_74090101_l-2015 1.png")
          }
        >
          <div className="main-page-instruments__item__wrapper-text">
            <h3 className="main-page-instruments__item__headling">Shares</h3>
            <p className="main-page-instruments__item__text">
              Take a position on the perfomance of the world`s largest companies
            </p>
          </div>
          <Link href="/">
            <a className="main-page-instruments__item__link">
              More info <img src="/static/arrow.png" />
            </a>
          </Link>
        </div>
        <div
          className="main-page-instruments__item"
          onMouseOver={() =>
            moveImage(6.4, "/static/Depositphotos_8283612_l-2015 1.png")
          }
        >
          <div className="main-page-instruments__item__wrapper-text">
            <h3 className="main-page-instruments__item__headling">
              Treasuries
            </h3>
            <p className="main-page-instruments__item__text">
              Take a view on goverment bonds, gifts and treasury notes
            </p>
          </div>
          <Link href="/">
            <a className="main-page-instruments__item__link">
              More info <img src="/static/arrow.png" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPageInstruments;
