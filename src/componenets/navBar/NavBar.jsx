import React from "react";
import { FaDownload, FaFacebook, FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {/* <li>
        <Link to="/about">About Me</Link>
      </li> */}
      <li>
        <Link to="/skill">Skills</Link>
      </li>
      <li>
        <Link to="/project">Portfolio</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <div className=" mx-0 md:mx-24">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
            
              {navOptions}
            </ul>
          </div>
          <Link className="text-2xl font-bold text-amber-500" to="/">
            {" "}
            ShakilKhan
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end gap-2 flex">
        <a
              href="/Shakil_Khans_Resume.pdf"
              download
              className="bg-amber-500 flex items-center  hover:bg-amber-600 text-white py-2 px-4 rounded mt-4 "
            >
              Resume <FaDownload className="ms-2"/>
            </a>
            
        </div>
      </div>
    </div>
  );
};

export default NavBar;
