import React from "react";
import SectionTitle from "components/SectionTitle";

const About = () => {
  return (
    <>
      <SectionTitle title="About" />
      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[70vh] w-1/2 sm:w-full">
          <dotlottie-player
            src="https://lottie.host/511ea597-e50e-433c-add8-1930392ab4e7/KGgBj2AVpj.json"
            background="transparent"
            speed="1"
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">
            Solar Pulse is designed to transform how solar power plants operate,
            providing real-time data and actionable insights to maximize
            efficiency. Our platform offers a comprehensive overview of your
            solar energy production, enabling proactive maintenance and
            performance optimization.
          </p>
          <p className="text-white">
            By leveraging advanced analytics and intuitive reporting tools,
            Solar Pulse helps solar plant managers and operators make informed
            decisions. We focus on enhancing energy output and reducing
            operational costs, all while supporting sustainable energy
            practices.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
