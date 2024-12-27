import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate để điều hướng
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Khởi tạo navigate để điều hướng

  const checkPassword = () => {
    const uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", '"', "'", "<", ">", ",", ".", "?", "/", "\\", "|", "~", "`"];

    let checkUpperCase = false;
    let checkNum = false;
    let checkSpecialChars = false;

    for (let i = 0; i < newPassword.length; i++) {
      if (uppercaseLetters.includes(newPassword[i])) {
        checkUpperCase = true;
      }
      if (num.includes(newPassword[i])) {
        checkNum = true;
      }
      if (specialChars.includes(newPassword[i])) {
        checkSpecialChars = true;
      }
    }
    if (!checkUpperCase && !checkNum && !checkSpecialChars) {
      return setMessage("Password must be include an uppercase letter, a number, and a special character.");
    }
  };

  const specialAccount = {
    username: "admin",
    email: "admin@gmail.com",
    password: "admin",
  };
  // check key trong local
  if (localStorage.getItem("list_User") === null) {
    localStorage.setItem("list_User", JSON.stringify([specialAccount]));
  }
  const [list_User, setListUser] = useState(JSON.parse(localStorage.getItem("list_User")));

  const handleResetPassword = (e) => {
    e.preventDefault();
    checkPassword();
    for (let i = 0; i < list_User.length; i++) {
      if (email === list_User[i].email) {
        list_User[i].password = newPassword;
        setListUser([...list_User]);
        localStorage.setItem("list_User", JSON.stringify([...list_User]));
        setMessage("");
        navigate("/login");
      }
    }
  };

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">
        <h2>Reset Password</h2>
        <form onSubmit={handleResetPassword}>
          <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required className="input-field" />
          <input type="password" placeholder="Enter new password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required className="input-field" />
          <button type="submit" className="reset-button">
            Reset Password
          </button>
        </form>
        <button
          style={{
            marginTop: "20px",
            padding: "10px 40px",
            backgroundColor: "#ee10b0",
            color: "white",
            border: "none",
            borderRadius: "10px",
          }}
          onClick={() => navigate(-1)}>
          Back
        </button>
        <p className="reset-message">{message}</p>
      </div>
    </div>
  );
}

export default ForgotPassword;
