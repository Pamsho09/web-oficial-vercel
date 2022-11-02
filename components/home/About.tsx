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
      description:
        "Aportar conocimiento y asesoría mediante talleres y charlas.",
      img: "/assets/img/about-2.svg",
    },
    {
      title: "Misión de la comunidad",
      description:
        "Facilitar el aprendizaje de programación a todos los que quieran aprender a programar.",
      img: "/assets/img/about-3.svg",
    },
  ];
  return (
    <div
      id="about"
      className="w-full h-scree px-6 py-11 overflow-hidden bg-white z-50 rounded-t-xl grid gap-8 md:grid-cols-3  md:flex  md:justify-around  md:gap-1 flex-wrap"
    >
      <h1 className="font-bold text-5xl md:col-start-1 md:col-end-3 w-full text-slate-600 text-center mb-44">
        Sobre la comunidad
      </h1>
      {dataAbout.map((item, index) => (
        <CardAbout key={index} {...item} i={index} />
      ))}
    </div>
  );
};

export default About;
