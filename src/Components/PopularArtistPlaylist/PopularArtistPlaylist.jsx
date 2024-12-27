import React from "react";
import AlbumsData from "../../Data/AlbumsData";
import "./PopularArtistPlaylist.css";

export default function PopularArtistPlaylist(props) {
  const { artist, handleSongPlay, setCurrentSong } = props;

  return (
    artist.playlist.length > 0 && (
      <div>
        <h2 className="section-title">Popular</h2>
        <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0px 10px" }}>
          <thead>
            <tr>
              <td></td>
              <td></td>
              <td>Release Date</td>
              <td style={{ textAlign: "center" }}>Played</td>
              <td style={{ textAlign: "center" }}>Time</td>
            </tr>
          </thead>
          <tbody>
            {artist.playlist.map((song, index) => (
              <tr
                className="album-info-list"
                key={index}
                onClick={() => {
                  console.log(AlbumsData.filter((item) => item.title === song.title));
                  handleSongPlay(AlbumsData.filter((item) => item.title === song.title)[0]);
                }}
              >
                <td style={{ width: "40px", textAlign: "center" }}>{song.rank}</td>
                <td style={{ padding: "5px" }}>
                  <div className="song-info-trending">
                    <img src={song.cover} alt={song.title} className="trending-song-cover" />
                    <div>
                      <strong className="song-title">{song.title}</strong>
                      <p className="song-artist">{song.artist}</p>
                    </div>
                  </div>
                </td>
                <td>{song.releaseDate}</td>
                <td>{song.played}</td>
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
    )
  );
}
