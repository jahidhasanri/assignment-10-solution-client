import React, { useContext, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { AuthContext } from "../AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./header.css";
import { Tooltip } from 'react-tooltip';
import { Flip } from "react-awesome-reveal";

const Header = ({setHomeTheme}) => {
  const { user, handleSingOut, setUser } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const htmlElement = document.querySelector("html");
    htmlElement.setAttribute("data-theme", theme);
    if (theme === "dark") {
      document.body.classList.add("bg-gray-900", "text-white");
      document.body.classList.remove("bg-white", "text-black");
    } else {
      document.body.classList.add("bg-white", "text-black");
      document.body.classList.remove("bg-gray-900", "text-white");
    }
  }, [theme]);

  const toggleTheme = (e) => {
    const newTheme = e.target.checked ? "dark" : "light";
    setTheme(newTheme);
    setHomeTheme(newTheme); // Update home theme
  };

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
        <div className="flex items-center justify-between">
        <label className="swap swap-rotate">
          <input type="checkbox" onChange={toggleTheme} />
          <svg
            className="swap-on h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5ZM12,15.5A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          <svg
            className="swap-off h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73,8.15,8.15,0,0,1-6.15-8.1,8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z" />
          </svg>
        </label>

        <Flip>
          <h1 className="text-2xl ml-10 font-bold md:ml-[80px] lg:ml-[20px] xl:ml-[50px]">
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
          {user ? (
            <>
              <NavLink className="text-xl font-semibold mr-6" to="/addequipment">
                Add Equipment
              </NavLink>
              <NavLink className="text-xl font-semibold mr-6" to="/myequipment">
                My Equipment List
              </NavLink>
            </>
          ) : null}
          <NavLink className="text-xl font-semibold mr-6" to="/contact">
            Contact
          </NavLink>
          <NavLink className="text-xl font-semibold" to="/aboutus">
            About Us
          </NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:mr-[80px] lg:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl"
          >
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* User Avatar and Logout (Desktop) */}
        <div className="hidden lg:block">
          {user ? (
            <div className="relative flex items-center space-x-3">
              <img
                src={user.photoURL || "/default-avatar.png"}
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
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
                className="mt-12 bg-gray-800 text-white p-2 rounded shadow-lg"
                place="bottom"
              />
            </div>
          ) : (
            <div className="flex gap-3 items-center">
              <div>
                <NavLink
                  to="/login"
                  className="btn"
                  data-tooltip-id={'tooltip'}
                  data-tooltip-content="Click to Login"
                >
                  Login
                </NavLink>
                <Tooltip
                  id={'tooltip'}
                  className="mt-12 bg-gray-800 text-white p-2 rounded shadow-lg"
                  place="bottom"
                />
              </div>

              <div>
                <NavLink
                  to="/register"
                  className="btn xl:mr-[60px]"
                  data-tooltip-id={'tooltip'}
                  data-tooltip-content="Click to Register"
                >
                  Register
                </NavLink>
                <Tooltip
                  id={'tooltip'}
                  className="mt-12 bg-gray-800 text-white p-2 rounded shadow-lg"
                  place="bottom"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
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
          {user ? (
            <>
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
            </>
          ) : null}
          <NavLink
            className="block text-lg font-semibold mb-2"
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
          <NavLink
            className="block text-lg font-semibold"
            to="/aboutus"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </NavLink>

          {/* Logout or Login/Register buttons */}
          <div className="mt-4 ">
            {user ? (
              <button onClick={handleLogout} className="btn ">
                Log Out
              </button>
            ) : (
              <>
                <NavLink to="/login" className="btn mb-2 mr-4 md:mr-0">
                  Login
                </NavLink>
                <NavLink to="/register" className="btn">
                  Register
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
