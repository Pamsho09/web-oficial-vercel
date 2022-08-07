import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import pamshoTwitch from "../../public/assets/img/pamshoTwitch.png";

const About: NextPage = (): JSX.Element => {
  return (
    <>
      <h2>About StudioLechuga</h2>
      <div className="w-3/4 my-2 mx-auto ">
        <Image className="rounded-md" src={pamshoTwitch} alt="pamsho Twitch" layout="responsive" />
      </div>
    </>
  );
};

export default About;
