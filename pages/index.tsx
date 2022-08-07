import type { NextPage } from "next";
import About from "../components/home/About";
import Hero from "../components/home/Hero";


const Home: NextPage = () => {
 
  return (
    <div className="w-full">
     <Hero/>
     <About/>
    </div>
  );
};

export default Home;
