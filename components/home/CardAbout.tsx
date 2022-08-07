import React from "react";

export interface IProps {
  img: string;
  title: string;
  description: string;
}
const CardAbout = ({ img, title, description }: IProps) => {
  return (
    <div className="w-full max-w-lg p-5  md:p-10 rounded-md relative grid bg-white shadow-md  ">
      <img src={img} className="w-80 md:w-[600px] h-auto " />
      <h1 className="font-bold">{title}</h1>
      <p className="">{description}</p>
    </div>
  );
};

export default CardAbout;
