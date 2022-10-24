import type { NextPage } from "next";
import About from "../components/home/About";
import Founders from "../components/home/Founders";
import Hero from "../components/home/Hero";
import Workshops from "../components/home/workshops";

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Workshops />
      <Founders />

    </div>
  );
};

export default Home;
