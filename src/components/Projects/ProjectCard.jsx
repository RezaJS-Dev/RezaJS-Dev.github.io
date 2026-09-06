"use client";

import { useInView } from "react-intersection-observer";

// const iconModules = import.meta.glob("/src/assets/images/**/*.png", {
//   eager: true,
//   import: "default",
// });
// const src = "/src/assets";

const ProjectCard = ({ project, delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only the first time it appears
    threshold: 0.1, // trigger when 10% of the element is visible
    rootMargin: "-10px 0px", // optionally trigger a bit earlier/later
  });

  return (
    <div
      className={
        "h-80 w-full rounded-2xl overflow-hidden border border-wedgwood-300 dark:border-wedgwood-600 bg-wedgwood-50 dark:bg-wedgwood-800 " +
        `animated-card ${inView ? "visible" : ""}`
      }
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="h-2/3 relative">
        <div className="size-full overflow-hidden">
          <a href={project.url}>
            <img
              src={project.image}
              className="size-full"
              alt={project.title}
            ></img>
          </a>
        </div>
        <div className="absolute right-2 top-2 py-1 px-2 rounded-full bg-(image:--color-warm-blue-gradient) text-white text-xs flex items-baseline justify-center">
          <span>{project.type}</span>
        </div>
      </div>
      <div className="flex justify-start text-start p-3 flex-col space-y-3 text-black dark:text-white h-1/3 overflow-hidden">
        <h3 className="text-lg font-semibold capitalize">{project.title}</h3>
        <p className="text-sm h-full overflow-auto scrollbar-thin scrollbar-track-wedgwood-50 scrollbar-thumb-wedgwood-800 dark:scrollbar-track-wedgwood-800 dark:scrollbar-thumb-wedgwood-50">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
