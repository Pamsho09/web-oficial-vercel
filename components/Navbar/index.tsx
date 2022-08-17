import Link from "next/link";
import React from "react";

const Navbar: React.FC = (): JSX.Element => {
  return (
    <header className="w-full p-4 fixed z-40 bg-opacity-10 backdrop-filter backdrop-blur-sm">
      <nav className="w-full flex justify-between align-middle ">
        <Link href={"/"}>
          <a className="text-3xl cursor-pointer">🥬</a>
        </Link>
        <div className=" cursor-pointer text-slate-800 flex align-middle font-bold">
          <Link href={"/#about"}>
            <a>About</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
