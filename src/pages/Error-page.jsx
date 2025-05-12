import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Page Not Found</h1>
      <p style={styles.message}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <button onClick={handleNavigate} style={styles.link}>
        Go back to Home
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
    backgroundColor: "#f4f4f4",
    color: "#333",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "20px",
  },
  message: {
    fontSize: "1.5rem",
    marginBottom: "30px",
  },
  link: {
    fontSize: "1.2rem",
    color: "#007bff",
    textDecoration: "none",
    padding: "10px 20px",
    border: "2px solid #007bff",
    borderRadius: "5px",
  },
};

export default NotFoundPage;
