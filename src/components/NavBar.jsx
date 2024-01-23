import { useState, useEffect } from "react";
import icon from "../assets/w background.png";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { CiDark, CiLight } from "react-icons/ci";
import ResumePDF from "../../ResumePDF/Resume.pdf";
import { Link } from "react-scroll";

const NavBar = () => {
  let [nav, setNav] = useState(false);
  let [theme, setTheme] = useState(null);
  let handleClick = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  let handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="z-10 BORDER_BOTTOM fixed w-full h-20 flex justify-between items-center px-4 bg-[#fff] dark:bg-[#111] text-black  dark:text-[lightblue] font-bold">
      <div>
        <img
          src={icon}
          alt="icon"
          className="w-12 border-[2px] border-[tomato] rounded-full"
        />
      </div>

      {/* ===== MENU ===== */}
      <ul className="hidden md:flex text-2xl">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className="text-3xl flex justify-center items-center">
          {theme === "dark" ? (
            <CiLight title="Light Mode" onClick={handleThemeSwitch} />
          ) : (
            <CiDark title="Dark Mode" onClick={handleThemeSwitch} />
          )}
        </li>
      </ul>

      {/* ===== HAMBURGER ICON ===== */}
      <div onClick={handleClick} className="md:hidden z-10">
        <FaBars title="Menu" className="cursor-pointer text-2xl" />
      </div>

      {/* ===== MENU FOR MOBILE ===== */}
      <ul
        className={
          !nav
            ? "hidden"
            : "z-10 absolute top-0 left-0 w-full h-screen dark:bg-[#0b1a3080] bg-[#f1f5f980] backdrop-blur-[5px] flex flex-col justify-center items-center"
        }
      >
        <FaTimes
          title="Close"
          onClick={handleClick}
          className="text-4xl absolute top-6 right-4 cursor-pointer"
        />
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className="text-3xl py-6 flex justify-center items-center">
          {theme === "dark" ? (
            <div
              onClick={handleThemeSwitch}
              className="flex justify-between items-center"
            >
              <CiLight
                className="inline"
                title="Light Mode"
                onClick={handleThemeSwitch}
              />
              <span className="p-2">Light Mode</span>
            </div>
          ) : (
            <div
              onClick={handleThemeSwitch}
              className="flex justify-between items-center"
            >
              <CiDark
                className="inline"
                title="Dark Mode"
                onClick={handleThemeSwitch}
              />
              <span className="p-2">Dark Mode</span>
            </div>
          )}
        </li>
      </ul>

      {/* ===== SOCIAL LINKS ICONS ===== */}
      <div className="font-bold md:flex flex-col fixed top-20 left-0 hidden">
        <ul className="flex flex-col gap-4">
          <li className="w-36 h-8 flex items-center ml-[-6rem] hover:ml-[-0.625rem] duration-300 dark:bg-[#33333380] bg-[#ffffff80] BORDER">
            <a
              href="https://github.com/wuitYeeKyaw421"
              className="flex justify-between dark:text-white w-full text-black"
              target="_blank"
            >
              GitHub
              <FaGithub className="text-2xl" />
            </a>
          </li>

          <li className="w-36 h-8 flex items-center ml-[-6rem] hover:ml-[-0.625rem] duration-300 dark:bg-[#003d9880] bg-[#ffffff80] BORDER">
            <a
              href="
              https://www.facebook.com/profile.php?id=100091939640260&mibextid=ZbWKwL"
              className="flex justify-between dark:text-white w-full text-[#003d98]"
              target="_blank"
            >
              Facebook
              <FaFacebook className="text-2xl" />
            </a>
          </li>

          <li className="w-36 h-8 flex items-center ml-[-6rem] hover:ml-[-0.625rem] duration-300 dark:bg-[#530b2080] bg-[#ffffff80] BORDER">
            <a
              href="https://www.instagram.com/sakuroyoshina45?igsh=eTIjc2dwendhcGJx"
              className="flex justify-between dark:text-white w-full text-[#530b20]"
              target="_blank"
            >
              Instagram
              <FaInstagram className="text-2xl" />
            </a>
          </li>

          <li className="w-36 h-8 flex items-center ml-[-6rem] hover:ml-[-0.625rem] duration-300 dark:bg-[#106cbb80] bg-[#ffffff80] BORDER">
            <a
              href="https://www.linkedin.com/in/wuit-yee-kyaw-379424291/"
              className="flex justify-between dark:text-white w-full text-[#106cbb]"
              target="_blank"
            >
              LinkedIn
              <FaLinkedin className="text-2xl" />
            </a>
          </li>

          <li className="w-36 h-8 flex items-center ml-[-6rem] hover:ml-[-0.625rem] duration-300 dark:bg-[#12434680] bg-[#ffffff80] BORDER">
            <a
              href={ResumePDF}
              className="flex justify-between dark:text-white w-full text-[#124346]"
              target="_blank"
            >
              Resume
              <BsFillPersonLinesFill className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
