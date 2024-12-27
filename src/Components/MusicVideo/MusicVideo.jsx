import React, { useState } from "react";
import "./MusicVideo.css";
import { NavLink } from "react-router-dom";

function MusicVideo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = [
    {
      title: "Gossip",
      artist: "Måneskin",
      views: "231K views",
      cover: "./cb56e6307ab25f1ad58aa7a02fac52c0.jpg",
    },
    {
      title: "Shape Of You",
      artist: "Ed Sheeran",
      views: "5M views",
      cover: "./63b9afab605483f696cb2e8df0064987.jpg",
    },
    {
      title: "Someone Like You",
      artist: "Adele",
      views: "3M views",
      cover: "./ae52f709f9928fdc8d2aa98a670e3237.jpg",
    },
    {
      title: "Roar",
      artist: "Katy Perry",
      views: "4.6M views",
      cover: "./Rectangle 35.png",
    },
    {
      title: "Shake It Off",
      artist: "Taylor Swift ",
      views: "4.2M views",
      cover: "./Rectangle 35 (1).png",
    },
    {
      title: "New Rules",
      artist: "Dua Lipa",
      views: "3.7M views",
      cover: "./Rectangle 35 (2).png",
    },
    {
      title: "Waka Waka",
      artist: "Shakira",
      views: "3.5M views",
      cover: "./Rectangle 35 (3).png",
    },
  ];
  const displayVideos = videos.slice(0, 6);
  return (
    <div className="music-video-container">
      <h2 className="section-title">
        Music <span className="highlight">Video</span>
      </h2>
      <div className="music-video-display-container">
        <div className="music-video-list">
          {displayVideos.map((item, index) => {
            return (
              <div className="video-item" key={index}>
                <img src={item.cover} alt="" />
                <div className="video-info">
                  <h2 className="video-title">{item.title}</h2>
                  <div>
                    <p className="video-artist">{item.artist}</p>
                    <p className="video-views">{item.views}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="view-all">
          <NavLink to="/artists" style={{ textDecoration: "none", color: "white" }}>
            <div className="view-all-icon">+</div>
          </NavLink>
          <p>View All</p>
        </div>
      </div>
    </div>
  );
}

export default MusicVideo;
