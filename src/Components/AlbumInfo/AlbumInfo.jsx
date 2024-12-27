import React from "react";
import "./AlbumInfo.css";
import About from "../About/About";
import AlbumsData from "../../Data/AlbumsData";
import { useNavigate } from "react-router-dom";

function AlbumInfo(props) {
  const { setDisplayInfo, album, handleSongPlay, setCurrentSong } = props;

  return (
    <div className="album-info-container">
      <div className="album-info-title">
        <div className="album-info-title-header d-flex align-items-center justify-content-between">
          <i className="fa-solid fa-arrow-left" onClick={() => setDisplayInfo(false)} style={{ cursor: "pointer" }}></i>
          <div className="d-flex align-items-center gap-4">
            <a href="#share">Share</a>
            <a href="#about">About</a>
            <a href="#premium">Premium</a>
          </div>
        </div>
        <div className="album-info-title-des d-flex align-items-end justify-content-between">
          <div className="album-info-name-img d-flex gap-5">
            <img src={album.cover} alt="" />
            <div className="album-info-name">
              <p>
                Trending songs <span>mix</span>
              </p>
              <p>tate mcree, nightmares, the neighberhood, doja cat and ...</p>
              <div className="d-flex gap-4">
                <p>{album.songs.length} songs</p>
                <p style={{ color: "rgba(238, 16, 176, 1)" }}>●</p>
                <p>1h 36m</p>
              </div>
            </div>
          </div>
          <div className="album-info-play-all d-flex align-items-center gap-3">
            <h3>Play All</h3>
            <i className="fa-regular fa-circle-play" style={{ fontSize: "50px" }}></i>
          </div>
        </div>
      </div>
      <div className="album-info-content">
        <table
          style={{
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: "0px 10px",
          }}
        >
          <thead>
            <tr>
              <td></td>
              <td></td>
              <td>Played</td>
              <td style={{ textAlign: "center" }}>Album</td>
              <td style={{ textAlign: "center" }}>Time</td>
            </tr>
          </thead>
          <tbody>
            {album.songs.map((song, index) => (
              <tr
                className="album-info-list"
                key={index}
                onClick={() => {
                  console.log(AlbumsData.filter((item) => item.title === song.title));
                  handleSongPlay((AlbumsData.filter((item) => item.title === song.title))[0]);
                }}
              >
                <td style={{ width: "40px", textAlign: "center" }}>{song.rank}</td>
                <td style={{ padding: "5px" }}>
                  <div className="song-info-trending d-flex align-items-center">
                    <img src={song.cover} alt={song.title} className="trending-song-cover" />
                    <div>
                      <strong className="song-title">{song.title}</strong>
                      <p className="song-artist">{song.artist}</p>
                    </div>
                  </div>
                </td>
                <td>{song.played}</td>
                <td>{song.album}</td>
                <td>
                  <div className="song-time d-flex gap-2 justify-content-center">
                    <i className="fa-regular fa-heart" style={{ color: "rgba(238, 16, 176, 1)" }}></i>
                    {song.time}
                    <i className="fa-solid fa-ellipsis"></i>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <About></About>
    </div>
  );
}
export default AlbumInfo;
