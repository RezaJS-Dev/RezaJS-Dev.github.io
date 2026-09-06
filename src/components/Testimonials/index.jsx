"use client";

import testimonials from "../../data/testimonials";
import Recommendation from "./Recommendation";
import Navigation from "./Navigation";
import { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <section className="flex flex-col max-w-6xl min-h-svh mx-auto justify-start items-center py-20 scroll-mt-24 text-center space-y-8 gap-8">
        <div className="flex flex-col space-y-4 font-display font-bold">
          <h1 className="text-wedgwood-950 dark:text-wedgwood-50 text-3xl">
            Colleague Testimonials
          </h1>
          <h2 className="text-main-color dark:text-main-color-300 text-2xl">
            What People say
          </h2>
        </div>
        <div className="p-6 flex flex-col items-center h-[calc(100vh-265px)] sm:h-auto sm:min-h-80 w-full lg:w-[min(58rem,80%)]">
          <Recommendation testimonial={testimonials[currentIndex]} />
          <Navigation
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            last={currentIndex === testimonials.length - 1}
            first={currentIndex === 0}
            length={testimonials.length}
          />
        </div>
      </section>
    </>
  );
};

export default Testimonials;
