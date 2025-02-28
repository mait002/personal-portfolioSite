import Lottie from "lottie-react";
import contact from "../../assets/images/contact.json";
const Contact = () => {
  return (
    <>
      <div className="container">
        <footer>
          <h2>Thanks for visiting!</h2>
          <div className="img">
            <Lottie className="envelope" animationData={contact} loop={true} />
          </div>
          <hr />
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a target="_blank" href="https://www.linkedin.com/in/maitreyee-d-8241ab203/" className="nav-link px-2">
                <h3>
                  <i className="bi bi-linkedin icons"></i>
                </h3>
              </a>
            </li>
            <li className="nav-item">
              <a target="_blank" href="mailto:maitreyee.urmi@torontomu.ca" className="nav-link px-2">
                <h3>
                  <i className="bi bi-envelope-at-fill icons"></i>
                </h3>
              </a>
            </li>
            <li className="nav-item">
              <a target="_blank" href="https://github.com/mait002" className="nav-link px-2">
                <h3>
                  <i className="bi bi-github icons"></i>
                </h3>
              </a>
            </li>
          </ul>
          <p className="text-center">Made with 🫶 © Maitreyee Das, 2024</p>
        </footer>
      </div>
    </>
  );
};

export default Contact;
