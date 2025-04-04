import * as React from "react";
const SvgBh = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 480"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#fff" d="M0 0h640v480H0" />
    <path
      fill="#ce1126"
      d="M640 0H96l110.7 48L96 96l110.7 48L96 192l110.7 48L96 288l110.7 48L96 384l110.7 48L96 480h544"
    />
  </svg>
);
export default SvgBh;
