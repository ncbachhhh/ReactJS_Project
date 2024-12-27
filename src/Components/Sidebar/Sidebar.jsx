import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaCompactDisc,
  FaMusic,
  FaClock,
  FaHeart,
  FaList,
  FaPlus,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState(
    JSON.parse(localStorage.getItem("loginStatus"))
  );

  // Hàm đăng xuất
  const handleLogout = () => {
    localStorage.setItem("loginStatus", false);
    localStorage.setItem("role", "");
    window.location.reload();
  };

  // Kiểm tra trạng thái đăng nhập
  const checkLoginStatus = () => {
    const status = JSON.parse(localStorage.getItem("loginStatus"));
    setLoginStatus(status);
  };

  // Hàm chuyển hướng đến trang đăng nhập nếu chưa đăng nhập
  const handleRedirectToLogin = (e) => {
    if (!loginStatus) {
      e.preventDefault(); // Ngừng sự kiện chuyển hướng
      navigate("/login"); // Chuyển hướng tới trang login
    }
  };

  useEffect(() => {
    checkLoginStatus();

    const handleStorageChange = () => {
      checkLoginStatus();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="sidebar">
      <NavLink to="/" className="logo-link">
        <h1 className="logo">Melodies</h1>
      </NavLink>
      <nav className="menu">
        <h2>Menu</h2>
        <ul>
          <li>
            <NavLink to="/" className="link" activeclassname="active">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/discover" className="link" activeclassname="active">
              <FaCompactDisc /> Discover
            </NavLink>
          </li>
          <li>
            <NavLink to="/albums" className="link" activeclassname="active">
              <FaMusic /> Albums
            </NavLink>
          </li>
          <li>
            <NavLink to="/artists" className="link" activeclassname="active">
              <FaMusic /> Artists
            </NavLink>
          </li>
        </ul>
        <h2>Library</h2>
        <ul>
          <li>
            <NavLink
              to="/recentlyadded"
              className="link"
              activeclassname="active"
            >
              <FaClock /> Recently Added
            </NavLink>
          </li>
          <li>
            <NavLink to="/mostplayed" className="link" activeclassname="active">
              <FaClock /> Most played
            </NavLink>
          </li>
        </ul>
        <h2>Playlist and favorite</h2>
        <ul>
          <li>
            <NavLink
              to="/favorites"
              className="link"
              activeclassname="active"
              onClick={handleRedirectToLogin} // Kiểm tra khi nhấn vào "Your favorites"
            >
              <FaHeart /> Your favorites
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/playlist"
              className="link"
              activeclassname="active"
              onClick={handleRedirectToLogin} // Kiểm tra khi nhấn vào "Your playlist"
            >
              <FaList /> Your playlist
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-playlist"
              className="link"
              activeclassname="active"
              onClick={handleRedirectToLogin} // Kiểm tra khi nhấn vào "Add playlist"
            >
              <FaPlus /> Add playlist
            </NavLink>
          </li>
        </ul>
        <h2>General</h2>
        <ul>
          <li>
            <NavLink to="/settings" className="link" activeclassname="active">
              <FaCog /> Settings
            </NavLink>
          </li>
          {loginStatus ? (
            <li>
              <button className="link logout" onClick={handleLogout}>
                <FaSignOutAlt /> Logout
              </button>
            </li>
          ) : (
            <li>
              <NavLink to="/login" className="link">
                <FaSignOutAlt /> Login
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
