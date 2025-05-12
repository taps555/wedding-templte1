import "./EventSection.css";
import { Calendar, Clock, MapPin } from "lucide-react";
import Waktu from "./Waktu";

const EventSection = () => {
  const events = [
    {
      title: "Akad Nikah",
      date: "November 15, 2024",
      time: "08:00 - 10:00 AM",
      location: "Golden Ballroom, Jakarta",
      icon: "ceremony",
      description:
        "The wedding ceremony where we'll be officially married according to Islamic traditions.",
    },
    {
      title: "Resepsi ",
      date: "November 15, 2024",
      time: "11:00 AM - 14:00 PM",
      location: "Golden Ballroom, Jakarta",
      icon: "reception",
      description:
        "Join us for a celebration with food, music, and making memories together.",
    },
  ];

  return (
    <section id="event" className="section event-section">
      <div className="container">
        <div className="section-header">
          <h2 className="cursive section-title">Wedding Events</h2>
          <p className="section-subtitle">
            We would be honored to have you join us on our special day
          </p>
        </div>

        <div className="events-container">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <div className={`event-icon ${event.icon}`}></div>
              <h3 className="event-title">{event.title}</h3>
              <p className="event-description">{event.description}</p>

              <div className="event-details">
                <div className="event-detail">
                  <Calendar size={18} />
                  <span>{event.date}</span>
                </div>
                <div className="event-detail">
                  <Clock size={18} />
                  <span>{event.time}</span>
                </div>
                <div className="event-detail">
                  <MapPin size={18} />
                  <span>{event.location}</span>
                </div>
              </div>

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="btn location-btn"
              >
                View Location
              </a>
            </div>
          ))}
        </div>

        {/* <div className="countdown-container">
          <h3 className="countdown-title">Counting Down To The Big Day</h3>
          <div className="countdown">
            <div className="countdown-item">
              <span className="countdown-value" id="days">
                00
              </span>
              <span className="countdown-label">Days</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value" id="hours">
                00
              </span>
              <span className="countdown-label">Hours</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value" id="minutes">
                00
              </span>
              <span className="countdown-label">Minutes</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value" id="seconds">
                00
              </span>
              <span className="countdown-label">Seconds</span>
            </div>
          </div>
        </div> */}

        <Waktu />
      </div>
    </section>
  );
};

export default EventSection;
