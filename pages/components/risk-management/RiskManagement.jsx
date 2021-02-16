import React from "react";
import Head from "next/head";

import Header from "pages/components/head/Header";
import OpenAccount from "ui/openAccount/OpenAccount";
import Footer from "pages/components/footer/Fotter";

export default function RiskManagement() {
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
        <section className="risk-management">
          <div className="risk-management-top">
            <h1 className="risk-management-top__headling">
              Risk management for Forex and CFD trading
            </h1>
            <button className="risk-management-top__button">
              Open an account
            </button>
          </div>
          <div className="risk-management-describe">
            <div className="risk-management-describe__item">
              <h2 className="risk-management-describe__item__headling">
                What is risk management?
              </h2>
              <p className="risk-management-describe__item__text">
                Risk management is a process of recognizing, evaluating, and
                controlling all the threats of organization and capital
                earnings. Risk can be from different sources, for instance,
                legal liabilities, financial uncertainty, strategic management
                errors, and natural disasters. Digital trading platforms also
                prefer to take into account risk management.
              </p>
              <p className="risk-management-describe__item__text">
                Forex and Contracts For Difference (CFD) use leverage which can
                increase your profit or loss. And, as you know, the higher the
                potential profit, the higher the risk. sitename uses risk
                management to reduce trading risks.
              </p>
            </div>
            <div className="risk-management-describe__item">
              <h2 className="risk-management-describe__item__headling">
                What are the general trading risks?
              </h2>
              <h3 className="risk-management-describe__item__verySmallHeadling">
                Forex and leverage money loss risk
              </h3>
              <p className="risk-management-describe__item__text">
                Forex risk management uses numerous tools that can help you
                reduce trading losses and receive high profit. Forex risk
                management is based on four significant steps:
              </p>
              <ul className="risk-management-describe__item__list">
                <li className="risk-management-describe__item__list__item">
                  Search for possible risks
                </li>
                <li className="risk-management-describe__item__list__item">
                  Analysis and evaluation of the risk
                </li>
                <li className="risk-management-describe__item__list__item">
                  Finding solutions to reduce the risk
                </li>
                <li className="risk-management-describe__item__list__item">
                  Management and application of the solutions to improve the
                  trading system
                </li>
              </ul>
              <p className="risk-management-describe__item__text">
                Another way is to use a leverage effect which offers reduced
                margin requirement. Here you have the same jeopardy. You can
                lose your investments. However, sitename risk management system
                helps to forecast it and save your money. We also offer you to
                carefully select your leverage according to your account volume.
              </p>
            </div>
            <div className="risk-management-describe__item">
              <h2 className="risk-management-describe__item__smallHeadling">
                Inaccurate market evaluation
              </h2>
              <p className="risk-management-describe__item__text">
                Forex and CFD trading directly depend on market sequence.
                Sometimes the difference between the bid and ask price varies
                and your market assessment can contain mistakes. The market is
                constantly affected by the news, trends, opinions, and political
                situations. To prevent defects, Orbit GTM uses inbuilt tools
                that help to evaluate the market as accurate as it’s possible.
              </p>
            </div>
            <div className="risk-management-describe__item">
              <h2 className="risk-management-describe__item__smallHeadling">
                Market gaps
              </h2>
              <p className="risk-management-describe__item__text">
                They usually include significant leaps in price. Despite market
                gaps that allow companies to receive more customers by
                increasing awareness and creating targeted offers or advertising
                campaigns, they also bring big gaps in traders pockets. To
                prevent failure, track your profit.
              </p>
            </div>
          </div>
          <div className="risk-management-tools">
            <h2 className="risk-management-tools__headling">
              Risk management tools
            </h2>
            <div className="risk-management-tools-wrapper">
              <div className="risk-management-tools__tool">
                <div className="risk-management-tools__tool__item">
                  <h3 className="risk-management-tools__tool__item__headling">
                    Stop-loss
                  </h3>
                  <p className="risk-management-tools__tool__item__text">
                    Quotes can change rapidly, especially when the market is
                    unstable. To prevent unpleasant cash loss, traders place
                    stop-loss order. It reacts faster than a regular human.
                    Stop-loss is one of the most important risk management
                    tools. With Orbit GTM account you can create a unique
                    stop-loss and protect your trading profit.
                  </p>
                </div>
                <div className="risk-management-tools__tool__item">
                  <h3 className="risk-management-tools__tool__item__headling">
                    Order size
                  </h3>
                  <p className="risk-management-tools__tool__item__text">
                    Quotes can change rapidly, especially when the market is
                    unstable. To prevent unpleasant cash loss, traders place
                    stop-loss order. It reacts faster than a regular human.
                    Stop-loss is one of the most important risk management
                    tools. With Royal Bitex account you can create a unique
                    stop-loss and protect your trading profit.
                  </p>
                </div>
              </div>
              <div className="risk-management-tools__tool">
                <div className="risk-management-tools__tool__item">
                  <h3 className="risk-management-tools__tool__item__headling">
                    External factors
                  </h3>
                  <p className="risk-management-tools__tool__item__text">
                    Quotes can change rapidly, especially when the market is
                    unstable. To prevent unpleasant cash loss, traders place
                    stop-loss order. It reacts faster than a regular human.
                    Stop-loss is one of the most important risk management
                    tools. With Orbit GTM account you can create a unique
                    stop-loss and protect your trading profit.
                  </p>
                </div>
                <div className="risk-management-tools__tool__item">
                  <h3 className="risk-management-tools__tool__item__headling">
                    Choosing leverage
                  </h3>
                  <p className="risk-management-tools__tool__item__text">
                    Quotes can change rapidly, especially when the market is
                    unstable. To prevent unpleasant cash loss, traders place
                    stop-loss order. It reacts faster than a regular human.
                    Stop-loss is one of the most important risk management
                    tools. With Orbit GTM account you can create a unique
                    stop-loss and protect your trading profit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="risk-management-sum-up">
            <h2 className="risk-management-sum-up__headling">To sum up</h2>
            <ul className="risk-management-sum-up__list">
              <li className="risk-management-sum-up__list__item">
                The best way to manage business risk and maintain adequate fund
                level. How is that useful? Simply, it allows a company to
                withstand internal and reduce external storms, and then correct
                and eliminate them.
              </li>
              <li className="risk-management-sum-up__list__item">
                Practice effective trade and risk management. Finding your
                weaknesses and smart managing of them helps you to limit your
                losses.
              </li>
              <li className="risk-management-sum-up__list__item">
                Work on your emotional condition, especially if you are a
                novice. Psychological factor of failure can have a big influence
                on you. So, think about how to pass through fear of failure.
              </li>
              <li className="risk-management-sum-up__list__item">
                Orbit GTM offers learning material to help you improve your
                trading skills. Choose the type of training you prefer more
                (videos, books, news, charts) that will help you understand how
                digital marketing works.
              </li>
            </ul>
          </div>
          <OpenAccount />
        </section>
        <Footer />
      </div>
    </>
  );
}
