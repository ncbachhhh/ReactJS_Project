import React, { useEffect, useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import AlbumsData from "../../Data/AlbumsData";
import "./Header.css";

function Header({ setIsLoading, setCurrentSong, setIsPlaying }) {
  const [loginStatus, setLoginStatus] = useState(
    JSON.parse(localStorage.getItem("loginStatus"))
  );
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const navigate = useNavigate();
  const modalRef = useRef(null); // Tạo ref cho modal

  useEffect(() => {
    const checkLoginStatus = () => {
      setLoginStatus(JSON.parse(localStorage.getItem("loginStatus")));
    };

    checkLoginStatus();
    const handleStorageChange = () => checkLoginStatus();

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchValue.trim() !== "") {
        const filteredSongs = AlbumsData.filter((song) =>
          song.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        setSearchResults(filteredSongs);
        setIsSearchModalOpen(true);
      } else {
        setSearchResults([]);
        setIsSearchModalOpen(false);
      }
    }, 300); // Delay for debounce

    return () => clearTimeout(timeout);
  }, [searchValue]);

  const handleNavigate = (path) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate(path);
    }, 3000);
  };

  const closeModal = () => {
    setIsSearchModalOpen(false);
    setSearchValue("");
  };

  // Đóng modal khi click ra ngoài
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isSearchModalOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isSearchModalOpen]);

  const handleSongSelect = (song) => {
    setCurrentSong(song); // Cập nhật bài hát hiện tại
    setIsPlaying(true); // Bật trạng thái phát nhạc
    closeModal(); // Đóng modal tìm kiếm
  };

  return (
    <header className="header">
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search For Musics, Artists, Albums..."
          className="search-bar"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      {isSearchModalOpen && (
        <div
          className="header-search-modal"
          ref={modalRef} // Tham chiếu modal
        >
          <div className="header-search-modal-header">
            <p>Từ khóa liên quan</p>
            <button className="header-close-modal-btn" onClick={closeModal}>
              &times;
            </button>
          </div>
          <p className="header-search-query">Tìm kiếm "{searchValue}"</p>
          <div className="header-search-results">
            {searchResults.length > 0 ? (
              <ul>
                {searchResults.map((song, index) => (
                  <li key={index} onClick={() => handleSongSelect(song)}>
                    <div className="header-song-item">
                      <img
                        src={song.cover}
                        alt={song.title}
                        className="header-song-cover"
                      />
                      <div className="header-song-details">
                        <h3>{song.title}</h3>
                        <p>{song.artist}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="no-results-message">
                Không có dữ liệu. Hãy thử từ khóa khác!
              </p>
            )}
          </div>
        </div>
      )}

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <NavLink to="/premium">Premium</NavLink>
        {loginStatus ? (
          <div className="avatar">
            <i
              className="fa-solid fa-circle-user"
              style={{ cursor: "pointer" }}
            ></i>
          </div>
        ) : (
          <>
            <button
              className="login-btn"
              onClick={() => handleNavigate("/login")}
            >
              Login
            </button>
            <button
              className="signup-btn"
              onClick={() => handleNavigate("/signup")}
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
