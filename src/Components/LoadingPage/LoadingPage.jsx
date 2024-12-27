import React from "react";
import "./LoadingPage.css";

function LoadingPage() {
  return (
    <div className="loading-page">
      <img
        src="./logo-no-background 1.png"
        alt="Melodies Logo"
        className="logo-image"
      />
      <p className="loading-text">Loading</p>
      <div className="spinner"></div>
    </div>
  );
}

export default LoadingPage;
