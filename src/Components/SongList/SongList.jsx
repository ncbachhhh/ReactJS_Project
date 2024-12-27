import React from "react";
import { FaMusic } from "react-icons/fa"; // Import biểu tượng âm nhạc từ react-icons
import "./SongList.css";
import { NavLink, useNavigate } from "react-router-dom";

function SongList() {
  // Dữ liệu giả cho danh sách bài hát
  const songs = [
    {
      title: "Whatever It Takes",
      artist: "Imagine Dragons",
      cover: "./ce2278bbe9382ef7f4f9d145ce870ade.png",
    },
    {
      title: "Skyfall",
      artist: "Adele",
      cover: "./cd224158b5a220653e3335bde00f1c81.png",
    },
    {
      title: "Superman",
      artist: "Eminem",
      cover: "./3fbe0a9c093defb1d0a80e4d7c9a22e9.jpg",
    },
    {
      title: "Softcore",
      artist: "The Neighborhood",
      cover: "./928539efe5b5bc249fc7c4bc8c666070.jpg",
    },
    {
      title: "The Loneliest",
      artist: "Måneskin",
      cover: "./271f7c93fea64fd739895dee8834755d.jpg",
    },
  ];

  return (
    <div className="song-list-container">
      <h2 className="section-title">
        Weekly Top <span className="highlight">Songs</span>
      </h2>
      <div className="song-list">
        {songs.map((song, index) => (
          <div className="song-item" key={index}>
            <img src={song.cover} alt={song.title} className="song-cover" />
            <div className="song-info">
              <h3 className="song-title">{song.title}</h3>
              <p className="song-artist">{song.artist}</p>
            </div>
            <div className="icon-music">
              <img src="./mdi_music.svg" alt="" style={{ width: "20px" }} />
            </div>
          </div>
        ))}
        <div className="view-all">
          <NavLink to='/albums' style={{textDecoration: 'none', color: 'white'}}><div className="view-all-icon">+</div></NavLink>
          <p>View All</p>
        </div>
      </div>
    </div>
  );
}

export default SongList;
