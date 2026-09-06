"use client";

const Footer = () => {
  const links = [
    { label: "Home", target: "hero" },
    { label: "Work", target: "projects" },
    { label: "Skills", target: "skills" },
    { label: "Testimonials", target: "testimonials" },
    { label: "Contact", target: "contact" },
  ];
  return (
    <div className="p-6 bg-wedgwood-100 dark:bg-wedgwood-900 mx-auto">
      <div className="flex flex-row justify-between item-center max-w-7xl mx-auto font-display items-center flex-wrap gap-2.5">
        <h1 className="text-lg font-bold">
          <span className="">Reza</span>
          <span className="text-wedgwood-500 dark:text-wedgwood-300">JS</span>
        </h1>
        <div className="flex items-center gap-5 text-xs sm:text-sm text-wedgwood-600 dark:text-wedgwood-200 flex-wrap gap-y-2.5">
          {links.map(({ label, target }) => {
            return (
              <a
                key={label}
                href={`#${target}`}
                className="transition hover:text-wedgwood-800 dark:hover:text-wedgwood-500 cursor-pointer"
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>
      {/* Divider */}
      <hr className="my-6 border-gray-300 dark:border-gray-600" />

      {/* Copyright */}
      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
        &#x000A9; {new Date().getFullYear()} RezaJS. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
