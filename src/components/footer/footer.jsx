import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(faLinkedin, faGithub, faEnvelope);

const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top">
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/antonioguizarorozco/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
          <a
            href="https://www.github.com/aguizaro"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>

          <a href="mailto:aguizaro@ucsc.edu">
            <FontAwesomeIcon icon={faEnvelope} size="3x" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
