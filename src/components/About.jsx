const About = () => {
  return (
    <div
      name="about"
      className="BORDER_BOTTOM w-full scroll-m-16 h-screen LIGHT DARK"
    >
      <div className="flex flex-col justify-center items-center w-full- h-full">
        <div className="px-4">
          <div className="pb-8 pl-4 text-center">
            <p className="HEADER_UNDERLINE">About</p>
          </div>
        </div>
        <div className="max-w-[63rem] w-full grid sm:grid-cols-2 gap-6 px-6">
          <div className="sm:text-right sm:text-3xl text-2xl font-bold">
            <p>Hi, it's great to meet you. Please explore my portfolio.</p>
          </div>
          <div className="dark:text-[#add8e6b3] text-blue-900">
            <p>
              I'm an entry level web developer passionate about crafting
              seamless digital experiences.My journey began with a fascination
              for the intersection of creativity and technology, leading me to
              master HTML, CSS, JavaScript, React, Tailwind CSS, Git and GitHub.
              Let's collaborate to turn ideas into innovative digital realities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
