import React, { useRef } from "react";
import { useGsapFromTo } from "../../hooks/useGsap";
import useScrollTriggerGasp from "../../hooks/useScrollTriggerGasp";

export interface IProps {
  img: string;
  title: string;
  description: string;
  i?: number;
}
const CardAbout = ({ img, title, description, i }: IProps) => {
  const [cardImgRef] = useGsapFromTo([
    {
      element: "#img" + i,
      from: {
        x: i!! % 2 === 0 ? -100 : 100,
        opacity: 0,
      },
      to: {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: "#img" + i,

          start: "top center",
          end: "bottom 80px",
          scrub: true,
        },
      },
    },

    {
      element: ".card",
      from: {
        scale: 0,
      },
      to: {
        scale: 1,
        duration: 2,
        scrollTrigger: {
          trigger: ".card",
        },
      },
    },
  ]);

  return (
    <div className="w-full relative max-w-lg md:w-96">
      <div className="w-full max-w-lg md:w-96 p-5 h-full z-0 bg-gray-900 ml-0.5 mt-0.5 rounded-lg absolute left-0 top-0"></div>
      <div className="w-full max-w-lg md:w-96 p-5  md:px-5 rounded-md relative flex flex-col bg-white shadow-md  card h-full border-gray-900 border-2 ">
        <img
          src={img}
          className="w-80 h-80 md:w-[600px] h-auto object-fill"
          ref={cardImgRef}
          id={"img" + i}
        />
        <h1 className="font-bold">{title}</h1>
        <p className="">{description}</p>
      </div>
    </div>
  );
};

export default CardAbout;
