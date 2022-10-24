import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useGsapTo = (element: string, to: gsap.TweenVars, update?: any) => {
  const ref = useRef<any>();
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to(element, to);
  }, [ref, update]);

  return [ref];
};

const useGsapFrom = (element: string, from: gsap.TweenVars) => {
  const ref = useRef<any>();
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.from(element, from);
  }, [ref]);

  return [ref];
};

const useGsapFromTo = (
  data:
    | { element: string; from: gsap.TweenVars; to: gsap.TweenVars }[]
    | { element: string; from: gsap.TweenVars; to: gsap.TweenVars }
) => {
  const ref = useRef<any>();
  gsap.registerPlugin(ScrollTrigger);
  console.log(data);
  useEffect(() => {
    if (Array.isArray(data)) {
      data.forEach(({ element, from, to }) => {
        gsap.fromTo(element, from, to);
      });
    } else {
      console.log({
        data,
      });
      gsap.fromTo(data.element, data.from, data.to);
    }
  }, [ref]);

  return [ref];
};

export { useGsapTo, useGsapFrom, useGsapFromTo };
