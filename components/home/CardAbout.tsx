import React, { useRef } from "react";
import useScrollTriggerGasp from "../../hooks/useScrollTriggerGasp";

export interface IProps {
  img: string;
  title: string;
  description: string;
  i?: number;
}
const CardAbout = ({ img, title, description, i }: IProps) => {
  const cardImgRef = useRef<any>();
  const cardRef = useRef<any>();
  useScrollTriggerGasp(
    "#img" + i,
    {
      x: i!! % 2 === 0 ? -100 : 100,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "#img" + i,
     
        start: "top center",
        end: "bottom 80px",
        scrub: true,
      },
    }
  );
  useScrollTriggerGasp(
    ".card" ,
    {
    
   scale: 0,
    },
    {
      scale: 1,
      duration: 2,
      scrollTrigger: {
        trigger: ".card" ,
     
      
      },
    }
  );

  return (
    <div className="w-full max-w-lg md:w-96 p-5  md:px-5 rounded-md relative flex flex-col bg-white shadow-md  card ">
      <img
        src={img}
        className="w-80 h-80 md:w-[600px] h-auto object-fill"
        ref={cardImgRef}
        id={"img" + i}
      />
      <h1 className="font-bold">{title}</h1>
      <p className="">{description}</p>
    </div>
  );
};

export default CardAbout;
