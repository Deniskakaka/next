import React from "react";

import Logo from "public/svg/logoComponent/Logo";
import LinksFooter from "ui/links-footer/LinksFooter";
import Dowjones from "public/svg/dowjones/Dowjones";
import Maestro from "public/svg/maestro/Maestro";
import Master from "public/svg/master/Master";
import London from "public/svg/london/London";
import Visa from "public/svg/visa/Visa";

export default function Footer() {
  return (
    <footer className="footer">
      <Logo />
      <div className="footer-list-links">
        <LinksFooter
          arr={[
            { text: "Forex", link: "/" },
            { text: "Shares", link: "/" },
            { text: "Commodities", link: "/" },
            { text: "Indicies", link: "/" },
            { text: "Currency tranding", link: "/" },
            { text: "Bonds", link: "/" },
            { text: "Cryptocurrency", link: "/" },
          ]}
          headling={"Markets"}
        />
        <LinksFooter
          arr={[
            {
              text: "About company",
              link: "/components/about/About",
              as: "/about",
            },
            { text: "Why Orbit GTM", link: "/" },
            { text: "Company statement", link: "/" },
            {
              text: "Contact us",
              link: "/components/contact-us/ContactUs",
              as: "/contact-us",
            },
            {
              text: "Partnership",
              link: "/components/partnership/Partnership",
              as: "/partnership",
            },
          ]}
          headling={"About us"}
        />
        <LinksFooter
          arr={[
            { text: "Trading calendar", link: "/" },
            { text: "Calculator", link: "/" },
            { text: "Trader`s glossary", link: "/" },
            { text: "Charts", link: "/" },
            { text: "Currency", link: "/" },
          ]}
          headling={"Trader`s tools"}
        />
        <LinksFooter
          arr={[
            { text: "Video", link: "/" },
            { text: "Books", link: "/" },
            { text: "News", link: "/" },
            { text: "FAQ", link: "/components/faq/Faq", as: "/FAQ" },
            {
              text: "Risk management",
              link: "/components/risk-management/RiskManagement",
            },
          ]}
          headling={"Education"}
        />
        <LinksFooter
          arr={[
            { text: "Privacy policy", link: "/" },
            { text: "Terms and conditions", link: "/" },
            { text: "Cookies policy", link: "/" },
            { text: "Risk disclosure", link: "/" },
            { text: "Conflicts of interests", link: "/" },
          ]}
          headling={"Policies and regulation"}
        />
        <hr className="footer-list-links__line" />
      </div>
      <div className="footer-wrapper-describe">
        <div className="footer-images">
          <Maestro />
          <Visa />
          <Master />
          <London />
          <Dowjones />
        </div>
        <div className="footer-description">
          <p>
            Risk Warning: Trading Contracts For Difference and Foreign Exchange
            is highly speculative and carries a level of risk that may not be
            suitable for all investors. You may lose some or all of your
            invested capital; therefore, you should not speculate with the
            capital you cannot afford to lose.
          </p>
          <p>
            You should be aware of all the risks associated with trading
            Contracts For Difference and Foreign Exchange. Please ensure you
            read our Terms and Conditions and Risk Disclosure Statement
          </p>
          <span>Copyright © Orbit GTM 2021. All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
