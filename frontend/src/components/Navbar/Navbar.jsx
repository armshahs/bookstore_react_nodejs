import React from "react";
import { Link } from "react-router-dom";

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

  return (
    <div>
      <div className="bg-zinc-800 text-white px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            className="h-8 rounded me-4"
            src="https://www.pngitem.com/pimgs/m/114-1145783_transparent-book-vector-png-book-icon-vector-png.png"
            alt="logo"
          />
          <h1 className="text-2xl font-semibold">Book Zone</h1>
        </div>
        <div className="nav-links-bookzone flex items-center gap-4">
          <div className="flex gap-4">
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
          <div className="flex gap-4">
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
