import React, { useState, useRef } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";
import FormIcon from "./subcomponents/FormIcon";
import FormSuccess from "./subcomponents/FormSuccess";

const SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAIL_PUBLIC_KEY;

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: { content: "", status: "" },
    email: { content: "", status: "" },
    message: { content: "", status: "" },
  });

  const [formError, setFormError] = useState(false);
  const [formErrorText, setFormErrorText] = useState("");

  const [formSubmitSuccess, setFormSubmitSuccess] = useState(false);

  const onFormChange = (e, el) => {
    if (el === "name") {
      setFormData({
        ...formData,
        name: { ...formData.name, content: e.target.value },
      });
    } else if (el === "email") {
      setFormData({
        ...formData,
        email: { ...formData.email, content: e.target.value },
      });
    } else if (el === "message") {
      setFormData({
        ...formData,
        message: { ...formData.message, content: e.target.value },
      });
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    const hasNameInput = formData.name.content !== "";
    const hasEmailInput = formData.email.content !== "";
    const hasMessage = formData.message.content !== "";

    if (!isValidEmail(formData.email.content)) {
      setFormError(true);

      if (hasNameInput && hasMessage) {
        setFormErrorText("Please enter a valid email");
      } else {
        setFormErrorText("Please fill out every field");
      }

      return;
    }

    if (hasNameInput && hasEmailInput && hasMessage) {
      setFormError(false);

      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
        (res) => {
          // indicate success
          setFormSubmitSuccess(true);
        },
        (err) => {
          // indicate failure
        }
      );
    } else {
      setFormError(true);
      setFormErrorText("Please fill out every field");
    }
  };

  const isValidName = (name) => {
    if (name.length === 0) {
      setFormData({
        ...formData,
        name: { ...formData.name, status: "" },
      });

      return;
    }

    if (name.length >= 1) {
      setFormData({
        ...formData,
        name: { ...formData.name, status: "success" },
      });
    } else {
      setFormData({
        ...formData,
        name: { ...formData.name, status: "error" },
      });
    }
  };

  const isValidEmail = (email) => {
    if (email.length === 0) {
      setFormData({
        ...formData,
        email: { ...formData.email, status: "" },
      });

      return false;
    }

    if (/\S+@\S+\.\S+/.test(email)) {
      setFormData({
        ...formData,
        email: { ...formData.email, status: "success" },
      });
      return true;
    } else {
      setFormData({
        ...formData,
        email: { ...formData.email, status: "error" },
      });
      return false;
    }
  };

  const isValidMessage = (message) => {
    if (message.length === 0) {
      setFormData({
        ...formData,
        message: { ...formData.message, status: "" },
      });

      return;
    }

    if (message.length >= 1) {
      setFormData({
        ...formData,
        message: { ...formData.message, status: "success" },
      });
    } else {
      setFormData({
        ...formData,
        message: { ...formData.message, status: "error" },
      });
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__info">
        <h2>Get in touch</h2>
        <p>
          Interested in discussing your web development project? I'm here to
          help. Whether you have inquiries, require a quote, or want to share
          your ideas, please use this contact form. Let's connect and explore
          how we can work together to bring your vision to reality. I look
          forward to hearing from you soon.
        </p>
      </div>
      <form
        ref={form}
        id="contact-form"
        className={`contact__form ${
          formSubmitSuccess ? "contact__form-success" : ""
        }`}
      >
        <div className="contact__form-input-container">
          <input
            id="name"
            type="text"
            name="from_name"
            value={formData.name.content}
            onChange={(e) => onFormChange(e, "name")}
            onBlur={(e) => isValidName(e.target.value)}
            className={`contact__form-input ${
              formData.name.status === "error" && "contact__form-input-error"
            }`}
            maxLength="20"
            required
          />
          <label htmlFor="name" className="contact__form-label">
            Your Name
          </label>
          <FormIcon status={formData.name.status} />
        </div>
        <div className="contact__form-input-container">
          <input
            id="email"
            type="email"
            name="from_email"
            value={formData.email.content}
            onChange={(e) => onFormChange(e, "email")}
            onBlur={(e) => isValidEmail(e.target.value)}
            className={`contact__form-input ${
              formData.email.status === "error" && "contact__form-input-error"
            }`}
            maxLength="255"
            required
          />
          <label htmlFor="email" className="contact__form-label">
            Your Email
          </label>
          <FormIcon status={formData.email.status} />
        </div>

        <div className="contact__form-input-container">
          <textarea
            id="message"
            value={formData.message.content}
            name="message"
            onChange={(e) => onFormChange(e, "message")}
            onBlur={(e) => isValidMessage(e.target.value)}
            className={`contact__form-textarea ${
              formData.message.status === "error" && "contact__form-input-error"
            }`}
            rows="10"
            required
          ></textarea>
          <label htmlFor="message" className="contact__form-label">
            Your Message
          </label>
          <FormIcon status={formData.message.status} />
        </div>

        <div>
          <button
            type="submit"
            id="submit"
            className="button"
            onClick={(e) => onFormSubmit(e)}
          >
            Submit
          </button>
        </div>

        {formError && (
          <span className="contact__form-error">{formErrorText}</span>
        )}

        {formSubmitSuccess && <FormSuccess />}
      </form>
    </section>
  );
};

export default Contact;
