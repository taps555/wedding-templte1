import React from "react";
import { useState, useEffect } from "react";

export default function Waktu() {
  const weddingDate = new Date("August 15, 2025 15:00:00").getTime();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [weddingDate]);

  return (
    <div>
      <div className="countdown-container">
        <h3 className="countdown-title">Counting Down To The Big Day</h3>
        <div className="countdown">
          <div className="countdown-item">
            <CountdownItem className="countdown-value" value={days} />

            <span className="countdown-label">Days</span>
          </div>
          <div className="countdown-item">
            <CountdownItem className="countdown-value" value={hours} />
            <span className="countdown-label">Hours</span>
          </div>
          <div className="countdown-item">
            <CountdownItem className="countdown-value" value={minutes} />
            <span className="countdown-label">Minutes</span>
          </div>
          <div className="countdown-item">
            <CountdownItem className="countdown-value" value={seconds} />
            <span className="countdown-label">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const CountdownItem = ({ value, label }) => (
  <div className="countdown-value">
    {value}

    <span>{label}</span>
  </div>
);
