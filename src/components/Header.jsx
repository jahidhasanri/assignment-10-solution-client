import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full  mx-auto bg-orange-100 p-6">
      <div className="w-full flex justify-between items-center">
        <div>
          <NavLink to="/" className="text-2xl font-bold md:ml-[80px] xl:ml-[60px]">
            Sports Zone
          </NavLink>
        </div>

        <div className="hidden  lg:flex">
          <NavLink  className="text-xl font-semibold mr-6" to="/">
            Home
          </NavLink>
          <NavLink
            className="text-xl font-semibold mr-6"
            to="/allequipment"
          >
            All Sports Equipment
          </NavLink>
          <NavLink className="text-xl font-semibold mr-6" to="/addequipment">
            Add Equipment
          </NavLink>
          <NavLink className="text-xl font-semibold" to="/myequipment">
            My Equipment List
          </NavLink>
        </div>

        <div className="md:mr-[80px] lg:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl"
          >
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        <div className="hidden lg:block">
          <NavLink to='/login' className="btn xl:mr-[60px]">Login</NavLink>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 bg-orange-200 rounded-lg p-4 shadow-lg">
          <NavLink
            className="block text-lg font-semibold mb-2"
            to="/"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            className="block text-lg font-semibold mb-2"
            to="/allequipment"
            onClick={() => setIsMenuOpen(false)}
          >
            All Sports Equipment
          </NavLink>
          <NavLink
            className="block text-lg font-semibold mb-2"
            to="/addequipment"
            onClick={() => setIsMenuOpen(false)}
          >
            Add Equipment
          </NavLink>
          <NavLink
            className="block text-lg font-semibold"
            to="/myequipment"
            onClick={() => setIsMenuOpen(false)}
          >
            My Equipment List
          </NavLink>
          <div className="mt-4">
            <NavLink to='/login'  className="btn">Login</NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
