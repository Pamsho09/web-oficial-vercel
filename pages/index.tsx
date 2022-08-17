import type { NextPage } from "next";
import About from "../components/home/About";
import Founders from "../components/home/Founders";
import Hero from "../components/home/Hero";


const Home: NextPage = () => {
 
  return (
    <div className="w-full">
     <Hero/>
     <About/>
     <Founders/>

    </div>
  );
};

export default Home;
