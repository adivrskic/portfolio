import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiJsBadge,
  DiJqueryLogo,
  DiReact,
  DiAngularSimple,
  DiPython,
  DiNodejsSmall,
  DiDatabase,
  DiCode,
  DiGoogleAnalytics,
  DiHeroku,
} from "react-icons/di";
import { StateContext } from "../context/StateProvider";

import "../styles/components/stat.scss";

function Stat({ icon, hearts, tooltipHeader, tooltipText, tooltipId }) {
  const [{ activeTooltip }, dispatch] = React.useContext(StateContext);
  const handleStatClick = () => {
    let payload = tooltipId;
    if (activeTooltip === tooltipId) payload = null;
    dispatch({ type: "SET_ACTIVE_TOOLTIP", payload });
  };

  const icons = {
    DiHtml5: DiHtml5,
    DiCss3: DiCss3,
    DiSass: DiSass,
    DiJsBadge: DiJsBadge,
    DiJqueryLogo: DiJqueryLogo,
    DiReact: DiReact,
    DiAngularSimple: DiAngularSimple,
    DiPython: DiPython,
    DiNodejsSmall: DiNodejsSmall,
    DiDatabase: DiDatabase,
    DiCode: DiCode,
    DiGoogleAnalytics: DiGoogleAnalytics,
    DiHeroku: DiHeroku,
  };

  const Icon = icons[icon];

  return (
    <div className="stat" onClick={() => handleStatClick()}>
      {tooltipHeader}
      <Icon className="stat-icon" />
    </div>
  );
}

export default Stat;
