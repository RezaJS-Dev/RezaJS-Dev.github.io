"use client";

import FilterBtn from "../Ui/FilterBtn";
import ProjectCard from "./ProjectCard";
import projects from "../../data/projects";
import { useState } from "react";

const uniqTypes = ["All", ...new Set(projects.map((project) => project.type))];

const Projects = () => {
  // Storing selected filter by useState
  const [filter, setFilter] = useState("All");
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.type === filter);

  const handleFilter = (filter) => {
    setFilter(filter);
  };
  return (
    <>
      <section className="flex flex-col max-w-6xl min-h-svh mx-auto justify-start items-center py-20 scroll-mt-24 text-center space-y-8">
        <div className="flex flex-col space-y-4 font-display font-bold">
          <h1 className="text-wedgwood-950 dark:text-wedgwood-50 text-3xl">
            My Work
          </h1>
          <h2 className="text-main-color dark:text-main-color-300 text-2xl">
            Featured Projects
          </h2>
        </div>
        <div className="flex space-x-6 justify-center flex-wrap gap-y-4">
          {uniqTypes.map((type) => {
            return (
              <FilterBtn key={type} onClick={() => handleFilter(type)}>
                {type}
              </FilterBtn>
            );
          })}
        </div>
        <div className="grid auto-rows-auto grid-cols-1 gap-6 font-display min-w-full md:grid-cols-3 sm:grid-cols-2 px-5 xl:px-0">
          {filteredProjects &&
            filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} delay={index * 0.07} />
            ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
