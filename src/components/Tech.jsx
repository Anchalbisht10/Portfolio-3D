import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-wrap justify-center gap-5">
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="px-6 py-4 rounded-2xl bg-tertiary shadow-[0_0_15px_rgba(145,94,255,0.25)] hover:scale-105 transition duration-300"
        >
          <div className="flex flex-col items-center gap-2">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-12 h-12 object-contain"
            />
            <p className="text-white text-sm font-medium">{tech.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");