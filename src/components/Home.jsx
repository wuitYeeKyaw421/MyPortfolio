const Home = () => {
  return (
    <div name="home" className="BORDER_BOTTOM w-full h-screen bg-[#0b1a30]">
      {/* ===== CONTAINER ===== */}
      <div className="max-w-[63rem] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[tomato]">Hello, my name is</p>
        <h1 className="text-3xl sm:text-6xl font-bold text-[lightskyblue]">
          Wuit Yee Kyaw
        </h1>
        <p className="py-4 text-xl sm:text-2xl text-[#add8e6b3] max-w-[43rem]">
          Welcome to my portfolio — a digital space that encapsulates my journey
          as a web developer. I've refined my skills through learning and
          practical application in HTML, CSS, JavaScript, React, Tailwind CSS,
          Git, and GitHub.
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default Home;
