import React from 'react'
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import { useEffect, useRef, useState } from "react";

function random(minimo: number, maximo: number) {
  return Math.floor(Math.random() * (maximo + 1 - minimo) + minimo);
}
function Hero() {
    const continerIcons = useRef<any>();
    const icon = gsap.utils.selector(continerIcons);
    const containertitle = useRef<any>();
    const title = gsap.utils.selector(containertitle);
    const [sizes, setSizes] = useState<{
      width: number;
      height: number;
    }>({
      width: 0,
      height: 0,
    });
    useEffect(() => {
      const { offsetWidth: width, offsetHeight: height } = continerIcons.current;
      setSizes({ width, height });
    }, [continerIcons]);
    useEffect(() => {
      gsap.to(icon(".img"), {
        ease: "power1.inOut",
        duration: 1,
        repeat: -1,
        width: 80,
        height: 80,
        x: 30,
        y: 30,
        yoyo: true,
      });
    }, [icon]);
  
    useEffect(() => {
      gsap.fromTo(
        title(".line h1"),
        {
          y: 120,
          ease: "power4.out",
          delay: 0.3,
  
          stagger: {
            amount: 0.3,
          },
        },
        {
          y: 0,
          ease: "power4.out",
          delay: 1,
  
          stagger: {
            amount: 0.3,
          },
        }
      );
      gsap.fromTo(
        title(".community h3"),
        {
          y: -100,
          ease: "power4.out",
          delay: 1.6,
        },
        {
          y: 0,
          ease: "power4.out",
          delay: 1.6,
        }
      )
    }, []);
  return (
    <div className="w-full h-screen   ">
    <div
      ref={continerIcons}
      className="w-full fixed h-screen overflow-hidden -z-30"
    >
      {[...new Array(30)].map((_, index) => (
        <div
          key={index}
          style={{
            top: random(1, sizes.height),
            left: random(1, sizes.width),
            width: 100,
            height: 100,
            position: "absolute",
            zIndex: -1,
          }}
        >
          <img
            className={"img"}
            src="./icons/lettuce.svg"
            alt=""
            style={{
              width: random(50, 100),
              height: random(50, 100),
              zIndex: -1,
            }}
          />
        </div>
      ))}
    </div>

    <div className="w-full h-screen grid place-items-center bg-opacity-10 backdrop-filter backdrop-blur-sm">
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
  )
}

export default Hero