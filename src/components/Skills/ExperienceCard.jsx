"use client";

import { useInView } from "react-intersection-observer";

const ExperienceCard = ({ experience, delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only the first time it appears
    threshold: 0.15, // trigger when 15% of the element is visible
    //rootMargin: "-50px 0px", // optionally trigger a bit earlier/later
  });

  return (
    <div
      className={
        "flex font-display " + `animated-card ${inView ? "visible" : ""}`
      }
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
    >
      <span className="size-3 mr-3 mt-1 rounded-full bg-wedgwood-800 dark:bg-wedgwood-200"></span>
      <div className="text-sm">
        <h4 className="font-bold text-main-color dark:text-main-color-300">
          {experience.title}
        </h4>
        <h5 className="text-sm text-gray-700 dark:text-gray-300">
          {experience.company}
        </h5>
        <h5 className="text-xs text-gray-600 dark:text-gray-400">
          {experience.years}
        </h5>
      </div>
    </div>
  );
};

export default ExperienceCard;
