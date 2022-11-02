import React, { useRef } from "react";
import useScrollTriggerGasp from "../../hooks/useScrollTriggerGasp";
import CardFounders from "./CardFounders";

function Founders() {
  const founders = [
    {
      name: "Francisco Jimenez",
      title:
        "Full Stack Engineer at Tinkin | ReactJS | Typescript | NodeJS |MongoDB",
      img: "https://media-exp1.licdn.com/dms/image/C5603AQH0mhupRopaqg/profile-displayphoto-shrink_400_400/0/1656640096038?e=1666224000&v=beta&t=ucRM1UplkssABbzslN7VYo01bc1rNFj4f4f2TqG_lKs",
      desc: "texto mamon",
    },
    {
      name: "Roberto (Beto) Cortés Monroy",
      title:
        "Frontend developer on the path to become in ull stack developerWatch my website and let's work together!",
      img: "https://media-exp1.licdn.com/dms/image/C4E03AQHcMcWapO7sCg/profile-displayphoto-shrink_400_400/0/1622769796359?e=1666224000&v=beta&t=vdv40LMhZYSTkyMxw-aplbmSJMf_k73VzytLcZqBuKE",
      desc: "texto mamon",
    },
  ];

  return (
    <div className="w-full h-scree px-6 py-11 overflow-hidden bg-white z-50 grid gap-16  grid-cols-1 md:flex  place-content-around justify-center flex-wrap  ">
      <h1 className="font-bold text-2xl md:col-start-1 md:col-end-3 w-full text-slate-600 text-center">
        Fundadores de la comunidad
      </h1>
      {founders.map((item, index) => (
        <CardFounders {...item} key={index} i={index} />
      ))}
    </div>
  );
}

export default Founders;
