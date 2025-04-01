import * as React from "react";
const SvgSe = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 480"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#005293" d="M0 0h640v480H0z" />
    <path fill="#fecb00" d="M176 0v192H0v96h176v192h96V288h368v-96H272V0z" />
  </svg>
);
export default SvgSe;
