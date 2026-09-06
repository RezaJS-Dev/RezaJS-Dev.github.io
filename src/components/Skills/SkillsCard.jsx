"use client";

import { useInView } from "react-intersection-observer";

const SkillsCard = ({ skill, delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only the first time it appears
    threshold: 0.15, // trigger when 15% of the element is visible
    //rootMargin: "-50px 0px", // optionally trigger a bit earlier/later
  });

  return (
    <div
      className={
        "flex flex-col gap-2 items-center justify-center " +
        `animated-card ${inView ? "visible" : ""}`
      }
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="text-4xl">{skill.icon}</div>
      <span className="text-sm font-semibold font-display">{skill.name}</span>
    </div>
  );
};

export default SkillsCard;
