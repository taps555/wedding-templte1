"use client";

import { useEffect } from "react";
import "./Cover.css";
import Header from "../components/common/Header";
import CoverContent from "../components/cover/CoverContent";
import Music from "../components/common/MusikButton";

const Cover = () => {
  // Add background particles or animation effect here if needed
  useEffect(() => {
    document.title = "Wedding Invitation - Rahmat & Anisa";
  }, []);

  return (
    <div className="cover-page au">
      <Header isHomePage={true} />
      <div className="cover-background"></div>
      <CoverContent />
      <div className="ai">
        <Music />
      </div>
    </div>
  );
};

export default Cover;
