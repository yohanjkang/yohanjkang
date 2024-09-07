import React from "react";

const ProfessionalExperienceItem = ({
  title,
  company,
  timeFrame,
  description,
  toolsets,
}) => {
  return (
    <div className="experience-item pb-10 last:pb-2 border-l-2 border-accent">
      <div className="pl-4">
        <h2
          className="experience-subitem text-xl  font-medium -translate-y-1"
          data-date={timeFrame}
        >
          {title}
        </h2>
        <h3 className="-mt-1 mb-1 text-accent font-semibold">{company}</h3>
        <p className="leading-6 whitespace-pre-wrap text-text-soft">
          {description}
        </p>
        <ul className="flex flex-wrap justify-start">
          {toolsets.map((toolset, index) => {
            return (
              <li key={index}>
                <div className="bg-[#153336] text-[#63e5f2] py-1 px-3 mr-2 mt-2 rounded-xl">
                  {toolset}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProfessionalExperienceItem;
