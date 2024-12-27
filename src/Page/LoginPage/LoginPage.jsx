import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const [list_User, setListUser] = useState(JSON.parse(localStorage.getItem("list_User")));

  const handleLogin = (e) => {
    e.preventDefault();
    for (let i = 0; i < list_User.length; i++) {
      if (list_User[i].username === username && list_User[i].password === password) {
        setRole(list_User[i].role);
        localStorage.setItem("role", list_User[i].role);
        localStorage.setItem("loginStatus", true);
        navigate("/");
      }
    }
    return setMessage("Incorrect username or password.");
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  const changePassStatus = (e) => {
    e.preventDefault();
    if (showPassword === false) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };
  const directToFacebook = () => {
    navigate("/error");
  };
  const directToGoogle = () => {
    navigate("/error");
  };
  return (
    <div className="login-page">
      <div className="login-container">
        <img src="./logo-no-background 1.png" alt="Melodies Logo" className="logo-image-login" />
        <h2 className="logo-text">Melodies</h2>

        <h3 className="login-title">Login To Continue</h3>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required className="input-field-login" />
            <div style={{ width: "100%", position: "relative" }}>
              <input type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="input-field" />
              <i className="fa-solid fa-eye showPass" style={{ display: showPassword ? "none" : "block" }} onClick={(e) => changePassStatus(e)}></i>
              <i className="fa-solid fa-eye-slash showPass" style={{ display: showPassword ? "block" : "none" }} onClick={(e) => changePassStatus(e)}></i>
            </div>
          </div>

          <span className="forgot-password" onClick={handleForgotPassword}>
            Forgot password?
          </span>

          <button type="submit" className="loginn-button">
            Login
          </button>
        </form>
        <div className="social-login">
          <button className="google-login" onClick={() => directToGoogle()}>
            Google Login
          </button>
          <button className="facebook-login" onClick={() => directToFacebook()}>
            Facebook Login
          </button>
        </div>

        <div className="signupp-section d-flex justify-content-center">
          <NavLink to="/signup" style={{ color: "#ddd" }}>
            Don't Have An Account ?
          </NavLink>
        </div>
        <button className="back-home-button" onClick={() => navigate("/")}>
          Back to Home
        </button>
        <p className="success-message">{message}</p>
      </div>
    </div>
  );
}

export default LoginPage;
