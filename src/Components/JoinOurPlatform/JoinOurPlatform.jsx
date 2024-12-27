import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // import useNavigate để điều hướng
import "./JoinOurPlatform.css";
import LoadingPage from "../LoadingPage/LoadingPage"; // Import LoadingPage component

function JoinOurPlatform() {
  const [isLoading, setIsLoading] = useState(false); // State để quản lý hiển thị LoadingPage
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    setIsLoading(true); // Bắt đầu hiển thị LoadingPage
    setTimeout(() => {
      setIsLoading(false); // Tắt LoadingPage
      navigate("/signup"); // Điều hướng đến trang Sign Up
    }, 3000); // Thời gian chờ 2 giây
  };

  const handleLoginClick = () => {
    setIsLoading(true); // Bắt đầu hiển thị LoadingPage
    setTimeout(() => {
      setIsLoading(false); // Tắt LoadingPage
      navigate("/login"); // Điều hướng đến trang Login
    }, 3000); // Thời gian chờ 2 giây
  };

  if (isLoading) {
    return <LoadingPage />; // Hiển thị LoadingPage nếu isLoading là true
  }

  return (
    <div className="join-platform-container">
      <h2 className="join-title">Join Our Platform</h2>
      <div className="">
        <p className="join-description">
          You can be one of the{" "}
          <span className="highlight-member">members</span> of our platform by
          just adding some necessarily information. If you already have an
          account on our website, you can just hit the{" "}
          <a href="/login" className="highlight-login">
            Login button
          </a>
          .
        </p>
        <div className="button-group">
          <button className="signup-button" onClick={handleSignUpClick}>
            Sign Up
          </button>
          <button className="login-button" onClick={handleLoginClick}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default JoinOurPlatform;
