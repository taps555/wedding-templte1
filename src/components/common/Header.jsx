import "./Header.css";
import { Link } from "react-router-dom";
import Musik from "./MusikButton";

const Header = ({ isHomePage }) => {
  return (
    <header className={`header ${isHomePage ? "home-header" : ""}`}>
      <div className="container header-container">
        <div className="logo">
          <Link to="">
            <h3 className="cursive">A & Y</h3>
          </Link>
        </div>
        {!isHomePage && (
          <nav className="navigation">
            <ul>
              <li>
                <a href="#couple">Couple</a>
              </li>
              <li>
                <a href="#story">Our Story</a>
              </li>
              <li>
                <a href="#event">Event</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#rsvp">RSVP</a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
