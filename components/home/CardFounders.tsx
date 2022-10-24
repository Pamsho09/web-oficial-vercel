import React, { useRef } from "react";
import useScrollTriggerGasp from "../../hooks/useScrollTriggerGasp";
import { IProps } from "./CardAbout";

export interface IPropsCardFounders {
  name: string;
  title: string;
  desc: string;
  img: string;
  i?: number;
}
function CardFounders({ ...item }: IPropsCardFounders) {
  const cardRef = useRef<any>();
  useScrollTriggerGasp(
    "#profileImage" + item.i,
    {
      opacity: 0,
      scale: 0.2,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "#profileImage" + item.i,
      },
    }
  );

  return (
    <div className=" bg-white w-full shadow md:w-96 p-3 rounded-md relative pt-14 ">
      <div className=" z-10  absolute w-full  -top-12  justify-center flex">
        <div className="rounded-full w-28 h-28 overflow-hidden m-auto">
          <img
            src={item.img}
            alt=""
            className="rounded-full w-full h-auto"
            id={"profileImage" + item.i}
            ref={cardRef}
          />
        </div>
      </div>
      <div className=" w-full grid mt-4 place-items-center">
        <div className="text-center w-full border-b-2 border-gray-200 pb-3">
          <h1 className="font-bold text-xl">{item.name}</h1>
          <h3 className="font-normal text-gray-600">{item.title}</h3>
        </div>
        <div>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default CardFounders;
