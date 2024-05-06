import React from "react";
import Intro from "./Intro";
import About from "./About";
import Contact from "./Contact";
import FAQs from "./FAQs";

const Home = () => {
  return (
    <div className="container max-w-full mx-auto px-4 py-20 text-center bg-secondary">
      <Intro />
      <About />
      <FAQs />
      <Contact />
    </div>
  );
};

export default Home;
