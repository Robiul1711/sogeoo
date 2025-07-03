import React from "react";

const CommonButton = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-10 py-3 rounded-full font-semibold  transition duration-200 disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
};

export default CommonButton;

