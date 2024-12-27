import React from "react";

import "./ArtistTitle.css";
export default function ArtistTitle(props) {
  const { setDisplayArtist, artist } = props;
   return (
    <>
      <div className="artist-title" style={{ backgroundImage: `url(${artist.background})` }}>
        <div className="artist-title-header d-flex align-items-center justify-content-between">
          <i className="fa-solid fa-arrow-left" onClick={() => setDisplayArtist(false)} style={{ cursor: "pointer" }}></i>
          <div className="d-flex align-items-center gap-4">
            <a href="#share">Share</a>
            <a href="#about">About</a>
            <a href="#premium">Premium</a>
            {/* <img src={artist.background} alt="" /> */}
          </div>
        </div>
        <div className="artist-title-des">
          <p>{artist.name}</p>
        </div>
      </div>
    </>
  );
}
