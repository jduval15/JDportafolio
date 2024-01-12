import { useState } from "react";
import "./styles/FormContact.css";

const FormContact = ({ translations }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="contact-form-container">
      <h2 className="title">{translations.contact.form.title}</h2>

      {!formSubmitted ? (
        <form
          className="form-group"
          action="https://formsubmit.co/5c2139d8f53f484b71609f444477afa9"
          method="POST"
        >
          <div className="form-group">
            <label className="contact-label" htmlFor="name">
              {translations.contact.form.name}
            </label>
            <input
              className="contact-input"
              type="text"
              name="name"
              required={true}
              //value={formData.name}
              //   onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="contact-label" htmlFor="email">
              {translations.contact.form.email}
            </label>
            <input
              className="contact-input"
              type="email"
              name="email"
       required={true}
              //  value={formData.email}
              //   onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="contact-label" htmlFor="message">
              {translations.contact.form.message}
            </label>
            <textarea
              className="contact-input"
              name="message"
        required={true}
              //  value={formData.message}
              // onChange={handleChange}
            ></textarea>
          </div>
          <button
            className="button"
            type="submit"
            onSubmit={(e) => {
              e.preventDefault();
              setFormSubmitted(true);
            }}
          >
            {translations.contact.form.button}
          </button>
          {}
          <input type="hidden" name="_captcha" value="false"></input>
        </form>
      ) : (
        <p className="success-message">¡Formulario enviado con éxito!</p>
      )}
    </div>
  );
};

export default FormContact;
