import React from "react";
import "./MusicGenres.css";

function MusicGenres() {
  const genres = [
    { title: "Rap Tracks", image: "./Rectangle 39.png" },
    { title: "Pop Tracks", image: "./Rectangle 40.png" },
    { title: "Rock Tracks", image: "./Rectangle 41.png" },
    { title: "Classic Tracks", image: "./Rectangle 42.png" },
  ];

  return (
    <div className="music-genres-container">
      <h2 className="section-title">
        Music <span className="highlight">Genres</span>
      </h2>
      <div className="genres-list">
        {genres.map((genre, index) => (
          <div className="genre-item" key={index}>
            <img src={genre.image} alt={genre.title} className="genre-cover" />
            <div className="genre-title">{genre.title}</div>
          </div>
        ))}
        <div className="view-all">
          <div className="view-all-icon">+</div>
          <p>View All</p>
        </div>
      </div>
    </div>
  );
}

export default MusicGenres;
