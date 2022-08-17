import React from "react";
import Navbar from "../components/Navbar";

type TProps = {
  children: React.ReactNode;
};

const Layout: React.FC<TProps> = ({ children }): React.ReactElement => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
