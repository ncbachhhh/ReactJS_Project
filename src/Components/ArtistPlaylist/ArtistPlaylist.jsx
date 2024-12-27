import React from "react";
import "./ArtistPlaylist.css";

export default function ArtistPlaylist() {
  const artistPlaylist = [
    {
      name: "Full Collection",
      image: "./ArtistPlaylist (1).png",
    },
    {
      name: "Best Of Eminem",
      image: "./ArtistPlaylist (2).png",
    },
    {
      name: "Old Songs",
      image: "./ArtistPlaylist (3).png",
    },
    {
      name: "Fan's Favorite",
      image: "./ArtistPlaylist (4).png",
    },
    {
      name: "New Release",
      image: "./ArtistPlaylist (5).png",
    },
  ];
  return (
    <div className="artist-album-container">
      <h2 className="section-title">
        Music <span className="highlight">Video</span>
      </h2>
      <div className="artist-album-list d-flex align-items-center justify-content-between">
        {artistPlaylist.map((item, index) => {
          return (
            <div className="artist-list-item" key={index}>
              <img src={item.image} className="artist-list-cover" />
              <div className="artist-list-info d-flex justify-content-between">
                <p className="artist-list-title">{item.name}</p>

                <img src="./ph_playlist.svg" alt="" style={{ width: "20px" }} />
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
