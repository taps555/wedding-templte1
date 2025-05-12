"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer"; // Pastikan ini diimpor
import "./Invitation.css";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import CoupleSection from "../components/invitation/CoupleSection";
import StorySection from "../components/invitation/StorySection";
import EventSection from "../components/invitation/EventSection";
import GallerySection from "../components/invitation/GallerySection";
import RSVPSection from "../components/invitation/RSVPSection";
import Musik from "../components/common/MusikButton";
import { Music } from "lucide-react";

// CSS Animasi
const SectionWithAnimation = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Hanya aktifkan animasi sekali
    threshold: 0.1, // Ketika 50% elemen terlihat di viewport
  });

  return (
    <section
      ref={ref}
      className={`animate-on-scroll ${inView ? "active" : ""}`}
    >
      {children}
    </section>
  );
};

// Main Invitation Component
const Invitation = () => {
  // Initialize countdown timer on component mount
  useEffect(() => {
    document.title = "Wedding Invitation - Rahmat & Anisa";

    // Wedding date countdown
    const weddingDate = new Date("November 15, 2025 08:00:00").getTime();

    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      // Time calculations
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update DOM elements

      // If countdown is over
      if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div className="invitation-page animate-fade-in">
      <Header isHomePage={false} />
      <main>
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="cursive hero-title">Cowo & Cewe</h1>
            <p className="hero-date">November 15, 2024</p>
            <p className="hero-message">We are getting married!</p>
          </div>
        </div>

        <SectionWithAnimation>
          <CoupleSection />
        </SectionWithAnimation>
        <SectionWithAnimation>
          <StorySection />
        </SectionWithAnimation>
        <SectionWithAnimation>
          <EventSection />
        </SectionWithAnimation>
        <SectionWithAnimation>
          <GallerySection />
        </SectionWithAnimation>
        <SectionWithAnimation>
          <RSVPSection />
        </SectionWithAnimation>
      </main>
      <Footer />
    </div>
  );
};

export default Invitation;
