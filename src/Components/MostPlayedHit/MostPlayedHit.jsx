import React from "react";
import { FaHeart } from "react-icons/fa";
import "./MostPlayedHit.css";
import SongsData from "../../Data/SongsData";
import NewReleaseSongs from "../NewReleaseSongs/NewReleaseSongs";
import JoinOurPlatform from "../JoinOurPlatform/JoinOurPlatform";

function MostPlayedHit({ onSongPlay }) {
  const handleSongClick = (song) => {
    if (onSongPlay && typeof onSongPlay === "function") {
      onSongPlay(song);
    } else {
      console.error("onSongPlay is not provided or is not a function");
    }
  };

  return (
    <div>
      <div className="most-played-container">
        <h2 className="section-title">
          Most Played <span className="highlight">Songs</span>
        </h2>
        <div className="most-played-table-container">
          <table
            className="most-played-songs-table"
            style={{
              width: "100%",
              borderCollapse: "separate",
              borderSpacing: "0px 10px",
            }}
          >
            <thead>
              <tr>
                <td>Rank</td>
                <td>Song</td>
                <td>Release Date</td>
                <td style={{ textAlign: "center" }}>Album</td>
                <td style={{ textAlign: "center" }}>Time</td>
              </tr>
            </thead>
            <tbody>
              {SongsData.map((song, index) => (
                <tr key={index} onClick={() => handleSongClick(song)} style={{ cursor: "pointer" }}>
                  <td style={{ borderRadius: "10px 0 0 10px" }}>{song.rank}</td>
                  <td>
                    <div className="song-info-most-played">
                      <img src={song.cover} alt={song.title} className="most-played-song-cover" />
                      <div>
                        <strong className="song-title">{song.title}</strong>
                        <p className="song-artist">{song.artist}</p>
                      </div>
                    </div>
                  </td>
                  <td>{song.releaseDate}</td>
                  <td style={{ textAlign: "center" }}>{song.album}</td>
                  <td style={{ borderRadius: "0 10px 10px 0" }}>
                    <div className="song-time d-flex gap-2 justify-content-center">
                      <FaHeart style={{ color: "rgba(238, 16, 176, 1)" }} />
                      {song.time}
                      <i className="fa-solid fa-ellipsis"></i>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="view-all-btn">+ View All</button>
      </div>
      <NewReleaseSongs />
      <JoinOurPlatform />
    </div>
  );
}

export default MostPlayedHit;
