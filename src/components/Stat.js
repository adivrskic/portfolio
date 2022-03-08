import React, { useState } from "react";
import Tooltip from "./Tooltip";
import * as Icons from "react-icons/di";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { StateContext } from "../context/StateProvider";
import "../styles/components/stat.scss";

function Stat({ icon, hearts, tooltipHeader, tooltipText }) {
  const [open, setOpen] = useState(false);
  const [{ isDarkTheme }] = React.useContext(StateContext);

  const handleStatClick = () => {
    setOpen(!open);
  };

  const IoIcon = Icons?.[icon];
  const IoHeartIcon = IoHeart;
  const IoHeartOutlineIcon = IoHeartOutline;

  return (
    <div className="stat" onClick={() => handleStatClick()}>
      {/* Move this somewhere */}
      <svg width="0" height="0">
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="50%">
          <stop stopColor={isDarkTheme ? "#1ddecb" : "#1793ff"} offset="0%" />
          <stop stopColor={isDarkTheme ? "#2ebacd" : "#762ecd"} offset="100%" />
        </linearGradient>
      </svg>

      <IoIcon className="stat-icon" style={{ fill: "url(#gradient)" }} />
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
