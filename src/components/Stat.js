import React from "react";
import Tooltip from "./Tooltip";
import * as Icons from "react-icons/di";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { StateContext } from "../context/StateProvider";

import "../styles/components/stat.scss";

function Stat({ icon, hearts, tooltipHeader, tooltipText, tooltipId }) {
  const [{ activeTooltip }, dispatch] = React.useContext(StateContext);
  const handleStatClick = () => {
    let payload = tooltipId;
    if (activeTooltip === tooltipId) payload = null;
    dispatch({ type: "SET_ACTIVE_TOOLTIP", payload });
  };

  const IoIcon = Icons?.[icon];
  const IoHeartIcon = IoHeart;
  const IoHeartOutlineIcon = IoHeartOutline;

  return (
    <div className="stat" onClick={() => handleStatClick()}>
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
        open={activeTooltip === tooltipId}
        onTooltipClick={() => handleStatClick()}
      />
    </div>
  );
}

export default Stat;
