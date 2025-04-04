import * as React from "react";
const SvgCh = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 480"
    width="1em"
    height="1em"
    {...props}
  >
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="red" d="M0 0h640v480H0z" />
      <g fill="#fff">
        <path d="M170 195h300v90H170z" />
        <path d="M275 90h90v300h-90z" />
      </g>
    </g>
  </svg>
);
export default SvgCh;
