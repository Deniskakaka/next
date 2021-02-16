import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
  currentAnimation: (stepAnimation, object, triggerAnimation) => {
    ScrollTrigger.matchMedia({
      "(min-width: 360px)": function () {
        let count = gsap.timeline(object, { duration: 2 });
        count
          .from(object, {
            scrollTrigger: {
              trigger: triggerAnimation,
              scrub: true,
              start: "-35% top",
              end: "-35%",
            },
            strokeDashoffset: `${((100 - 125) / 100) * Math.PI * (54 * 2)}`,
          })
          .to(object, {
            scrollTrigger: {
              trigger: triggerAnimation,
              scrub: true,
              start: "-35% top",
              end: "200%",
            },
            strokeDashoffset: `${((100 - 200) / 100) * Math.PI * (54 * 2)}`,
          });
        stepAnimation;
      },
      "(min-width: 768px)": function () {
        stepAnimation;
        let count = gsap.timeline(object, { duration: 2 });
        count
          .from(object, {
            scrollTrigger: {
              trigger: triggerAnimation,
              scrub: true,
              start: "-35% top",
              end: "-35%",
            },
            strokeDashoffset: `${((100 - 125) / 100) * Math.PI * (54 * 2)}`,
          })
          .to(object, {
            scrollTrigger: {
              trigger: triggerAnimation,
              scrub: true,
              start: "-35% top",
              end: "270%",
            },
            strokeDashoffset: `${((100 - 200) / 100) * Math.PI * (54 * 2)}`,
          });
      },
      "(min-width: 990px)": function () {
        let count = gsap.timeline(object, { duration: 2 });
        count
          .from(object, {
            scrollTrigger: {
              trigger: triggerAnimation,
              scrub: true,
              start: "-35% top",
              end: "-30%",
            },
            strokeDashoffset: `${((100 - 125) / 100) * Math.PI * (54 * 2)}`,
          })
          .to(object, {
            scrollTrigger: {
              trigger: triggerAnimation,
              scrub: true,
              start: "-35% top",
              end: "240%",
            },
            strokeDashoffset: `${((100 - 200) / 100) * Math.PI * (54 * 2)}`,
          });
        stepAnimation;
      },
    });
  },
};
export default animationMainPage;
