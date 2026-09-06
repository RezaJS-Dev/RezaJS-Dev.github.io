"use client";

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export const useThemeContext = () => useContext(ThemeContext);

const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    let theme;
    let isDark;
    switch (localStorage.theme) {
      case "light":
      case "dark":
        break;
      default:
        localStorage.removeItem("theme");
    }
    isDark = document.documentElement.classList.toggle(
      "dark",
      // true to just add dark & false to just remove dark from classlist while toggling
      ("theme" in localStorage && localStorage.theme === "dark") ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
    theme = isDark ? "dark" : "light";
    localStorage.theme && localStorage.setItem("theme", theme);
    //localStorage.theme && localStorage.removeItem("theme");
    // localStorage.setItem("theme", theme);
    return localStorage.theme ? theme : null;
  } else {
    return null;
  }
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme());

  if (typeof window !== "undefined") {
    theme && document.documentElement.classList.add(theme);
  }

  const toggleTheme = () => {
    const states = ["dark", "light", null];
    setTheme((prevTheme) => {
      const currentIndex = prevTheme
        ? states.findIndex((i) => i === prevTheme)
        : 2;
      const newTheme =
        currentIndex === 2 ? states[0] : states[currentIndex + 1];
      document.documentElement.classList.remove("light", "dark");
      newTheme && document.documentElement.classList.add(newTheme);
      newTheme && localStorage.setItem("theme", newTheme);
      !newTheme && localStorage.removeItem("theme");
      !newTheme &&
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? document.documentElement.classList.add("dark")
          : document.documentElement.classList.add("light"));
      return newTheme;
    });
  };

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};

export default ThemeProvider;
