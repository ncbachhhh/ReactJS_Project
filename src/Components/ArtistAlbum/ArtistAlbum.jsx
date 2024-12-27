import React from "react";
import "./ArtistAlbum.css";
export default function ArtistAlbum() {
  const artist_album = [
    {
      name: "The Eminem Show",
      year: 2002,
      image: "./artist_album (1).png",
    },
    {
      name: "Encore",
      year: 2004,
      image: "./artist_album (2).png",
    },
    {
      name: "Music to be",
      year: 2020,
      image: "./artist_album (3).png",
    },
    {
      name: "Recovery",
      year: 2010,
      image: "./artist_album (4).png",
    },
    {
      name: "Eminem Slim",
      year: 2002,
      image: "./artist_album (5).png",
    },
  ];
  return (
    <div className="artist-album-container">
      <h2 className="section-title">
        Artist’s <span style={{ color: "rgba(14, 158, 239, 1)" }}>Albums</span>
      </h2>
      <div className="artist-album-list d-flex align-items-center justify-content-between">
        {artist_album.map((item, index) => {
          return (
            <div className="artist-list-item" key={index}>
              <img src={item.image} className="artist-list-cover" />
              <div className="artist-list-info">
                <p className="artist-list-title">{item.name}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="artist-list-description">{item.year}</p>
                  <img
                    src="./material-symbols-light_album-outline.svg"
                    alt=""
                    style={{ width: "20px" }}
                  />
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
