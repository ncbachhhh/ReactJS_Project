import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPhone } from "react-icons/fa";
import "./About.css";

function About({ showSeparator }) {
  // Thêm props showSeparator
  return (
    <div>
      {showSeparator && <div className="separator"></div>}
      <div className="about-container">
        <div className="about-section">
          <h2 className="about-title">About</h2>
          <p className="about-description">
            Melodies is a website that has been created for over{" "}
            <span className="highlight">5 year's</span> now and it is one of the
            most famous music player website's in the world. In this website you
            can listen and download songs for free. Also if you want no
            limitation you can buy our{" "}
            <span className="highlight-premium">premium pass's</span>.
          </p>
        </div>
        <div className="links-section">
          <div className="link-group">
            <h3 className="link-title">Melodi</h3>
            <ul className="link-list">
              <li>Songs</li>
              <li>Radio</li>
              <li>Podcast</li>
            </ul>
          </div>
          <div className="link-group">
            <h3 className="link-title">Access</h3>
            <ul className="link-list">
              <li>Explor</li>
              <li>Artists</li>
              <li>Playlists</li>
              <li>Albums</li>
              <li>Trending</li>
            </ul>
          </div>
          <div className="link-group">
            <h3 className="link-title">Contact</h3>
            <ul className="link-list">
              <li>About</li>
              <li>Policy</li>
              <li>Social Media</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
        <div className="social-section">
          <h2 className="brand-title">Melodies</h2>
          <div className="social-icons">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaPhone className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
