import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Header from "pages/components/head/Header";
import OpenAccount from "ui/openAccount/OpenAccount";
import Footer from "pages/components/footer/Fotter";
import WrapperAccounts from "ui/wrapper-accounts/WrapperAccounts";
import ScrollLine from "ui/scrollLine/ScrollLine";
import animationMainPage from "animation/mainPage";
import MainPageNews from "pages/components/main-page/main-page-news/MainPageNews"
import MainPageTableOfContents from "pages/components/main-page/main-page-table-of-contents/MainPageTableOfContents";
import MainPageMaterials from "pages/components/main-page/main-page-materials/MainPageMaterials";
import MainPageInstruments from './components/main-page/main-page-instruments/MainPageInstruments';
import MainPageHowStart from "./components/main-page/main-page-how-start/MainPageHowStart";

export default function Main() {
  const [showMoreNews, setShowMoreNews] = useState(false);

  const triggerVideoblock = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    AOS.init();
    AOS.refresh();
  }, []);

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
          <MainPageTableOfContents/>
          <MainPageInstruments/>
          <MainPageMaterials/>  
          <WrapperAccounts/>
          <MainPageNews setShowMoreNews={setShowMoreNews} showMoreNews={showMoreNews} ref={triggerVideoblock}/>
          <MainPageHowStart ref={triggerVideoblock}/>
          <OpenAccount />
        </section>
        <Footer />
      </div>
    </>
  );
}
