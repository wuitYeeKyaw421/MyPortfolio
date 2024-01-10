import { useState } from "react";
import icon from "../assets/w background.png";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const NavBar = () => {
  let [nav, setNav] = useState(false);
  let handleClick = () => setNav(!nav);

  return (
    <div className="fixed border-b-[1px] border-[tomato] w-full h-20 flex justify-between items-center px-4 bg-black text-[lightblue]">
      <div>
        <img src={icon} alt="icon" className="w-12" />
      </div>

      {/* ===== MENU ===== */}
      <ul className="hidden md:flex text-xl">
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
      </ul>

      {/* ===== HAMBURGER ICON ===== */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? (
          <FaBars className="text-2xl" />
        ) : (
          <FaTimes className="text-2xl" />
        )}
      </div>

      {/* ===== MENU FOR MOBILE ===== */}
      <ul
        className={
          !nav
            ? "hidden"
            : "z-10 absolute top-0 left-0 w-full h-screen bg-[#0b1a30c8] backdrop-blur-[5px] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* ===== SOCIAL LINKS ICONS ===== */}
      <div className="flex fixed flex-col top-20 left-0">
        <ul className="flex flex-col gap-4">
          <li className=" w-36 h-8 flex justify-between items-center ml-[-6.25rem] hover:ml-[-0.625rem] duration-300 bg-[#33333380] BORDER">
            <a
              href="https://github.com/wuitYeeKyaw421"
              className="flex justify-between items-center text-white w-full"
              target="_blank"
            >
              GitHub
              <FaGithub className="text-2xl" />
            </a>
          </li>

          <li className="w-36 h-8 flex justify-between items-center ml-[-6.25rem] hover:ml-[-0.625rem] duration-300 bg-[#003d9880] BORDER">
            <a
              href="
              https://www.facebook.com/profile.php?id=100091939640260&mibextid=ZbWKwL"
              className=" flex justify-between items-center text-white w-full"
              target="_blank"
            >
              Facebook
              <FaFacebook className="text-2xl" />
            </a>
          </li>

          <li className="w-36 h-8 flex justify-between items-center ml-[-6.25rem] hover:ml-[-0.625rem] duration-300 bg-[#530b2080] BORDER">
            <a
              href="https://www.instagram.com/sakuroyoshina45?igsh=eTIjc2dwendhcGJx"
              className=" flex justify-between items-center text-white w-full"
              target="_blank"
            >
              Instagram
              <FaInstagram className="text-2xl" />
            </a>
          </li>

          <li className="w-36 h-8 flex justify-between items-center ml-[-6.25rem] hover:ml-[-0.625rem] duration-300 bg-[#12434670] BORDER">
            <a
              href="../ResumePDF/My resume.pdf"
              className="flex justify-between items-center text-white w-full"
              target="_blank"
            >
              Resume
              <BsFillPersonLinesFill className="text-2xl l" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
