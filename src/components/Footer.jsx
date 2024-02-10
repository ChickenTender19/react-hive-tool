import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="text-center mt-5">
      <div className="container d-flex flex-column align-items-center">
        {/* Social Media Icons */}
        <div className="d-flex gap-2 mt-1">
          <a href="http://www.facebook.com" className="text-dark">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="http://www.instagram.com" className="text-dark">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-dark">
          <p className="mb-0">
            © 2023 Copyright:
            <a href="https://marks-bees.netlify.app/#/" className="text-dark">
              Porcaro Farms
            </a>
          </p>
          <div>
            <a href="/privacy-policy" className="text-dark">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
