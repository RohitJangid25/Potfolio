import React from "react";
import { images } from "../assets/images";

const Home = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background Text */}
      <h1 className="absolute top-5 left-0 w-full text-[25vw] font-bold text-[#a063ef] opacity-20 uppercase leading-none">
        DESIG <br /> NER
      </h1>

      <div className="w-[80%] flex flex-col md:flex-row items-center gap-8 relative z-10">
        {/* First Frame (Bottom) */}
        <div className="w-full md:w-[60%] bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 md:p-12 text-white shadow-lg relative z-10">
          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Hi, <br />
            My name is <span className="text-purple-500">Rohit</span>
          </h2>
          <p className="text-lg md:text-2xl mt-4 font-extrabold">UI/UX Designer</p>
        </div>

        {/* Second Frame (Slightly Above First One) */}
        <div className="w-full md:w-[50%] flex justify-center relative -mt-10 md:-mt-20">
          <div className="bg-white/10 mt-100 backdrop-blur-lg border border-white/20 rounded-xl p-6 md:p-8 shadow-lg relative z-20">
            <img
              src={images.avatar}
              alt="Designer"
              className="w-full  max-w-xs md:max-w-md rounded-xl mt-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
