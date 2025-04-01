import * as React from "react";
const SvgVc = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 480"
    width="1em"
    height="1em"
    {...props}
  >
    <g fillRule="evenodd">
      <path fill="#f4f100" d="M0 0h640v480H0z" />
      <path fill="#199a00" d="M490 0h150v480H490z" />
      <path fill="#0058aa" d="M0 0h150v480H0z" />
      <path
        fill="#199a00"
        d="m259.3 130-46.4 71.3 44.7 74.4 43.8-73.7zm121.2 0-46.3 71.3 44.7 74.4 43.8-73.7zm-61.2 97.3-46.4 71.4 44.8 74.4 43.8-73.7-42.2-72z"
      />
    </g>
  </svg>
);
export default SvgVc;
