import type { NextPage } from "next";
import { gsap } from "gsap";
import { HtmlHTMLAttributes, useEffect, useRef, useState } from "react";
import { reverse } from "dns/promises";

const Home: NextPage = () => {
  const continerIcons = useRef<any>();
  const icon = gsap.utils.selector(continerIcons);
  const [sizes, setSizes] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });
  console.log(sizes, continerIcons);
  useEffect(() => {
    const { offsetWidth: width, offsetHeight: height } = continerIcons.current;
    setSizes({ width, height });
  }, [continerIcons]);
  useEffect(() => {
    // Target ALL descendants with the class of .box
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
  }, []);
  return (
    <div className="w-full">
      <div className="w-full h-screen relative  ">
        <div
          ref={continerIcons}
          className="w-full absolute h-screen overflow-hidden"
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
              }}
            >
              <img
                className={"img"}
                src="./icons/lettuce.svg"
                alt=""
                style={{
                  width: random(50, 100),
                  height: random(50, 100),
                }}
              />
            </div>
          ))}
        </div>

        <div className="w-full h-screen grid place-items-center bg-opacity-10 backdrop-filter backdrop-blur-sm">
          <div className="z-20 w-auto ">
            <h1 className="font-sans md:text-[100px]  text-7xl font-bold md:pr-28">
              Studio
            </h1>
            <h1 className="font-sans md:text-[100px] text-7xl font-bold md:pl-28">
              Lechuga
            </h1>

            <h3 className="font-sans md:text-[50px]  text-4xlxl font-normal md:pr-28">
              Comunidad de{" "}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
function random(minimo: number, maximo: number) {
  return Math.floor(Math.random() * (maximo + 1 - minimo) + minimo);
}
export default Home;
