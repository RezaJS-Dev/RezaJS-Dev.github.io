"use client";

const Button = ({
  href,
  textColor,
  bgColor,
  borderColor,
  hoverText,
  hoverBg,
  hoverBorder,
  children,
  onClick,
  props,
}) => {
  return (
    <a
      href={href || "#"}
      className={`flex justify-center text-md py-2 px-3 border rounded-sm border-solid transition-all ease
        ${textColor || "text-black"} 
        ${bgColor || "bg-transparent"} 
        ${borderColor || "border-black"} 
        ${hoverText || ""}
        ${hoverBg || ""}
        ${hoverBorder || ""}
        cursor-pointer`}
      onClick={onClick}
      {...props}
    >
      {children}
    </a>
  );
};

export default Button;
