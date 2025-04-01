import * as React from "react";
const SvgLy = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 480"
    width="1em"
    height="1em"
    {...props}
  >
    <defs>
      <clipPath id="ly_svg__a">
        <path d="M166.7-20h666.6v500H166.7z" />
      </clipPath>
    </defs>
    <g clipPath="url(#ly_svg__a)" transform="matrix(.96 0 0 .96 -160 19.2)">
      <path fill="#239e46" d="M0-20h1000v500H0z" />
      <path fill="#000001" d="M0-20h1000v375H0z" />
      <path fill="#e70013" d="M0-20h1000v125H0z" />
      <path
        fill="#fff"
        d="M544.2 185.8a54.3 54.3 0 1 0 0 88.4 62.5 62.5 0 1 1 0-88.4M530.4 230l84.1-27.3-52 71.5v-88.4l52 71.5z"
      />
    </g>
  </svg>
);
export default SvgLy;
