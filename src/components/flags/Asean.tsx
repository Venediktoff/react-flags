import * as React from "react";
const SvgAsean = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    viewBox="0 0 640 480"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#0039a6" d="M0 0h640v480H0z" />
    <circle cx={320} cy={240} r={144} fill="#fff" />
    <circle cx={320} cy={240} r={137.3} fill="#ed2939" />
    <use xlinkHref="#asean_svg__a" transform="matrix(-1 0 0 1 640 0)" />
    <g id="asean_svg__a" fill="#f9e300">
      <path
        d="M82.7 50c5-3 7.3-9 7.3-15h-2.3v.2c0 2-.3 9.3-5.8 14.8a22 22 0 0 1 5.8 14.8v.2H90c0-6-2.4-12-7.3-15"
        transform="translate(-40) scale(4.8)"
      />
      <path
        d="M87 35.2V35h-2.4v.3c0 2-.4 9-4.3 14.7 4 5.7 4.3 12.7 4.3 14.7v.3H87v-.2c0-2-.5-9.3-5.8-14.8A22 22 0 0 0 87 35.2"
        transform="translate(-40) scale(4.8)"
      />
      <path
        d="m79.4 50 .2-.2a27 27 0 0 0 4.2-14.5V35h-2.2v.4c0 2.1-.3 8.8-3 14.6a38 38 0 0 1 3 14.6v.4h2.2v-.3c0-2-.2-8.3-4.2-14.5"
        transform="translate(-40) scale(4.8)"
      />
      <path
        d="M77.8 50a37 37 0 0 0 3-15h-2.3v.7c0 2.5-.2 8.6-1.5 14.3a70 70 0 0 1 1.5 14.3v.7h2.2v-.4c0-2.1-.2-9-2.8-14.5"
        transform="translate(-40) scale(4.8)"
      />
      <path
        d="M76.2 50a69 69 0 0 0 1.4-14.3V35h-2.2v30h2.2v-.7c0-2.4 0-8.6-1.4-14.2"
        transform="translate(-40) scale(4.8)"
      />
    </g>
  </svg>
);
export default SvgAsean;
