import React from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4">
      <NavbarItem title={"All Books"}/>
    </div>
  );
};

export default Navbar;
