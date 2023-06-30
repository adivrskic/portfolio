import React from "react";
import { IoCheckmarkCircleSharp, IoCloseCircleSharp } from "react-icons/io5";
import "./formicon.scss";

const FormIcon = ({ status }) => {
  return (
    <div className="form-icon">
      {status === "error" && (
        <span className="form-icon__error">
          <IoCloseCircleSharp />
        </span>
      )}
      {status === "success" && (
        <span className="form-icon__success">
          <IoCheckmarkCircleSharp />
        </span>
      )}
    </div>
  );
};

export default FormIcon;
