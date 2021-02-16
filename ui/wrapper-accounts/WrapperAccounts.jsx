import React from "react";
import TypeAccount from "ui/typeAccount/TypeAccount";
import Sphere from "public/svg/sphere/Sphere";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Head from "next/head";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        display: "block",
        content: "url(/static/white-arrow.png)",
        transform: "rotate(90deg)",
        padding: "5px",
        borderRadius: "50%",
        background: "linear-gradient(180deg, #1AB1D3 0%, #128DA9 100%)",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        content: "url(/static/white-arrow.png)",
        transform: "rotate(-90deg)",
        padding: "5px",
        borderRadius: "50%",
        background: "linear-gradient(180deg, #1AB1D3 0%, #128DA9 100%)",
      }}
      onClick={onClick}
    />
  );
}

export default function Accounts() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          vertical: true,
          verticalSwiping: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          vertical: true,
          verticalSwiping: true,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
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
      <div className="main-page-types-accounts">
        <h2 className="main-page-types-accounts__headling">Account types</h2>
        <Sphere />
        <Slider {...settings}>
          <TypeAccount
            name="Bronze"
            price="250$"
            arrayContent={[
              "Leverage X1",
              "Personal account manager",
              "Trading sessions week",
              "No education in this plan",
            ]}
          />
          <TypeAccount
            name="Silver"
            price="2500$"
            arrayContent={[
              "Leverage X1",
              "Personal account analyst",
              "Trading sessions week",
            ]}
          />
          <TypeAccount
            name="Gold"
            price="5000$"
            arrayContent={[
              "Leverage X2",
              "Senior account analyst",
              "Trading sessions week",
              "Education 2 sessions",
            ]}
          />
          <TypeAccount
            name="Platinum"
            price="10000$"
            arrayContent={[
              "Leverage X3",
              "Senior account chief analyst",
              "Trading sessions week",
              "Full education package",
            ]}
          />
          <TypeAccount
            name="Diamond"
            price="25000$"
            arrayContent={[
              "Leverage X5",
              "Senior account chief analyst",
              "Trading sessions week",
              "Full education package",
            ]}
          />
          <TypeAccount
            name="Vip"
            price="50000$"
            arrayContent={[
              "Leverage X7",
              "Senior account chief analyst",
              "Daily signals",
              "Full education package",
            ]}
          />
        </Slider>
      </div>
    </>
  );
}
