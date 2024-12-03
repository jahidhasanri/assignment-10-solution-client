import React, { useContext, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { AuthContext } from "../AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      className={`fixed top-0 w-full z-50 p-6 transition-colors duration-300 ${
        isScrolled ? "bg-gray-400 text-white" : "bg-slate-200"
      }`}
    >
      <div className="w-full flex justify-between items-center">
        <div>
          <NavLink
            to="/"
            className="text-2xl font-bold md:ml-[80px] xl:ml-[60px]"
          >
            Sports Zone
          </NavLink>
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
            <div
              className="relative flex items-center space-x-3"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src={user.photoURL || "/default-avatar.png"}
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
                title={user.displayName || "Guest User"}
              />
              <button
                onClick={handleLogout}
                className="btn xl:mr-[60px] hover:bg-red-500"
              >
                Log Out
              </button>
              {isHovered && (
                <div className="absolute bg-white text-black rounded p-2 mt-[120px] shadow-lg ">
                  <p className="text-sm ">{user.displayName || "Guest User"}</p>
                </div>
              )}
            </div>
          ) : (
            <div>
              <NavLink to="/login" className="btn xl:mr-[60px]">
                Login
              </NavLink>
              {/* <NavLink to="/register" className="btn">
                Register
              </NavLink> */}
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
                {/* <NavLink to="/register" className="btn">
                  Register
                </NavLink> */}
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
