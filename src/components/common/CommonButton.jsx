import React from "react";
import { Link } from "react-router-dom";

const CommonButton = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  link = null, // 👈 New prop to pass a link
}) => {
 const baseClass =
  "px-6 py-2 sm:px-8 sm:py-3 lg:px-10 lg:py-4 rounded-full font-semibold transition duration-200 disabled:opacity-50 " + className;

  if (link) {
    return (
      <Link to={link} className={baseClass}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseClass}>
      {children}
    </button>
  );
};

export default CommonButton;


