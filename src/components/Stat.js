import React, { useState } from "react";
import Tooltip from "./Tooltip";
import * as Icons from "react-icons/io5";
import "../styles/components/stat.scss";

function Stat({ icon, hearts, tooltipHeader, tooltipText }) {
  const [open, setOpen] = useState(false);

  const handleStatClick = () => {
    setOpen(!open);
  };

  const IoIcon = Icons?.[icon];
  const IoHeartIcon = Icons?.["IoHeart"];
  const IoHeartOutlineIcon = Icons?.["IoHeartOutline"];

  return (
    <div className="stat" onClick={() => handleStatClick()}>
      <IoIcon className="stat-icon" />
      <div className="stat-heart-container">
        {[...Array(5)].map((e, i) => (
          <span key={i}>
            {i < hearts ? (
              <IoHeartIcon className="stat-heart stat-heart--full" />
            ) : (
              <IoHeartOutlineIcon className="stat-heart" />
            )}
          </span>
        ))}
      </div>

      <Tooltip
        heading={tooltipHeader}
        text={tooltipText}
        open={open}
        onTooltipClick={() => handleStatClick()}
      />
    </div>
  );
}

export default Stat;
