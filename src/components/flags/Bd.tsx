import * as React from "react";
const SvgBd = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 480"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#006a4e" d="M0 0h640v480H0z" />
    <circle cx={280} cy={240} r={160} fill="#f42a41" />
  </svg>
);
export default SvgBd;
