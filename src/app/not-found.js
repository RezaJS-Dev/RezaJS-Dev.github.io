"use client";

import Button from "@/components/Ui/Button";
import ThemeProvider from "@/contexts/ThemeProvider";

const NotFound = () => {
  return (
    <ThemeProvider>
      <section className="min-h-svh flex flex-col sm:flex-row justify-around items-center bg-wedgwood-50 dark:bg-wedgwood-925 px-6 pt-20">
        {/* Left — Text content */}
        <div className="font-display space-y-4 text-center sm:text-left">
          <p className="text-7xl sm:text-8xl font-bold text-wedgwood-600 dark:text-wedgwood-400">
            404
          </p>
          <h2 className="font-bold text-4xl sm:text-5xl text-wedgwood-600 dark:text-wedgwood-400">
            Page Not Found
          </h2>
          <p className="text-xl text-wedgwood-700 dark:text-wedgwood-300 max-w-md">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 pt-2 justify-center sm:justify-start">
            <Button
              textColor="text-wedgwood-50"
              bgColor="bg-wedgwood-500"
              borderColor="border-wedgwood-500"
              hoverText="hover:text-wedgwood-50"
              hoverBg="hover:bg-wedgwood-600"
              hoverBorder="hover:border-wedgwood-600"
              href="/"
            >
              Go Home
            </Button>
            <Button
              textColor="text-wedgwood-600 dark:text-wedgwood-400"
              borderColor="border-wedgwood-600 dark:border-wedgwood-400"
              hoverText="hover:text-wedgwood-50"
              hoverBg="hover:bg-wedgwood-500"
              hoverBorder="hover:border-wedgwood-500"
              href="/#contact"
            >
              Get in Touch
            </Button>
          </div>
        </div>

        {/* Right — Decorative SVG */}
        <div className="relative mt-8 sm:mt-0">
          <div className="image-container flex items-center justify-center">
            <svg
              viewBox="0 0 300 300"
              className="w-54 h-54 sm:w-72 sm:h-72 translate-x-3 scale-[1.1] text-wedgwood-500 dark:text-wedgwood-400"
              aria-hidden="true"
            >
              {/* Outer ring */}
              <circle
                cx="150"
                cy="150"
                r="120"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
              {/* Dashed inner ring */}
              <circle
                cx="150"
                cy="150"
                r="90"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray="10 10"
              />
              {/* "404" text */}
              <text
                x="150"
                y="170"
                textAnchor="middle"
                fontSize="80"
                fontWeight="bold"
                fill="currentColor"
              >
                404
              </text>
              {/* Decorative dots — N, S, E, W */}
              <circle cx="150" cy="58" r="6" fill="currentColor" />
              <circle cx="150" cy="242" r="6" fill="currentColor" />
              <circle cx="58" cy="150" r="6" fill="currentColor" />
              <circle cx="242" cy="150" r="6" fill="currentColor" />
            </svg>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
};

export default NotFound;
