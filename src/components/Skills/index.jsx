"use client";

import SkillsCard from "./SkillsCard";
import ExperienceCard from "./ExperienceCard";
import experiences from "../../data/experiences";
import skills from "../../data/skills";

const Skills = () => {
  return (
    <>
      <section className="flex flex-col max-w-6xl min-h-svh mx-auto justify-start items-center py-20 scroll-mt-24 text-center space-y-8 gap-8">
        <div className="flex flex-col space-y-4 font-display font-bold">
          <h2 className="text-wedgwood-950 dark:text-wedgwood-50 text-3xl">
            Skills & Experience
          </h2>
          <h3 className="text-main-color dark:text-main-color-300 text-2xl">
            What I Do where I've Been.
          </h3>
        </div>
        <div className="flex flex-col space-y-4 sm:grid sm:grid-cols-[1fr_50%] sm:grid-rows-1 w-full">
          <div className="flex flex-col p-8 pt-0 sm:mr-8 md:mr-16 items-start space-y-6">
            <h4 className="font-display font-bold text-xl">Skills</h4>
            <div className="grid grid-cols-3 row-auto gap-x-25 gap-y-4 items-center justify-center sm:ps-1">
              {skills &&
                skills.map((skill, index) => {
                  return (
                    <SkillsCard
                      key={index}
                      skill={skill}
                      delay={index * 0.05}
                    />
                  );
                })}
            </div>
          </div>
          <div className="flex flex-col p-8 pt-0 sm:pl-8 md:pl-16 items-start space-y-6 sm:border-l-5 sm:border-solid sm:border-wedgwood-700 dark:sm:border-wedgwood-600">
            <h4 className="font-display font-semibold text-xl">Experience</h4>
            <div className="flex flex-col gap-y-4 justify-start text-start ps-4">
              {experiences &&
                experiences.map((experience, index) => {
                  return (
                    <ExperienceCard
                      key={index}
                      experience={experience}
                      delay={index * 0.1}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
