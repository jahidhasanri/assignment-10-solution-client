import React, { useContext, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { AuthContext } from "../AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./header.css";
import { Tooltip } from 'react-tooltip';
import { Flip } from "react-awesome-reveal";

const Header = () => {
  const { user, handleSingOut, setUser } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    handleSingOut()
      .then(() => {
        setUser(null);
        toast.success("Logout successful!");
        setTimeout(() => navigate("/login"), 2000);
      })
      .catch((error) => {
        console.error(error);
        toast.error(`Logout failed: ${error.message}`);
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-50 p-6 transition-colors duration-300 mb-2 ${
        isScrolled ? "bg-gray-400 text-white" : "bg-slate-200"
      }`}
    >
      <div className="w-full flex justify-between items-center">
        <div>
        <Flip>
          <h1 className="text-2xl font-bold md:ml-[80px] lg:ml-[20px] xl:ml-[60px]">
            Sports Zone
          </h1>

        </Flip>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <NavLink className="text-xl font-semibold mr-6" to="/">
            Home
          </NavLink>
          <NavLink className="text-xl font-semibold mr-6" to="/allequipment">
            All Sports Equipment
          </NavLink>
          <NavLink className="text-xl font-semibold mr-6" to="/addequipment">
            Add Equipment
          </NavLink>
          <NavLink className="text-xl font-semibold" to="/myequipment">
            My Equipment List
          </NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:mr-[80px] lg:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* User Info / Login */}
        <div className="hidden lg:block">
          {user ? (
            <div className="relative flex items-center space-x-3">
              <img
                src={user.photoURL || "/default-avatar.png"}
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
                // title={user.displayName || "Guest User"}
                onMouseEnter={() => setIsHovered(true)} // হোভার করার জন্য
                onMouseLeave={() => setIsHovered(false)} // হোভার থেকে বের হলে
              />
              {isHovered && (
                <div className="absolute bg-white text-black rounded p-2 mt-28 shadow-lg">
                  <p className="text-sm">{user.displayName || "Guest User"}</p>
                </div>
              )}

              <button
                onClick={handleLogout}
                className="btn ml-10 xl:mr-[60px] hover:bg-red-500"
                data-tooltip-id={'tooltip'}
                data-tooltip-content="Click to Log Out"
              >
                Log Out
              </button>
              <Tooltip id={'tooltip'}
              className="mt-12 bg-gray-800 text-white p-2 rounded shadow-lg "
               place="bottom"
              />
            </div>
          ) : (
            <div className="flex gap-3 items-center">

            <div>
              <NavLink to="/login" className="btn "
               data-tooltip-id={'tooltip'}
               data-tooltip-content="Click to Login" >
                Login
              </NavLink>
              <Tooltip id={'tooltip'}
               className="mt-12 bg-gray-800 text-white p-2 rounded shadow-lg"
               place="bottom" 
              />
            </div>

            <div>
              <NavLink to="/register" className="btn xl:mr-[60px]"
               data-tooltip-id={'tooltip'}
               data-tooltip-content="Click to Register" >
                Register
              </NavLink>
              <Tooltip id={'tooltip'}
               className="mt-12 bg-gray-800 text-white p-2 rounded shadow-lg"
               place="bottom" 
              />
            </div>


            </div>

            
          )}
        </div>
      </div>

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
            {user ? (
              <button onClick={handleLogout} className="btn">
                Log Out
              </button>
            ) : (
              <>
                <NavLink to="/login" className="btn mb-2">
                  Login
                </NavLink>
              </>
            )}
          </div>
        </div>
      )}

      {/* ToastContainer */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Header;
