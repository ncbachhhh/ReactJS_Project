import React from "react";
import "./NewAlbums.css";

function NewAlbums() {
  const albums = [
    {
      title: "I Got Heaven",
      artist: "Mannequin",
      cover: "./Rectangle 17 (10).png",
    },
    {
      title: "Saviors",
      artist: "Green Day",
      cover: "./Rectangle 17 (11).png",
    },
    {
      title: "Loss of Life",
      artist: "MGMT",
      cover: "./Rectangle 17 (12).png",
    },
    {
      title: "All Quiet on the Eastern",
      artist: "The Libertines",
      cover: "./Rectangle 17 (13).png",
    },
    {
      title: "Little Rope",
      artist: "Sleater-Kinney",
      cover: "./Rectangle 17 (14).png",
    },
  ];

  return (
    <div className="new-albums-container">
      <h2 className="section-title">
        New <span className="highlightt">Albums</span>
      </h2>
      <div className="albums-list">
        {albums.map((album, index) => (
          <div className="album-item" key={index}>
            <img src={album.cover} alt={album.title} className="album-cover" />
            <div className="album-info">
              <h3 className="album-title">{album.title}</h3>
              <p className="album-artist">{album.artist}</p>
            </div>
            <div className="status-indicator"></div>
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

export default NewAlbums;
