import React from "react";
import "./TopAlbums.css";
import { NavLink } from "react-router-dom";

function TopAlbums() {
  // Dữ liệu giả cho danh sách album
  const albums = [
    {
      title: "Adele 21",
      artist: "Adele",
      cover: "./Rectangle 17.png", // Thay đổi đường dẫn ảnh theo ý bạn
    },
    {
      title: "Behind the Madness",
      artist: "The Weeknd",
      cover: "./Rectangle 17 (1).png",
    },
    {
      title: "Scorpion",
      artist: "Drake",
      cover: "./Rectangle 17 (2).png",
    },
    {
      title: "Harry's House",
      artist: "Harry Styles",
      cover: "./Rectangle 17 (3).png",
    },
    {
      title: "Born To Die",
      artist: "Lana Del Rey",
      cover: "./Rectangle 17 (4).png",
    },
  ];

  return (
    <div className="top-albums-container">
      <h2 className="section-titlee">
        Top <span className="highlight">Albums</span>
      </h2>
      <div className="albums-list">
        {albums.map((album, index) => (
          <div className="album-item" key={index}>
            <img src={album.cover} alt={album.title} className="album-cover" />
            <div className="album-info d-flex flex-column gap-2">
              <h3 className="album-title">{album.title}</h3>
              <div className="d-flex justify-content-between align-items-center">
                <p className="album-artist">{album.artist}</p>
                <img src="./material-symbols-light_album-outline.svg" style={{ width: "20px" }} />
              </div>
            </div>

            {/* Biểu tượng trạng thái */}
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

export default TopAlbums;
