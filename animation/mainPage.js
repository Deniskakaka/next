import { gsap } from "gsap/dist/gsap";

const animationMainPage = {
  planetAnimation: (object, trigger) => {
    let animation = gsap.timeline({ repeat: 2, repeatDelay: 1 });
    animation
      .to(object, {
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: "200px",
          scrub: true,
        },
        backgroundPosition: `15% center`,
        snap: {
          duration: { min: 3, max: 5 },
          delay: 2,
        },
      })
      .to(object, {
        scrollTrigger: {
          trigger: trigger,
          start: "200px top",
          end: "1200px",
          scrub: true,
        },
        backgroundPosition: `35% center`,
        snap: {
          duration: { min: 3, max: 5 },
          delay: 2,
        },
      });
  },
  moveImage: (objectLeft, objectRight, trigger) => {
    gsap.to(objectLeft, {
      scrollTrigger: {
        trigger: trigger,
        start: "-200px top",
        end: "-130px",
      },
      y: -300,
      opacity: 1,
    });
    gsap.to(objectRight, {
      scrollTrigger: {
        trigger: trigger,
        start: "-120px top",
        end: "100px",
      },
      y: -300,
      opacity: 1,
    });
  },
  step: (firststep, secondstep, threestep, trigger) => {
    gsap.to(firststep, {
      scrollTrigger: {
        trigger: trigger,
        scrub: true,
        start: "18% top",
        end: "18%",
      },
      opacity: 0,
    });
    gsap.to(secondstep, {
      scrollTrigger: {
        trigger: trigger,
        scrub: true,
        start: "18% top",
        end: "105%",
      },
      opacity: 1,
    });
    gsap.to(secondstep, {
      scrollTrigger: {
        trigger: trigger,
        scrub: true,
        start: "106% top",
        end: "106%",
      },
      opacity: 0,
    });
    gsap.to(threestep, {
      scrollTrigger: {
        trigger: trigger,
        scrub: true,
        start: "106% top",
        end: "200%",
      },
      opacity: 1,
    });
  },
};
export default animationMainPage;
