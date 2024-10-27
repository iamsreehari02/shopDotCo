import React from "react";
import { BLACK, WHITE } from "../../constants";

const CustomButton = ({
  label,
  bgColor = BLACK,
  fontColor = WHITE,
  borderWidth,
  borderColor,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        background: bgColor,
        color: fontColor,
        borderWidth: borderWidth,
        borderColor: borderColor,
      }}
      className="px-14 py-3 rounded-[62px] text-sm font-semibold transition-all duration-200 hover:opacity-90 focus:outline-none"
    >
      {label}
    </button>
  );
};

export default CustomButton;
