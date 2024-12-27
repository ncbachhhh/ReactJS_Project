import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setReShowPassword] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [role, setRole] = useState("listener");
  const [checkRole, setCheckRole] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const [list_User, setListUser] = useState(JSON.parse(localStorage.getItem("list_User")));

  const handleCheckBox = (e) => {
    setCheckRole(e.target.checked);
    if (e.target.checked) {
      setRole("artist");
    } else {
      setRole("listener");
    }
  };

  const changePassStatus = (e) => {
    e.preventDefault();
    if (showPassword === false) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };
  const changeRePassStatus = (e) => {
    e.preventDefault();
    if (showRePassword === false) {
      setReShowPassword(true);
    } else {
      setReShowPassword(false);
    }
  };

  const checkRePass = () => {
    if (password !== repassword) {
      setPassword("");
      setRePassword("");
      return setMessage("Password and confirm password fields must be the same.");
    }
  };

  const checkUsername = () => {
    console.log(username.length);

    if (username.length < 8) {
      setMessage("Username must be at least 8 characters");
    }
  };

  const checkPassword = () => {
    const uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", '"', "'", "<", ">", ",", ".", "?", "/", "\\", "|", "~", "`"];

    let checkUpperCase = false;
    let checkNum = false;
    let checkSpecialChars = false;

    for (let i = 0; i < password.length; i++) {
      if (uppercaseLetters.includes(password[i])) {
        checkUpperCase = true;
      }
      if (num.includes(password[i])) {
        checkNum = true;
      }
      if (specialChars.includes(password[i])) {
        checkSpecialChars = true;
      }
    }
    if (!checkUpperCase && !checkNum && !checkSpecialChars) {
      return setMessage("Password must be include an uppercase letter, a number, and a special character.");
    }
  };

  const checkSignUp = (e) => {
    e.preventDefault();
    setMessage("");
    checkRePass();
    checkUsername();
    checkPassword();
    for (let i = 0; i < list_User.length; i++) {
      if (username === list_User[i].username) {
        return setMessage("Account already exists. Please try another username.");
      }
      if (email === list_User[i].email) {
        return setMessage("Account already exists. Please try another email.");
      }
    }
    let newUser = {
      playlist: [],
      username: username,
      email: email,
      password: password,
      role: role,
      id: new Date(),
    };
    setListUser([...list_User, newUser]);
    localStorage.setItem("list_User", JSON.stringify([...list_User, newUser]));
    navigate("/");
  };

  return (
    <div className="sign-up-page">
      <div className="sign-up-container">
        <img src="./logo-no-background 1.png" alt="Melodies Logo" className="logo-image-login" />
        <h2 className="logo-text">Melodies</h2>
        <h3 className="sign-up-title">Sign In To Continue</h3>
        <form onSubmit={(e) => checkSignUp(e)}>
          <div className="input-group">
            <input type="text" placeholder="Username" className="input-field" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className="input-group">
            <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" required />
          </div>
          <div style={{ width: "100%", position: "relative" }}>
            <input type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="input-field" />
            <i className="fa-solid fa-eye showPass" style={{ display: showPassword ? "none" : "block" }} onClick={(e) => changePassStatus(e)}></i>
            <i className="fa-solid fa-eye-slash showPass" style={{ display: showPassword ? "block" : "none" }} onClick={(e) => changePassStatus(e)}></i>
          </div>
          <div style={{ width: "100%", position: "relative" }}>
            <input type={showRePassword ? "text" : "password"} placeholder="Confirm Password" value={repassword} onChange={(e) => setRePassword(e.target.value)} required className="input-field" />
            <i className="fa-solid fa-eye showPass" style={{ display: showRePassword ? "none" : "block" }} onClick={(e) => changeRePassStatus(e)}></i>
            <i className="fa-solid fa-eye-slash showPass" style={{ display: showRePassword ? "block" : "none" }} onClick={(e) => changeRePassStatus(e)}></i>
          </div>
          <div className="d-flex gap-2 align-items-center">
            <input type="checkbox" name="" id="" onChange={handleCheckBox} />
            <span>Artist</span>
          </div>
          <button type="submit" className="create-account-button">
            Create an account
          </button>
        </form>
        <div className="signupp-section d-flex justify-content-center" style={{ marginTop: "20px" }}>
          <NavLink to="/login" style={{ color: "#ddd" }}>
            Already Have An Account ?
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

export default SignUp;
