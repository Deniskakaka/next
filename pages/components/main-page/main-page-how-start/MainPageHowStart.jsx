import React, { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Step from "public/svg/step/Step";
import animationMainPage from "animation/mainPage";
import ScrollLine from "ui/scrollLine/ScrollLine";

const MainPageHowStart = React.forwardRef((props, ref) => {
  const howStart = useRef();
  const counter = useRef();
  const videoBlock = useRef();
  const firststep = useRef();
  const secondstep = useRef();
  const threestep = useRef();
  const leftImage = useRef();
  const rightImage = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    animationMainPage.moveImage(
      leftImage.current,
      rightImage.current,
      ref.current
    );
    gsap.to(videoBlock.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: "-50px top",
        end: "300px",
      },
      y: -520,
      opacity: 1,
    });
    animationMainPage.currentAnimation(
      animationMainPage.step(
        firststep.current,
        secondstep.current,
        threestep.current,
        videoBlock.current
      ),
      counter.current,
      videoBlock.current
    );
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: howStart.current,
        scrub: true,
        start: "top top",
        end: "+=260%",
        pin: true,
      },
    });
  });

  return (
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
            Register in the Trader`s Room, upload required documents, fill in
            the `Open an Account` form
          </p>
          <div className="main-page-how-start__describe__wrapper-line">
            <ScrollLine />
          </div>
        </div>
      </div>
    </div>
  );
});

export default MainPageHowStart;
