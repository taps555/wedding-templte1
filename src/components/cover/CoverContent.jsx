"use client";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CoverContent.css";
import { Calendar, Clock, MapPin } from "lucide-react";
import Music from "../common/MusikButton";

const CoverContent = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState([null]);
  const [nama, setNama] = useState("");
  const { name } = useParams("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Add background particles or animation effect here if needed
  // Animation on mount
  const handleOpenInvitation = () => {
    navigate(`/undangan/${name}/ourWedding`);
  };

  useEffect(() => {
    const viewData = async () => {
      try {
        const response = await fetch(
          `https://be-weeding-invitation-production.up.railway.app/undangan/${name}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        if (!data || data.length === 0) {
          navigate("/error");
        } else {
          setData(data);
          setNama(data.name); // This sets the name of the invitation
          setIsVisible(true);
        }
        setLoading(false);

        console.log("Data fetched:", data);
        console.log("Nama Undangan:", data.name);
      } catch (error) {
        setError(error);
        console.error("Error fetching data:", error);
        navigate("/error");
      }
    };

    viewData();
  }, [name, navigate]);

  if (error) return <div>Error: {error.message}</div>;
  if (loading) return <div>Loading...</div>;
  console.log("Nama Undangan11:", name);

  return (
    <div className={`cover-content ${isVisible ? "visible" : ""}`}>
      <div className="cover-intro">
        <p className="intro-text">THE WEDDING OF</p>
        <h1 className="couple-names cursive">Cowo dan cewe</h1>
        <div className="event-details">
          <div className="detail-item">
            <Calendar size={20} />
            <span>November 15, 2024</span>
          </div>
          <div className="detail-item"></div>
          <div className="detail-item mb-9 p-9"></div>
        </div>
        {data && (
          <div className="animate-fade-in ">
            <p className="text-xl md:text-3xl opacity-90">Dear,</p>
            <h2 className="font-serif intro-text2">{name}</h2>
            <p className="text-1xl opacity-80 ">
              Kami Mengundang Anda untuk hadir pada acara pernikahan kami.
            </p>
          </div>
        )}

        <button onClick={handleOpenInvitation} className="btn open-invitation">
          Open Invitation
        </button>
      </div>
    </div>
  );
};

export default CoverContent;
