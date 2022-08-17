import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
type TweenVars = gsap.TweenVars;
const useScrollTriggerGasp = (
  ref: React.MutableRefObject<any> | string,
  from: TweenVars,
  to: TweenVars
) => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(ref, from, to);
  }, [ref, from, to]);
};

export default useScrollTriggerGasp;
