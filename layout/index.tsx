import React from "react";
import Navbar from "../components/Navbar";

type TProps = {
  children: React.ReactNode;
};

const Layout: React.FC<TProps> = ({ children }): React.ReactElement => {
  return (
    <div className="scroll-smooth flex flex-1 flex-col ">
      <Navbar />
      {children}
      <footer className="w-full p-4  bottom-0 z-40 bg-opacity-10 backdrop-filter backdrop-blur-sm">
        <div className="w-full p-4 bg-gray-900 rounded-lg text-white text-center">
          <p>© 2021 - All Rights Reserved</p>
        </div>
        
      </footer>
    </div>
  );
};

export default Layout;
