import React from "react";
import Navbar from "../components/Navbar";

type TProps = {
  children: React.ReactNode;
};

const Layout: React.FC<TProps> = ({ children }): React.ReactElement => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
