import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-white shadow-md">
        <div className="displa">
          {/* logo */}
          <Link to={"/"} className="">
            MyBlog
          </Link>
        </div>

        {/* navigations */}
        <nav className="nav">
          <Link to={"/"}>Home</Link>
          <Link to={"/blogs"}>Blogs</Link>
          <Link to={"/categories"}>Categories</Link>
          <Link to={"/about"}>About</Link>
        </nav>

        <div className="auth-buttons">
          <Link to={'/login'} className="login-btn">Login</Link>
          <Link to={'/register'} className="register-btn">Register</Link>

        </div>
      </header>
    </>
  );
};

export default Header;
