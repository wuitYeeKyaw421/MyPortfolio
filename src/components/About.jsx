import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import ResumePDF from "../../ResumePDF/Resume.pdf";

const About = () => {
  return (
    <div
      name="about"
      className="BORDER_BOTTOM w-full LIGHT DARK relative py-8 min-h-screen flex items-center"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="mb-8">
          <div className="px-4">
            <div className="pb-8 pl-4 text-center">
              <p className="HEADER_UNDERLINE">About</p>
            </div>
          </div>
          <div className="max-w-[63rem] w-full grid sm:grid-cols-2 gap-2 px-6">
            <div className="sm:text-right sm:text-3xl text-2xl font-bold">
              <p>Hi, it's great to meet you. Please explore my portfolio.</p>
            </div>
            <div className="dark:text-[#add8e6b3] text-blue-900">
              <p>
                I'm an entry level web developer passionate about crafting
                seamless digital experiences.My journey began with a fascination
                for the intersection of creativity and technology, leading me to
                master HTML, CSS, JavaScript, React, Tailwind CSS, Git and
                GitHub. Let's collaborate to turn ideas into innovative digital
                realities.
              </p>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <p className="text-center text-[.7rem] sm:text-lg font-bold mb-4 border-b-2 border-[tomato]">
            Explore my social media profiles and resume.
          </p>
          <ul className="flex flex-wrap justify-center gap-2 text-2xl">
            <li className="p-2 rounded-lg duration-300 dark:bg-[#33333380] bg-[#ffffff80] BORDER">
              <a
                href="https://github.com/wuitYeeKyaw421"
                className="dark:text-white text-black"
                target="_blank"
              >
                <FaGithub />
              </a>
            </li>

            <li className="p-2 rounded-lg duration-300 bg-[#ffffff80] dark:bg-[#003d9880] BORDER">
              <a
                href="
              https://www.facebook.com/profile.php?id=100091939640260&mibextid=ZbWKwL"
                className="dark:text-white text-[#003d98]"
                target="_blank"
              >
                <FaFacebook />
              </a>
            </li>

            <li className="p-2 rounded-lg duration-300 dark:bg-[#530b2080] bg-[#ffffff80] BORDER">
              <a
                href="https://www.instagram.com/sakuroyoshina45?igsh=eTIjc2dwendhcGJx"
                className="dark:text-white text-[#530b20]"
                target="_blank"
              >
                <FaInstagram />
              </a>
            </li>
            <li className="p-2 rounded-lg duration-300 dark:bg-[#106cbb80] bg-[#ffffff80] BORDER">
              <a
                href="https://www.linkedin.com/in/wuit-yee-kyaw-379424291/"
                className="dark:text-white text-[#106cbb]"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="p-2 rounded-lg duration-300 dark:bg-[#12434680] bg-[#ffffff80] BORDER">
              <a
                href={ResumePDF}
                className="dark:text-white text-[#124346]"
                target="_blank"
              >
                <BsFillPersonLinesFill />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
