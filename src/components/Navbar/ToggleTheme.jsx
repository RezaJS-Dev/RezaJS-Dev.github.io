"use client";

import { useEffect, useState } from "react";
import { TbSunMoon, TbSunHigh, TbMoon } from "react-icons/tb";
import { useThemeContext } from "@/contexts/ThemeProvider";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useThemeContext();
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    setIcon(getButton());
  }, [theme]);

  const getButton = () => {
    if (theme !== null) {
      switch (theme) {
        case "dark":
          return <TbMoon />;
        case "light":
          return <TbSunHigh />;
        default:
          return <TbSunMoon />;
      }
    } else {
      return <TbSunMoon />;
    }
  };

  const getHoverButton = () => {
    if (theme !== null) {
      switch (theme) {
        case "dark":
          return <TbSunHigh />;
        case "light":
          return <TbSunMoon />;
        default:
          return <TbMoon />;
      }
    } else {
      return <TbMoon />;
    }
  };

  const clickHandler = () => {
    toggleTheme();
    setIcon(null);
  };

  const mouseOverIconChange = () => {
    setIcon(getHoverButton());
  };

  const mouseOutIconChange = () => {
    setIcon(getButton());
  };

  return (
    <button
      className="text-start transition hover:text-wedgwood-500 dark:hover:text-wedgwood-300 cursor-pointer text-xl"
      onClick={clickHandler}
      onMouseOver={mouseOverIconChange}
      onMouseOut={mouseOutIconChange}
      key={icon}
    >
      {icon}
    </button>
  );
};

export default ToggleTheme;
