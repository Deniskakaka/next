import React, { useRef } from "react";
import Link from "next/link";

import Logo from "public/svg/logoComponent/Logo";
import IconUser from "public/svg/iconUser/IconUser";
import Plus from "public/svg/plus/Plus";
import HamburgerMenu from "ui/hamburger-menu/HamburgerMenu";

export default function Header() {
  const showMenu = React.createRef();

  const openMenu = () => {
    showMenu.current.classList.toggle("animate");
  };

  return (
    <header className="header">
      <Link href="/">
        <a className="header-login">
          <IconUser width='24px' height='24px'/> Login
        </a>
      </Link>
      <div className="header-wrapper-logo">
        <Logo />
      </div>
      <HamburgerMenu ref={showMenu} openMenu={openMenu} />
      <div className="header-navigation">
        <span className="header-navigation-switch-language">English</span>
        <div className="header-navigation__top">
          <Link href="/components/partnership/Partnership" as="/partnership">
            <a className="header-navigation__top__item">Partnership</a>
          </Link>
          <Link href="/components/contact-us/ContactUs" as="/contact-us">
            <a className="header-navigation__top__item">Contact us</a>
          </Link>
          <Link href="/">
            <a className="header-navigation__top__item">
              <IconUser width="12" height="12" /> Login
            </a>
          </Link>
          <Link href="/">
            <a className="header-navigation__top__account">Create an Account</a>
          </Link>
        </div>
        <div className="header-navigation__bottom">
          <Link href="/">
            <a className="header-navigation__bottom__item">
              Markets
              <Plus margin={"6px"} />
            </a>
          </Link>
          <Link href="/components/about/About" as="/about">
            <a className="header-navigation__bottom__item">
              About us
              <Plus margin={"6px"} />
            </a>
          </Link>
          <Link href="/">
            <a className="header-navigation__bottom__item">
              Trader`s tools
              <Plus margin={"6px"} />
            </a>
          </Link>
          <Link href="/">
            <a className="header-navigation__bottom__item">
              Education
              <Plus margin={"6px"} />
            </a>
          </Link>
          <Link href="/">
            <a className="header-navigation__bottom__item">
              Why Orbit GTM
              <Plus margin={"6px"} />
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
