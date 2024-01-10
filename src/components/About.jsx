const About = () => {
  return (
    <div
      name="about"
      className="BORDER_BOTTOM w-full scroll-m-16 h-screen bg-[#0b1a30] text-[lightblue]"
    >
      <div className="flex flex-col justify-center items-center w-full- h-full">
        <div className="px-4">
          <div className="pb-8 pl-4 text-center">
            <p className="HEADER_UNDERLINE">About</p>
          </div>
        </div>
        <div className="max-w-[63rem] w-full grid sm:grid-cols-2 gap-8 px-6">
          <div className="sm:text-right text-3xl font-bold">
            <p>Hi, it's great to meet you. Please explore my portfolio.</p>
          </div>
          <div>
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
