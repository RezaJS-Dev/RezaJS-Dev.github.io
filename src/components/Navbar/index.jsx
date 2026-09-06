"use client";

import { useEffect, useState, useRef } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import ToggleTheme from "./ToggleTheme";
import useClickOutside from "../../hooks/useClickOutside";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { links } from "../../data/navLinks";
// import { throttle } from "lodash";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isScrolled, scrollPos } = useScrollPosition(200);
  const [navOpacity, setNavOpacity] = useState(1);
  const [navScale, setNavScale] = useState(1);

  const menuBtn = useRef(null);
  const navBody = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 780) {
        setNavOpacity(
          isScrolled ? Math.max(Math.min(200 / scrollPos, 1), 0.5) : 1,
        );
        setNavScale(
          window.scrollY < 30
            ? 1
            : Math.max(Math.min(1 - 0.0005 * scrollPos, 1), 0.9),
        );
      } else {
        setNavOpacity(
          menuOpen ? 1 : isScrolled ? Math.max(200 / scrollPos, 0.5) : 1,
        );
      }
      setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPos]);

  useClickOutside([navBody, menuBtn], menuOpen, () => setMenuOpen(false));

  return (
    <nav
      key={scrollPos}
      ref={navBody}
      className="bg-white dark:bg-wedgwood-950 fixed right-0 top-0 left-0 z-50"
      style={{
        opacity: `${menuOpen ? 1 : navOpacity}`,
      }}
    >
      <div style={{ transform: `${"scale(" + navScale + ")"}` }}>
        <div className="flex flex-row justify-between item-center p-6 max-w-7xl mx-auto font-display">
          <h1 className="text-lg font-bold">
            <span className="">Reza</span>
            <span className="text-wedgwood-500 dark:text-wedgwood-300">JS</span>
          </h1>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-5">
            {links.map(({ label, target }) => {
              return (
                <a
                  key={label}
                  href={`#${target}`}
                  className="transition hover:text-wedgwood-500 dark:hover:text-wedgwood-300 cursor-pointer"
                >
                  {label}
                </a>
              );
            })}
            <ToggleTheme />
          </div>
          <button
            className="md:hidden flex items-center"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {menuOpen && (
        <>
          <div
            className="md:hidden flex flex-col justify-start p-6 pt-0 space-y-5 opacity-100 transition-opacity transition-discrete ease-in bg-white dark:bg-wedgwood-950 starting:opacity-10"
            ref={menuBtn}
          >
            {links.map(({ label, target }) => {
              return (
                <a
                  key={label}
                  href={`#${target}`}
                  className="transition hover:text-wedgwood-500"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              );
            })}
            <ToggleTheme />
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
