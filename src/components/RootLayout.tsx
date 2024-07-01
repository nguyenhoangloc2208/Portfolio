import React from "react";
import About from "./About";
import Home from "./Home";
import Project from "./Project";

const HomeRoot: React.FC = () => {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20 overflow-y-scroll overflow-x-hidden">
        <Home />
        <About />
        <Project />
      </div>
    </main>
  );
}

export default HomeRoot;