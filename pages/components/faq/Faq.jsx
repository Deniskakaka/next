import React from "react";
import Head from "next/head";

import Header from "pages/components/head/Header";
import OpenAccount from "ui/openAccount/OpenAccount";
import Footer from "pages/components/footer/Fotter";
import ScrollLine from "ui/scrollLine/ScrollLine";
import BreadCrumbs from "ui/bread-crumbs/BreadCrumbs";
import Question from "ui/question/Qiestion";

export default function Faq() {
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
        <section className="faq">
          <div className="faq-top">
            <BreadCrumbs
              arrayLinks={[
                { name: "Home", href: "/" },
                { name: "Education", href: "/" },
                { name: "FAQ", href: "/components/faq/Faq", as: "/FAQ" },
              ]}
            />
            <h1 className="faq-top__headling">FAQ</h1>
            <p className="faq-top__text">
              We are ready to help you understand how this market works. We’ll
              ensure you with educational materials which can build strong
              traders from newcomers and improve already skilled traders.
              Simplify your digital trading with us.
            </p>
            <button className="faq-top__button">Open an account</button>
            <div className="faq-top__wrapper-line">
              <ScrollLine />
            </div>
          </div>
          <div className="faq-categories">
            <h2 className="faq-categories__headling">FAQ categories</h2>
            <div className="faq-categories__filter">
              <div className="faq-categories__filter__item-wrapper">
                <button className="faq-categories__filter__item">
                  General questions
                </button>
                <button className="faq-categories__filter__item">
                  CFD questions
                </button>
                <button className="faq-categories__filter__item">
                  Cryptocurrency questions
                </button>
                <button className="faq-categories__filter__item">
                  Support
                </button>
              </div>
            </div>
          </div>
          <div className="faq-list-questions">
            <h2 className="faq-list-questions__headling">General questions</h2>
            <div className="faq-list-questions__item">
              <Question
                question="How can I make a deposit on your website?"
                answear="Cryptocurrencies take every precaution to prevent fraud and be fully compliant with KYC and AML regulations for trading of digital assets."
              />
            </div>
            <div className="faq-list-questions__item">
              <Question
                question="How can I make a deposit on your website?"
                answear="Cryptocurrencies take every precaution to prevent fraud and be fully compliant with KYC and AML regulations for trading of digital assets."
              />
            </div>
            <div className="faq-list-questions__item">
              <Question
                question="How can I make a deposit on your website?"
                answear="Cryptocurrencies take every precaution to prevent fraud and be fully compliant with KYC and AML regulations for trading of digital assets."
              />
            </div>
            <div className="faq-list-questions__item">
              <Question
                question="How can I make a deposit on your website?"
                answear="Cryptocurrencies take every precaution to prevent fraud and be fully compliant with KYC and AML regulations for trading of digital assets."
              />
            </div>
            <div className="faq-list-questions__item">
              <Question
                question="How can I make a deposit on your website?"
                answear="Cryptocurrencies take every precaution to prevent fraud and be fully compliant with KYC and AML regulations for trading of digital assets."
              />
            </div>
            <div className="faq-list-questions__item">
              <Question
                question="How can I make a deposit on your website?"
                answear="Cryptocurrencies take every precaution to prevent fraud and be fully compliant with KYC and AML regulations for trading of digital assets."
              />
            </div>
            <div className="faq-list-questions__item">
              <Question
                question="How can I make a deposit on your website?"
                answear="Cryptocurrencies take every precaution to prevent fraud and be fully compliant with KYC and AML regulations for trading of digital assets."
              />
            </div>
            <div className="faq-list-questions__circle"></div>
          </div>
          <OpenAccount />
        </section>
        <Footer />
      </div>
    </>
  );
}
