import React from "react";

const ResetButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer text-xs mt-2.5 bg-transparent border border-black py-1 px-0.5"
    >
      Очистить поле
    </button>
  );
};

export default ResetButton;
