import React from "react";
import "./css/button-t1.css";

export function ButtonT1({ buttonName, onClick }) {
  const handleClick = () => {
    // Llamamos a la función onClick pasada como prop
    if (onClick) {
      onClick(buttonName);
    }
  };

  return (
    <div className="buttonT1" onClick={handleClick}>
      {buttonName.split("-").join(" ")}
    </div>
  );
}
