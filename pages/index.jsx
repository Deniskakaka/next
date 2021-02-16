import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Collapsible from "react-collapsible";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Header from "pages/components/head/Header";
import OpenAccount from "ui/openAccount/OpenAccount";
import Footer from "pages/components/footer/Fotter";
import Logo from "public/svg/logoComponent/Logo";
import WrapperAccounts from "ui/wrapper-accounts/WrapperAccounts";
import ScrollLine from "ui/scrollLine/ScrollLine";
import Step from "public/svg/step/Step";
import animationMainPage from "animation/mainPage";
import MovingSphere from 'ui/moving-sphere/MovingSphere';

export default function Main() {
  const [showMoreNews, setShowMoreNews] = useState(false);

  const instruments = useRef();
  const headling = useRef();
  const cryptocurrency = useRef();
  const shares = useRef();
  const videoBlock = useRef();
  const triggerVideoblock = useRef();
  const leftImage = useRef();
  const rightImage = useRef();
  const howStart = useRef();
  const counter = useRef();
  const firststep = useRef();
  const secondstep = useRef();
  const threestep = useRef();
  const instrumentsImage = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    AOS.init();
    AOS.refresh();
    animationMainPage.planetAnimation(instruments.current, headling.current);
    animationMainPage.moveImage(
      leftImage.current,
      rightImage.current,
      triggerVideoblock.current
    );
    gsap.to(videoBlock.current, {
      scrollTrigger: {
        trigger: triggerVideoblock.current,
        start: "-50px top",
        end: "300px",
      },
      y: -520,
      opacity: 1,
    });
    ScrollTrigger.matchMedia({
      "(min-width: 360px)": function () {
        let count = gsap.timeline(counter.current, { duration: 2 });
        count
          .from(counter.current, {
            scrollTrigger: {
              trigger: videoBlock.current,
              scrub: true,
              start: "-35% top",
              end: "-35%",
            },
            strokeDashoffset: `${((100 - 125) / 100) * Math.PI * (54 * 2)}`,
          })
          .to(counter.current, {
            scrollTrigger: {
              trigger: videoBlock.current,
              scrub: true,
              start: "-35% top",
              end: "200%",
            },
            strokeDashoffset: `${((100 - 200) / 100) * Math.PI * (54 * 2)}`,
          });
        animationMainPage.step(
          firststep.current,
          secondstep.current,
          threestep.current,
          videoBlock.current
        );
      },
      "(min-width: 768px)": function () {
        animationMainPage.step(
          firststep.current,
          secondstep.current,
          threestep.current,
          videoBlock.current
        );
        let count = gsap.timeline(counter.current, { duration: 2 });
        count
          .from(counter.current, {
            scrollTrigger: {
              trigger: videoBlock.current,
              toggleActions: "paly none reverse none",
              start: "-35% top",
              end: "-35%",
            },
            strokeDashoffset: `${((100 - 125) / 100) * Math.PI * (54 * 2)}`,
          })
          .to(counter.current, {
            scrollTrigger: {
              trigger: videoBlock.current,
              toggleActions: "paly none reverse none",
              start: "-35% top",
              end: "270%",
            },
            strokeDashoffset: `${((100 - 200) / 100) * Math.PI * (54 * 2)}`,
          });
      },
      "(min-width: 990px)": function () {
        let count = gsap.timeline(counter.current, { duration: 2 });
        count
          .from(counter.current, {
            scrollTrigger: {
              trigger: videoBlock.current,
              toggleActions: "paly none reverse none",
              start: "-35% top",
              end: "-30%",
            },
            strokeDashoffset: `${((100 - 125) / 100) * Math.PI * (54 * 2)}`,
          })
          .to(counter.current, {
            scrollTrigger: {
              trigger: videoBlock.current,
              toggleActions: "paly none reverse none",
              start: "-35% top",
              end: "240%",
            },
            strokeDashoffset: `${((100 - 200) / 100) * Math.PI * (54 * 2)}`,
          });
        animationMainPage.step(
          firststep.current,
          secondstep.current,
          threestep.current,
          videoBlock.current
        );
      },
    });
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: howStart.current,
        scrub: true,
        start: "top top",
        end: "+=260%",
        pin: true,
      },
    });
  }, []);

  const moveImage = (pathLength, url) => {
    instrumentsImage.current.src = `${url}`;
    instrumentsImage.current.style.transform = `translateY(${150 * pathLength}px)`;
  };

  return (
    <>
      <Head>
        <title>Orbit-GMT</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <div className="main">
        <Header />
        <section className="main-page">
          <div className="main-page-table-of-contents">
            <div className="main-page-table-of-contents__work">
            <MovingSphere/>
              <h1 className="main-page-table-of-contents__work__headling">
                Work with digital currency and CFDs with ease
              </h1>
              <p className="main-page-table-of-contents__work__text">
                Get an easy-to-use platform, expert trade ideas and efficient
                support with a true industry leader.
              </p>
              <button className="main-page-table-of-contents__work__button">
                Open an account
              </button>
              <div className="main-page-table-of-contents__work__wrapper-line">
                <ScrollLine />
              </div>
            </div>
            <div className="main-page-table-of-contents__about">
            <MovingSphere/>
              <h2 className="main-page-table-of-contents__about__headling">
                About Orbit GTM
              </h2>
              <Logo />
              <p className="main-page-table-of-contents__about__text">
                Orbit GTM is a cutting-edge trading platform that allows you to
                have wide access to the cryptocurrency market and CFD contracts.
                With the help of our implements, you will be able to trade your
                assets on different markets. The platform is suitable for
                beginners and experienced traders.
              </p>
              <p className="main-page-table-of-contents__about__text">
                We are ready to help you understand how this market works. We’ll
                ensure you with educational materials which can build strong
                traders from newcomers and improve already skilled traders.
                Simplify your digital trading with us.
              </p>
              <div className="main-page-table-of-contents__about__wrapper-line">
                <ScrollLine />
              </div>
            </div>
          </div>
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
                  <h3 className="main-page-instruments__item__headling">
                    Forex
                  </h3>
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
                  <h3 className="main-page-instruments__item__headling">
                    Indicies
                  </h3>
                  <p className="main-page-instruments__item__text">
                    Trade on a basket of top shares representing the perfomance
                    of a country`s economy
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
                onMouseOver={
                  (() => moveImage(3.74, "/static/pexels-todd-trapani-1385056 1.png")
                 )
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
                onMouseOver={
                  (() => moveImage(5.1, "/static/Depositphotos_74090101_l-2015 1.png")
                  )
                }
              >
                <div className="main-page-instruments__item__wrapper-text">
                  <h3 className="main-page-instruments__item__headling">
                    Shares
                  </h3>
                  <p className="main-page-instruments__item__text">
                    Take a position on the perfomance of the world`s largest
                    companies
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
                onMouseOver={
                  (() => moveImage(6.4,"/static/Depositphotos_8283612_l-2015 1.png")
                  )
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
              researches to help approve your traders’ confidence. Our products
              can be applied in Crypto trading, as well as for regulated market
              platforms including Cysec, MiFID2, and others.
            </p>
            <button className="main-page-materials__button">
              Explore more
            </button>
            <div className="main-page-materials__wrapper-line">
              <ScrollLine />
            </div>
          </div>
          <WrapperAccounts />
          <div className="main-page-news">
            <h2 className="main-page-news__headling">Latest news</h2>
            <div className="main-page-news__image"></div>
            <Collapsible open={showMoreNews}>
              <div className="main-page-news__item">
                <div className="main-page-news__item__image">
                  <img src="https://www.omarimc.com/wp-content/uploads/2017/01/news-636978_960_720.jpg" />
                  <span>cointelegraph</span>
                  <span>01.04.2019 16:34</span>
                </div>
                <p className="main-page-news__item__text">
                  <div>
                    <span className="main-page-news__item__text__headling">cointelegraph</span>
                    <span className="main-page-news__item__text__date">01.04.2019 16:34</span>
                  </div>
                  Research: Ethereum-Based Prediction Market Augur Currently
                  Faces a Design Flaw Attack
                </p>
              </div>
              <div className="main-page-news__item">
                <div className="main-page-news__item__image">
                  <img src="https://www.omarimc.com/wp-content/uploads/2017/01/news-636978_960_720.jpg" />
                  <span>cointelegraph</span>
                  <span>01.04.2019 16:34</span>
                </div>
                <p className="main-page-news__item__text">
                  <div>
                    <span className="main-page-news__item__text__headling">cointelegraph</span>
                    <span className="main-page-news__item__text__date">01.04.2019 16:34</span>
                  </div>
                  Research: Ethereum-Based Prediction Market Augur Currently
                  Faces a Design Flaw Attack
                </p>
              </div>
            </Collapsible>
            <button
              className="main-page-news__show"
              onClick={() => setShowMoreNews(!showMoreNews)}
              ref={triggerVideoblock}
            >
              More news
            </button>
          </div>
          <div className="main-page-how-start" ref={howStart}>
            <h2
              className="main-page-how-start__headling"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-once={true}
            >
              How to start trading
            </h2>
            <div className="main-page-how-start__image">
              <div className="main-page-how-start__image__center-image"></div>
              <div
                className="main-page-how-start__image__left-image"
                ref={leftImage}
              ></div>
              <div
                className="main-page-how-start__image__right-image"
                ref={rightImage}
              ></div>
              <div className="main-page-how-start__describe" ref={videoBlock}>
                <Step
                  width="164px"
                  height="164px"
                  ref={counter}
                  firststep={firststep}
                  secondstep={secondstep}
                  threestep={threestep}
                />
                <h3 className="main-page-how-start__describe__headling">
                  Open an account
                </h3>
                <p className="main-page-how-start__describe__text">
                  Register in the Trader`s Room, upload required documents, fill
                  in the `Open an Account` form
                </p>
                <div className="main-page-how-start__describe__wrapper-line">
                  <ScrollLine />
                </div>
              </div>
            </div>
          </div>
          <OpenAccount />
        </section>
        <Footer />
      </div>
    </>
  );
}
