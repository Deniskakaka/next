import React, { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Step = React.forwardRef((props, ref) => {
  return (
    <div className="demo" {...props}>
      <svg width="120" height="120" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="#18a6c6"
          strokeWidth="12"
        />
        <circle
          id="hidden"
          cx="60"
          cy="60"
          r="54"
          fill="none"
          strokeWidth="12"
          strokeDasharray="339.292"
          strokeDashoffset="-85"
          ref={ref}
        ></circle>
      </svg>
      <span className="count one" ref={props.firststep}>
        1
      </span>
      <span className="count two" ref={props.secondstep}>
        2
      </span>
      <span className="count three" ref={props.threestep}>
        3
      </span>
    </div>
  );
});

export default Step;
