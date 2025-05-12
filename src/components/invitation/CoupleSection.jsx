import "./CoupleSection.css";
import { Instagram } from "lucide-react";

const CoupleSection = () => {
  return (
    <section id="couple" className="section couple-section">
      <div className="container">
        <div className="section-header">
          <h2 className="cursive section-title">Bride & Groom</h2>
          <p className="section-subtitle">
            Kami mengundang anda untuk merayakan pernikahan kami
          </p>
        </div>

        <div className="couple-container">
          <div className="person groom">
            <div className="person-image-container">
              <div className="person-image groom-image"></div>
            </div>
            <h3>Yuni Mursalin</h3>
            <p>Anak dari ... & ...</p>
            <a href="https://instagram.com" className="social-link">
              <Instagram size={20} />
              <span>@...</span>
            </a>
          </div>

          <div className="person-divider">
            <div className="heart-divider">&</div>
          </div>

          <div className="person bride">
            <div className="person-image-container">
              <div className="person-image bride-image"></div>
            </div>
            <h3>Aldhi Prasetya</h3>
            <p>Anak dari ... & ...</p>
            <a href="https://instagram.com" className="social-link">
              <Instagram size={20} />
              <span>@...</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;
