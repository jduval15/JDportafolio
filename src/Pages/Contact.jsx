import FormContact from "../components/Layout/FormContact";
import "./styles/Contact.css";

const Contact = ({ translations }) => {
  return (
    <div id="contact" className="contact shadowBg">
      <h3>{translations.contact.title}</h3>
      <div className="contact__container">
        <div className="contact__container-component">
          <div className="contact__img">
            <a href="tel:+18098801940">
              <img src="./img/phone.png" alt="phone" />
            </a>
          </div>
        </div>

        <div className="contact__container-component">
          <div className="contact__img">
            <a href="mailto:joseluis_duval@hotmail.com">
              <img src="./img/gmail.png" alt="mail" />
            </a>
          </div>
        </div>
      </div>
      <FormContact translations={translations} />
    </div>
  );
};

export default Contact;
