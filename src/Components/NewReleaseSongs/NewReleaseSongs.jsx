import React from "react";
import { FaMusic } from "react-icons/fa"; // Sử dụng biểu tượng âm nhạc từ react-icons
import "./NewReleaseSongs.css";
import { NavLink } from "react-router-dom";
import AlbumsData from "../../Data/AlbumsData";

function NewReleaseSongs(props) {
  const { handleSongPlay } = props;
  // Dữ liệu giả cho danh sách bài hát mới phát hành
  const songs = [
    {
      title: "Time",
      artist: "Luciano",
      cover: "./8010b66da47b5371bdf7f6657d47d492.jpg",
    },
    {
      title: "112",
      artist: "jazzeek",
      cover: "./5bf52a4bf5eebcca6696da7edddd8dc2.png",
    },
    {
      title: "We don’t care",
      artist: "Kyanu & DJ Gollum",
      cover: "./156cba04dab27b5d20c11682d3fd43ee.jpg",
    },
    {
      title: "Who I Am",
      artist: "Alan Walker & Elias",
      cover: "./a4e363e99f9028a01447aafccb2cf1ff.jpg",
    },
    {
      title: "Baixo",
      artist: "XXAnteria",
      cover: "./dbc71d86a38201b61d24b0674b5e680c.jpg",
    },
  ];

  return (
    <div className="new-release-songs-container">
      <h2 className="section-title">
        New Release <span className="highlight">Songs</span>
      </h2>
      <div className="new-release-songs-list">
        {songs.map((song, index) => (
          <div
            className="song-item"
            key={index}
            onClick={() => {
              console.log(AlbumsData.filter((item) => item.title === song.title));
              handleSongPlay(AlbumsData.filter((item) => item.title === song.title)[0]);
            }}
          >
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
          <NavLink to="/albums" style={{ textDecoration: "none", color: "white" }}>
            <div className="view-all-icon">+</div>
          </NavLink>
          <p>View All</p>
        </div>
      </div>
    </div>
  );
}

export default NewReleaseSongs;
