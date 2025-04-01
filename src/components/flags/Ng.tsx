import * as React from "react";
const SvgNg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 480"
    width="1em"
    height="1em"
    {...props}
  >
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path fill="#008753" d="M426.6 0H640v480H426.6zM0 0h213.3v480H0z" />
    </g>
  </svg>
);
export default SvgNg;
