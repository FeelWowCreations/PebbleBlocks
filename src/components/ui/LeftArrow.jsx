import React from "react";

const LeftArrow = () => {
  return (
    <span className="rounded-full w-[30px] h-[30px] bg-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 32 32"
      >
        <g transform="rotate(180 16 16)">
          <path
            fill="#494949"
            d="m12.97 4.28l-1.44 1.44L21.814 16L11.53 26.28l1.44 1.44l11-11l.686-.72l-.687-.72l-11-11z"
          ></path>
        </g>
      </svg>
    </span>
  );
};

export default LeftArrow;
