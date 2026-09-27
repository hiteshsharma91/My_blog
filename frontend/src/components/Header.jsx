import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
          {/* logo */}
          <Link to={"/"} className="text-2xl font-bold text-blue-600">
            Inkly
          </Link>

          {/* navigations */}
          <nav className="flex items-center gap-8">
            <Link
              to={"/"}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Home
            </Link>

            <Link
              to={"/blogs"}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Blogs
            </Link>

            <Link
              to={"/categories"}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Categories
            </Link>

            <Link
              to={"/about"}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              About
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to={"/login"}
              className="border border-blue-600 rounded-lg hover:bg-blue-50 transition px-4 py-2 text-blue-600"
            >
              Login
            </Link>
            <Link
              to={"/register"}
              className="bg-blue-600 rounded-lg px-4 py-2 hover:bg-blue-700 text-white"
            >
              Register
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
