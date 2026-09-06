"use client";

import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const ArrowButton = ({ children, onClick }) => {
  return (
    <div
      className="border-2 border-solid rounded-full p-1 border-wedgwood-600 text-wedgwood-600 dark:border-wedgwood-400 dark:text-wedgwood-400 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const Navigation = ({ currentIndex, setCurrentIndex, last, first, length }) => {
  const previous = () => {
    first ? setCurrentIndex(length - 1) : setCurrentIndex(currentIndex - 1);
  };
  const next = () => {
    last ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
  };
  return (
    <div className="w-36 h-auto p-2 mt-10 flex justify-between text-3xl items-center">
      <ArrowButton onClick={previous}>
        <LuChevronLeft />
      </ArrowButton>
      <ArrowButton onClick={next}>
        <LuChevronRight />
      </ArrowButton>
    </div>
  );
};

export default Navigation;
