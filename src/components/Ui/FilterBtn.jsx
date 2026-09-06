"use client";

const FilterBtn = ({ children, onClick }) => {
  return (
    <button
      className="flex justify-center items-center text-center text-wedgwood-950 dark:text-wedgwood-50 border-2 border-solid border-wedgwood-950 dark:border-wedgwood-50 rounded-full capitalize px-3 py-2 font-bold cursor-pointer hover:border-wedgwood-500 dark:hover:border-wedgwood-200 transition-all ease"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default FilterBtn;
