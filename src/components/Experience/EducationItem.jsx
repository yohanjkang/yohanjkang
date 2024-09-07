import React from "react";

const EducationItem = ({ institution, degree, timeFrame }) => {
  return (
    <div className="experience-item pb-10 last:pb-2 border-l-2 border-accent">
      <div className="pl-4">
        <h3
          className="experience-subitem font-medium -translate-y-1"
          data-date={timeFrame}
        >
          {institution}
        </h3>
        <h4 className="mb-1 font-semibold text-sm text-accent">{degree}</h4>
      </div>
    </div>
  );
};

export default EducationItem;
