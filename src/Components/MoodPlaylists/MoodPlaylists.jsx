import React from "react";
import { FaMusic } from "react-icons/fa"; // Sử dụng icon cho biểu tượng playlist
import "./MoodPlaylists.css";
import { NavLink } from "react-router-dom";

function MoodPlaylists() {
  // Dữ liệu giả cho danh sách playlist
  const playlists = [
    {
      title: "Sad Songs",
      description: "Sad Playlist",
      cover: "./Rectangle 17 (5).png", // Thay đổi đường dẫn ảnh theo ý bạn
    },
    {
      title: "Chill Songs",
      description: "Chill Playlist",
      cover: "./Rectangle 17 (6).png",
    },
    {
      title: "Workout Songs",
      description: "Workout Songs",
      cover: "./Rectangle 17 (7).png",
    },
    {
      title: "Love Songs",
      description: "Love Playlist",
      cover: "./Rectangle 17 (8).png",
    },
    {
      title: "Happy Songs",
      description: "Happy Songs",
      cover: "./Rectangle 17 (9).png",
    },
  ];

  return (
    <div className="mood-playlists-container">
      <h2 className="section-title">
        Mood <span className="highlight">Playlists</span>
      </h2>
      <div className="playlists-list">
        {playlists.map((playlist, index) => (
          <div className="playlist-item" key={index}>
            <img src={playlist.cover} alt={playlist.title} className="playlist-cover" />
            <div className="playlist-info">
              <h3 className="playlist-title">{playlist.title}</h3>
              <p className="playlist-description">{playlist.description}</p>
            </div>
            <div className="playlist-icon">
              <FaMusic />
            </div>
          </div>
        ))}
        <div className="view-all">
          <NavLink to="/albums" style={{ textDecoration: "none", color: "white" }}>
            <div className="view-all-icon">+</div>
          </NavLink>
          <p>View All</p>
        </div>
      </div>
    </div>
  );
}

export default MoodPlaylists;
