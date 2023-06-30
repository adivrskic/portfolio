import React from "react";
import "./formsuccess.scss";

const FormSuccess = () => {
  return (
    <div className="form-success">
      <h2 className="form-success__heading">Thank You</h2>
      <p className="form-success__text">
        Your message was delivered.
        <br /> I'll get back to you as soon as I can.
      </p>
    </div>
  );
};

export default FormSuccess;
