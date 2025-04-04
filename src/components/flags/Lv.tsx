import * as React from "react";
const SvgLv = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 480"
    width="1em"
    height="1em"
    {...props}
  >
    <g fillRule="evenodd">
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path fill="#981e32" d="M0 0h640v192H0zm0 288h640v192H0z" />
    </g>
  </svg>
);
export default SvgLv;
