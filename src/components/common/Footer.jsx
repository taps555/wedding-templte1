import "./Footer.css";
import { Heart, Instagram, Facebook, Mail, Whatsapp } from "lucide-react";
import Musik from "./MusikButton";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <h2 className="cursive footer-title">Aldhi & Yuni</h2>
          <p className="footer-date">November .., ....</p>
          <Musik />
        </div>
        <div className="footer-bottom">
          <p>Mau buat juga?? hubungi kami</p>
          <p>
            <a target="_blank" href="https://instagram.com/raadith04_">
              <Instagram className="heart-icon" size={16} />
              @raadith04_
            </a>
          </p>
          <p>
            <Mail className="heart-icon" size={16} />
            <a target="_blank" href="https://wa.me/628781584957">
              whatsapp
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
