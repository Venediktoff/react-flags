import * as React from "react";
const SvgCo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 480"
    width="1em"
    height="1em"
    {...props}
  >
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="#ffe800" d="M0 0h640v480H0z" />
      <path fill="#00148e" d="M0 240h640v240H0z" />
      <path fill="#da0010" d="M0 360h640v120H0z" />
    </g>
  </svg>
);
export default SvgCo;
