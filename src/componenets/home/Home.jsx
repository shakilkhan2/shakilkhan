import React from "react";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import useDisplay from "../../hooks/display";
import designation from "../../assets/database/designation";

const Home = () => {
  const { message } = useDisplay(designation);
  return (
    <div>
      <div className="mt-12 flex flex-col-reverse md:flex-row  justify-around items-center">
        <div className="w-1/2">
          Hey! I am, <br />{" "}
          <span className="text-2xl font-bold">Md Shakil Khan</span>,
          <br />
          <span className="text-lg font-semibold">{message}</span>
          <p className="mt-6">
            Motivated and dedicated{" "}
            <span className="text-md font-semibold">
              front-end web developer
            </span>{" "}
            with a passion for creating visually appealing and user-friendly
            websites. Seeking an opportunity to contribute to innovative
            projects while continuously expanding my skills in HTML, CSS,
            JavaScript and React.
            <br />
            <a
              href="/public/Shakil Khan's Resume.pdf"
              download
              className="bg-amber-500 w-28 flex items-center  hover:bg-amber-600 text-white py-2 px-4 rounded mt-4 "
            >
              Resume <FaDownload className="ms-2"/>
            </a>
          </p>
        </div>
        <div>
          <img
            className="border-2 bg-base-100 cursor-not-allowed border-amber-600 shadow-2xl p-2 w-36 h-36 md:w-60 md:h-60  rounded-full"
            src="https://i.ibb.co/NS7Wrz4/skl.jpg"
            alt=""
          />
         
        </div>
      </div>
      {/* skills */}
      <Skills />
      {/* portfolio */}
      <Projects />
      {/* contact */}
      <Contact />
      <p className="text-center text-xs mb-6">
        Copyright © 2023 || All rights reserved by{" "}
        <span className="text-amber-500">
          <a href="https://www.linkedin.com/in/khanshakil99/">Shakil Khan</a>
        </span>
        .
      </p>
    </div>
  );
};

export default Home;
