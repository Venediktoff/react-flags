import * as React from "react";
const SvgJo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 480"
    width="1em"
    height="1em"
    {...props}
  >
    <defs>
      <clipPath id="jo_svg__a">
        <path fillOpacity={0.7} d="M-117.8 0h682.6v512h-682.6z" />
      </clipPath>
    </defs>
    <g clipPath="url(#jo_svg__a)" transform="translate(110.5) scale(.9375)">
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#000001" d="M-117.8 0h1024v170.7h-1024z" />
        <path fill="#fff" d="M-117.8 170.7h1024v170.6h-1024z" />
        <path fill="#090" d="M-117.8 341.3h1024V512h-1024z" />
        <path fill="red" d="m-117.8 512 512-256-512-256z" />
        <path
          fill="#fff"
          d="m24.5 289 5.7-24.9H4.7l23-11-15.9-19.9 23 11 5.6-24.8 5.7 24.9L69 233.2l-16 19.9 23 11H50.6l5.7 24.9-15.9-20z"
        />
      </g>
    </g>
  </svg>
);
export default SvgJo;
