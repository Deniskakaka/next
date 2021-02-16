import React, { useEffect } from "react";
import Head from "next/head";

import Header from "pages/components/head/Header";
import OpenAccount from "ui/openAccount/OpenAccount";
import Footer from "pages/components/footer/Fotter";

export default function ContactUs() {
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
        <section className="contact-us">
          <div className="contact-us-planet"></div>
          <div className="contact-us-describe">
            <h1 className="contact-us-describe__headling">Contact us</h1>
            <p className="contact-us-describe__text">
              Get in touch with us. You can contact us by filling in the form
              below. Simply provide us with your first name, last name, email,
              country, phone number (including your country code) and your
              message.
            </p>
            <p className="contact-us-describe__text">
              Alternatively, you can get in touch with any of our departments on
              their relevant telephone numbers, fax numbers or email addresses.
            </p>
            <button className="contact-us-describe__button">
              Open an account
            </button>
          </div>
          <div className="contact-us-content">
            <div className="contact-us-content-wrapper">
              <h2 className="contact-us-content-wrapper__headling">
                Contact details
              </h2>
              <div className="contact-us-content__item">
                <h3 className="contact-us-content__item__headling">Address</h3>
                <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
              </div>
              <div className="contact-us-content__item">
                <h3 className="contact-us-content__item__headling">Email</h3>
                <p>orbitgtm@mail.com</p>
                <p>orbitgtm@mail.com</p>
              </div>
              <div className="contact-us-content__item">
                <h3 className="contact-us-content__item__headling">Phone</h3>
                <p>(219) 555-0114</p>
                <p>(219) 555-0114</p>
              </div>
            </div>
            <form className="contact-us-form">
              <h2 className="contact-us-form__headling">Get in touch</h2>
              <div className="contact-us-form-items">
                <label className="contact-us-form__item">
                  <span>Your name</span>
                  <input placeholder="James Walker" />
                </label>
                <label className="contact-us-form__item">
                  <span>Your email</span>
                  <input placeholder="walker@gmail.com" />
                </label>
                <label className="contact-us-form__item">
                  <span>Phone number</span>
                  <input placeholder="(000) 000 0000" />
                </label>
                <label className="contact-us-form__item">
                  <span>Country</span>
                  <input placeholder="USA" />
                </label>
                <label className="contact-us-form__item">
                  <textarea placeholder="Type your text here..." />
                </label>
              </div>
              <span className="contact-us-form__error">
                All fields are required
              </span>
              <div className="wrapper-checkbox">
                <input type="checkbox" className="done" id="done" />
                <label htmlFor="done">
                  <span>
                    I have read, understood and accepted the{" "}
                    <a className="link">Terms and conditions</a>
                  </span>
                </label>
              </div>
              <button className="contact-us-form__button">Send</button>
            </form>
          </div>
          <OpenAccount />
          <Footer />
        </section>
      </div>
    </>
  );
}
