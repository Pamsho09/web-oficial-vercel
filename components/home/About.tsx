import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import CardAbout, { IProps } from "./CardAbout";

const About: NextPage = (): JSX.Element => {
  const dataAbout: IProps[] = [
    {
      title: "Acerca de la comunidad",
      description:
        "Somos una comuidad, que nos interesa poder impulsar a las personas que comienzan en este mundo, y que quieran aprender a programar.",
      img: "/assets/img/about.svg",
    },
    {
        title: "Objetivo de la comunidad",
        description:"Aportar conocimiento y asesoría mediante talleres y charlas.",
        img: "/assets/img/about-2.svg",
    },{
        title: "Misión de la comunidad",
        description:"Facilitar el aprendizaje de programación a todos los que quieran aprender a programar.",
        img: "/assets/img/about-3.svg",
    }
  ];
  return (
    <div className="w-full h-scree px-6 py-11 overflow-hidden bg-slate-600 z-50 rounded-t-xl grid gap-4 md:grid-cols-3   md:gap-1">
     {
         dataAbout.map((item, index) => (
            <CardAbout key={index} {...item} />
         ))
     }
    </div>
  );
};

export default About;
