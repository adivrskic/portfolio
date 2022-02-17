import React from "react";
import "../styles/components/tooltip.scss";
function Tooltip({ open, handleTooltipClick, heading, text }) {
  return (
    <div
      className={`tooltip ${open ? "active" : ""}`}
      onClick={handleTooltipClick}
    >
      <div className="tooltip__inner">
        <h3 className="tooltip__title">{heading}</h3>
        <p className="tooltip__text">{text}</p>
      </div>
    </div>
  );
}

export default Tooltip;
