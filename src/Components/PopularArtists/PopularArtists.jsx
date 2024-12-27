import React from "react";
import "./PopularArtists.css";
import { NavLink } from "react-router-dom";

function PopularArtists() {
  // Dữ liệu giả cho danh sách nghệ sĩ
  const artists = [
    {
      name: "Eminiem",
      image: "./69824 2.png",
    },
    {
      name: "Imagine Dragons",
      image: "./69824 3.png",
    },
    {
      name: "Adele",
      image: "./69824 4.png",
    },
    {
      name: "Lana Del Ray",
      image: "./69824 5.png",
    },
    {
      name: "Harry Styles",
      image: "./69824 6.png",
    },
    {
      name: "Billie Eilish",
      image: "./69824 7.png",
    },
  ];

  return (
    <div className="popular-artists-container">
      <h2 className="section-title">
        Popular <span className="highlight">Artists</span>
      </h2>
      <div className="artists-list">
        {artists.map((artist, index) => (
          <div className="artist-item" key={index}>
            <img src={artist.image} alt={artist.name} className="artist-image" />
            <p className="artist-name">{artist.name}</p>
          </div>
        ))}
        <div className="view-all">
          <NavLink to="/artists" style={{ textDecoration: "none", color: "white" }}>
            <div className="view-all-icon">+</div>
          </NavLink>
          <p>View All</p>
        </div>
      </div>
    </div>
  );
}

export default PopularArtists;
