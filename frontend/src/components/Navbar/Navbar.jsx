import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "All Books",
      link: "/all-books",
    },
    {
      title: "Cart",
      link: "/cart",
    },
    {
      title: "Profile",
      link: "/profile",
    },
  ];

  const [MobileNav, setMobileNav] = useState("hidden");
  const HandleMobileNav = () => {
    MobileNav === "hidden" ? setMobileNav("block") : setMobileNav("hidden");
  };

  return (
    <>
      <nav className="z-50 relative bg-zinc-800 text-white px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            className="h-8 rounded me-4"
            src="https://www.pngitem.com/pimgs/m/114-1145783_transparent-book-vector-png-book-icon-vector-png.png"
            alt="logo"
          />
          <h1 className="text-2xl font-semibold">Book Zone</h1>
        </Link>
        <div className="nav-links-bookzone block md:flex items-center gap-4">
          <div className="hidden md:flex gap-4">
            {links.map((items, i) => (
              <Link
                to={items.link}
                className="hover:text-blue-500 transition-all duration-300"
                key={i}
              >
                {items.title}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex gap-4">
            <Link
              to="/Login"
              className="px-2 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-2 py-1 bg-blue-500 rounded  hover:bg-white hover:text-zinc-800 transition-all duration-300"
            >
              Signup
            </Link>
          </div>
          <button
            className="md:hidden text-white text-2xl hover:text-zinc-300"
            onClick={HandleMobileNav}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>
      {/* //////////////// Mobile Hamburger Details */}

      <div
        className={` ${MobileNav} bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center`}
      >
        {links.map((items, i) => (
          <Link
            to={items.link}
            onClick={HandleMobileNav}
            className={` ${MobileNav} text-white text-4xl mb-8 font-semibold hover:text-blue-500 transition-all duration-300 `}
            key={i}
          >
            {items.title}
          </Link>
        ))}
        <Link
          to="/Login"
          onClick={HandleMobileNav}
          className={`${MobileNav} px-8 py-4 border text-4xl text-white mb-8 font-semibold border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300`}
        >
          Login
        </Link>
        <Link
          to="/signup"
          onClick={HandleMobileNav}
          className={` ${MobileNav} px-8 py-4 text-4xl mb-8 text-white font-semibold bg-blue-500 rounded  hover:bg-white hover:text-zinc-800 transition-all duration-300`}
        >
          Signup
        </Link>
      </div>
    </>
  );
};

export default Navbar;
