"use client";

const links = ["hero", "projects", "skills", "testimonials", "contact"];

const NavigationDots = ({ activeSection = "hero" }) => {
  return (
    <div className="fixed right-2 sm:right-5 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-50">
      {links.map((link) => {
        const isActive = activeSection === link;
        // Apply a different class based on the active state
        const dotClass = isActive
          ? "size-4 rounded-full bg-wedgwood-800 dark:bg-wedgwood-200 transition-all duration-300" // Active dot style
          : "size-4 rounded-full bg-gray-400 dark:bg-gray-600 transition-all duration-300"; // Inactive dot style
        return (
          <a
            key={link}
            href={`#${link}`}
            className={dotClass}
            aria-current={isActive ? "location" : undefined}
          ></a>
        );
      })}
    </div>
  );
};

export default NavigationDots;
