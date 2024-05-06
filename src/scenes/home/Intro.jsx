import React from "react";

const Intro = () => {
  return (
    <div className="flex">
      <div className="flex flex-col items-start justify-center gap-8">
        <h1 className="text-5xl sm:text-3xl text-green-500 font-semibold">
          Solar Pulse
        </h1>
        <h1 className="text-xl sm:text-xl text-white font-semibold">
          Empowering Solar Efficiency
        </h1>
        <div className="text-white w-2/3 sm:text-md m-0 p-0 sm:w-full text-start">
          Solar Pulse provides real-time insights and analytics for solar plant
          performance, helping you optimize energy output and enhance
          operational efficiency.
        </div>
        <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">
          Get Started
        </button>
      </div>
      <img
        className="rounded-full w-[25rem] h-[20rem] right-20 sm:hidden"
        src="/favicon.png"
        alt="Solar icon"
      />
    </div>
  );
};

export default Intro;
