import musicImg from "../assets/musicIMG.jpg";
import noteImg from "../assets/NoteIMG.jpg";
import shoppingCartImg from "../assets/shoppingCartIMG.jpg";
import stopWatchImg from "../assets/stopWatch.jpg";
import weatherImg from "../assets/WeatherIMG.jpg";

const Projects = () => {
  return (
    <div name="projects" className="LIGHT DARK w-full BORDER_BOTTOM">
      <div className="max-w-[63rem] mx-auto p-4 flex flex-col justify-center w-full h-full text-center">
        <div className="pb-8">
          <p className="HEADER_UNDERLINE">Projects</p>
          <p className="mt-8 text-xl sm:text-2xl dark:text-[#add8e6b3] text-blue-900">
            Look at some of my recent projects.
          </p>
        </div>

        {/* ===== CONTAINER ===== */}
        <div className="p-4 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* ===== ITEMS ===== */}
          <div
            style={{
              backgroundImage: `url(${musicImg})`,
            }}
            className="SHADOW_BORDER p-4 group container rounded-md flex justify-center items-center mx-auto CONTENT"
          >
            {/* ===== SECTION FOR HOVER ===== */}
            <div className="opacity-0 group-hover:opacity-100 group-focus:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Music Player Example
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://wuityeekyaw421.github.io/Music-Player-Example/"
                  target="_blank"
                >
                  <button className="BUTTON BORDER">Demo</button>
                </a>
                <a
                  href="https://github.com/wuitYeeKyaw421/Music-Player-Example"
                  target="_blank"
                >
                  <button className="BUTTON BORDER">Code</button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${shoppingCartImg})`,
            }}
            className="SHADOW_BORDER p-4 group container rounded-md flex justify-center items-center mx-auto CONTENT"
          >
            {/* ===== SECTION FOR HOVER ===== */}
            <div className="opacity-0 group-hover:opacity-100 group-focus:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Shopping Cart Project
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://wuityeekyaw421.github.io/Shopping-Cart-Project/"
                  target="_blank"
                >
                  <button className="BUTTON BORDER">Demo</button>
                </a>
                <a
                  href="https://github.com/wuitYeeKyaw421/Shopping-Cart-Project"
                  target="_blank"
                >
                  <button className="BUTTON BORDER">Code</button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${stopWatchImg})`,
            }}
            className="SHADOW_BORDER p-4 group container rounded-md flex justify-center items-center mx-auto CONTENT"
          >
            {/* ===== SECTION FOR HOVER ===== */}
            <div className="opacity-0 group-hover:opacity-100 group-focus:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Stop Watch
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://wuityeekyaw421.github.io/Mini-Stop-Watch/"
                  target="_blank"
                >
                  <button className="BUTTON BORDER">Demo</button>
                </a>
                <a
                  href="https://github.com/wuitYeeKyaw421/Mini-Stop-Watch"
                  target="_blank"
                >
                  <button className="BUTTON BORDER">Code</button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${weatherImg})`,
            }}
            className="SHADOW_BORDER p-4 group container rounded-md flex justify-center items-center mx-auto CONTENT"
          >
            {/* ===== SECTION FOR HOVER ===== */}
            <div className="opacity-0 group-hover:opacity-100 group-focus:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Weather App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://wuityeekyaw421.github.io/React-Weather-App/"
                  target="_blank"
                >
                  <button className="BUTTON BORDER">Demo</button>
                </a>
                <a
                  href="https://github.com/wuitYeeKyaw421/React-Weather-App"
                  target="_blank"
                >
                  <button className="BUTTON BORDER">Code</button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${noteImg})`,
              backgroundSize: "cover",
            }}
            className="SHADOW_BORDER p-4 group container rounded-md flex justify-center items-center mx-auto CONTENT"
          >
            {/* ===== SECTION FOR HOVER ===== */}
            <div className="opacity-0 group-hover:opacity-100 group-focus:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Note
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://wuityeekyaw421.github.io/Note/"
                  target="_blank"
                >
                  <button className="BUTTON BORDER">Demo</button>
                </a>
                <a
                  href="https://github.com/wuitYeeKyaw421/Note"
                  target="_blank"
                >
                  <button className="BUTTON BORDER">Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
