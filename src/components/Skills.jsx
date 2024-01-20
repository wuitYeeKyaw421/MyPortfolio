import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full scroll-m-[10rem] BORDER_BOTTOM LIGHT DARK"
    >
      {/* ===== CONTAINER ===== */}
      <div className="max-w-[63rem] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className=" text-center mb-6">
          <p className="HEADER_UNDERLINE">Skills</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8">
          <div className="SHADOW_BORDER">
            <FaHtml5 className="text-[#df4d28] text-7xl mx-auto" />
            <p className="pt-4">HTML</p>
          </div>

          <div className="SHADOW_BORDER">
            <FaCss3Alt className="text-[#264ee4] text-7xl mx-auto" />
            <p className="pt-4">CSS</p>
          </div>

          <div className="SHADOW_BORDER">
            <SiTailwindcss className="text-[#19afb8] text-7xl mx-auto" />
            <p className="pt-4">Tailwind CSS</p>
          </div>

          <div className="SHADOW_BORDER">
            <IoLogoJavascript className="text-[#efda4d] text-7xl mx-auto" />
            <p className="pt-4">JavaScript</p>
          </div>

          <div className="SHADOW_BORDER">
            <FaReact className="text-[#00d5fd] text-7xl mx-auto" />
            <p className="pt-4">React</p>
          </div>

          <div className="SHADOW_BORDER">
            <FaGitAlt className="text-[#dd4b34] text-7xl mx-auto" />
            <p className="pt-4">Git</p>
          </div>

          <div className="SHADOW_BORDER">
            <FaGithub className="dark:text-[#fff] text-[#222] text-7xl mx-auto" />
            <p className="pt-4">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
