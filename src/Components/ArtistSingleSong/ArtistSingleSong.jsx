import React from "react";
import "./ArtistSingleSong.css";

function ArtistSingleSong() {
  const artistSingeSong = [
    {
      name: "Lace It",
      year: 2023,
      image: "./ArtistSingleSong (1).png",
    },
    {
      name: "Releast",
      year: 2022,
      image: "./ArtistSingleSong (2).png",
    },
    {
      name: "From the D 2",
      year: 2023,
      image: "./ArtistSingleSong (3).png",
    },
    {
      name: "911",
      year: 2022,
      image: "./ArtistSingleSong (4).png",
    },
    {
      name: "Killshot",
      year: 2018,
      image: "./ArtistSingleSong (5).png",
    },
  ];
  return (
    <div className="artist-album-container">
      <h2 className="section-title">
        Music <span className="highlight">Video</span>
      </h2>
      <div className="artist-album-list d-flex align-items-center justify-content-between">
        {artistSingeSong.map((item, index) => {
          return (
            <div className="artist-list-item" key={index}>
              <img src={item.image} className="artist-list-cover" />
              <div className="artist-list-info">
                <p className="artist-list-title">{item.name}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="artist-list-description">{item.year}</p>
                  <img src="./mdi_music.svg" alt="" style={{ width: "20px" }} />
                </div>
              </div>
            </div>
          );
        })}
        <div className="view-all">
          <div className="view-all-icon">+</div>
          <p>View All</p>
        </div>
      </div>
    </div>
  );
}

export default ArtistSingleSong;
