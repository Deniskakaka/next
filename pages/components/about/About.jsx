import React from "react";
import Head from "next/head";

import Header from "pages/components/head/Header";
import OpenAccount from "ui/openAccount/OpenAccount";
import Footer from "pages/components/footer/Fotter";

export default function About() {
  return (
    <>
      <Head>
        <title>Orbit-GMT</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="main">
        <Header />
        <section className="about">
          <div className="about-top">
            <h1 className="about-top__headling">About company</h1>
            <p className="about-top__text">
              Work with an innovating and safe trading platform and have wide
              access to the cryptocurrency market and CFD contracts. Reach
              agreements that will lead you to growth in wealth, use the ability
              to trade cryptocurrency day-and-night, and make real money.
            </p>
            <button className="about-top__button">Open an account</button>
          </div>
          <div className="about-description">
            <p className="about-description__text">
              Orbit GTM is more than just a platform where you can make currency
              exchanges. It is a revolutionary way to perform digital currency
              exchanges and CFD contracts. We believe that client confidence,
              availability to market analysis, and safety in trading are three
              algorithms that provide qualified interaction between us and our
              clients. We utilize powerful computers to transact numerous orders
              in a short time. What does it mean for you as a client? You will
              have a potential to perform billions of orders and review numerous
              markets and exchanges quickly. It is a big advantage compared to
              other crypto trades.
            </p>
            <p className="about-description__text">
              Our team developed forefront technology that uses High-Frequency
              Trading to the full. The approach gives you quick financing
              options, a wide range of digital currencies to gain profit
              constantly. With Orbit GTM you have a good chance to expand your
              business. Orbit GTM was designed to help traders to execute their
              trades quickly and fluently. If you have any additional needs or
              questions, our support department is available 24/7 and ready to
              help you solve the issue.
            </p>
            <div className="about-description__circles"></div>
          </div>
          <OpenAccount />
          <Footer />
        </section>
      </div>
    </>
  );
}
