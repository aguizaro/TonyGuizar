import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope as faEnvelopeSolid,
  faEnvelope as faEnvelopeRegular,
} from "@fortawesome/free-regular-svg-icons";
import "./footer.css";

const Footer = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  // Function to check the current theme
  useEffect(() => {
    const htmlElement = document.querySelector("html");
    const theme = htmlElement.getAttribute("data-bs-theme");
    setIsLightTheme(theme === "light");
  }, []);

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
            <FontAwesomeIcon
              icon={isLightTheme ? faEnvelopeSolid : faEnvelopeRegular}
              size="3x"
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
