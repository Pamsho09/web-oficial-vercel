import Link from "next/link";
import React from "react";

const Navbar: React.FC = (): JSX.Element => {
  return (
    <header className="w-full p-4">
      <nav className="w-full flex justify-between align-middle ">
        <Link href={"/"}>
          <a className="text-3xl cursor-pointer">🥬</a>
        </Link>
        <div className="underline cursor-pointer flex align-middle">
          <Link href={"/about"}>
            <a>About</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
