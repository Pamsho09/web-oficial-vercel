import React from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import { useEffect, useRef, useState } from "react";
import { useGsapFromTo, useGsapTo } from "../../hooks/useGsap";

function random(minimo: number, maximo: number) {
  return Math.floor(Math.random() * (maximo + 1 - minimo) + minimo);
}
function Hero() {
  const [sizes, setSizes] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });
  const [continerIcons] = useGsapTo(".img", {
    ease: "power1.inOut",
    duration: 0.8,
    repeat: -1,
    delay: (i) => i * 0.05,
    repeatDelay: 0,
    y: sizes.height,
    opacity: 0,
  },sizes);
  const [containertitle] = useGsapFromTo([
    {
      element: ".line h1",
      from: {
        y: 120,
        ease: "power4.out",
        delay: 0.3,

        stagger: {
          amount: 0.3,
        },
      },
      to: {
        y: 0,
        ease: "power4.out",
        delay: 1,

        stagger: {
          amount: 0.3,
        },
      },
    },
    {
      element: ".community h3",
      from: {
        y: -100,
        ease: "power4.out",
        delay: 1.6,
      },
      to: {
        y: 0,
        ease: "power4.out",
        delay: 1.6,
      },
    },
  ]);
  useEffect(() => {
    const { offsetWidth: width, offsetHeight: height } = continerIcons.current;
    setSizes({ width, height });
  }, [continerIcons]);

  return (
    <div className="w-full h-screen   ">
      <div
        ref={continerIcons}
        className="w-full fixed h-screen overflow-hidden -z-30"
      >
        {[...new Array(Math.round(sizes.width * 0.01))].map((_, index) => (
          <div
            key={index}
            style={{
              top: -100,
              left: random(1, sizes.width),
              width: 100,
              height: 100,
              position: "absolute",
              zIndex: -1,
            }}
            className={"img"}
          >
            <img
              src={"./icons/lettuce.svg"}
              alt=""
              style={{
                width: 100,
                height: 100,
                zIndex: -1,
              }}
            />
          </div>
        ))}
      </div>

      <div className="w-full h-screen grid place-items-center bg-opacity-30 backdrop-filter backdrop-blur-sm">
        <div
          className="z-20 w-11/12 md:w-[560px] h-auto flex flex-col justify-center items-center "
          ref={containertitle}
        >
          <div className="line   overflow-hidden relative  pr-16  h-[6rem] w-full">
            <h1 className="font-sans md:text-[100px]  text-7xl font-bold absolute ">
              Studio
            </h1>
          </div>
          <div className="line   overflow-hidden  relative   h-[6rem] md:h-[8rem]  md:pl-28 w-full">
            <h1 className="font-sans md:text-[100px] text-7xl  font-bold  absolute">
              Lechuga
            </h1>
          </div>

          <div className="community relative w-full h-[6rem] overflow-hidden">
            <h3 className="font-sans md:text-[30px]  text-4xlxl font-normal md:pr-14 absolute w-full">
              Comunidad de desarrolladores
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
