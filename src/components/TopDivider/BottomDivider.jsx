"use client";

const BottomDivider = ({
  stopColor1 = "var(--color-wedgwood-500)",
  stopColor2 = "var(--color-wedgwood-600)",
  className,
}) => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          width: "100%",
          zIndex: "-1",
        }}
        className={className}
      >
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 390"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="5%" stopColor={stopColor1}></stop>
              <stop offset="95%" stopColor={stopColor2}></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,400 L 0,150 C 136.8,124.13333333333333 273.6,98.26666666666667 455,112 C 636.4,125.73333333333333 862.4000000000001,179.06666666666666 1034,192 C 1205.6,204.93333333333334 1322.8,177.46666666666667 1440,150 L 1440,400 L 0,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="url(#gradient)"
            fillOpacity="1"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default BottomDivider;
