import * as React from "react";
const SvgCz = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 480"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#fff" d="M0 0h640v240H0z" />
    <path fill="#d7141a" d="M0 240h640v240H0z" />
    <path fill="#11457e" d="M360 240 0 0v480z" />
  </svg>
);
export default SvgCz;
