import React, { useState } from "react";
import "./Premium.css";
import { NavLink } from "react-router-dom";

export default function Premium() {
  const [loginCheck, setLoginCheck] = useState(JSON.parse(localStorage.getItem("loginStatus")));
  const [displayModal, setDisplayModal] = useState(false);

  const purchasePremium = () => {
    if (loginCheck === false) {
      setDisplayModal(true);
    }
  };
  console.log(loginCheck);
  
  
  return (
    <div className="premiumContainer">
      <div className="header-premium">
        <h2>Unlimited Music</h2>
        <h5 style={{ color: "rgba(254, 255, 255, 0.6)" }}>Upgrade your account to experience premium features and content.</h5>
      </div>
      <div className="body-premium">
        <div className="content-premium">
          <div className="plus-premium">
            <div className="d-flex flex-column">
              <div className="d-flex align-items-start">
                <span>Melodies</span>
                <span style={{ marginLeft: "10px" }}>PLUS</span>
              </div>
              <p>Listen to music in the highest quality, ad-free.</p>
            </div>
            <p className="price-premium">From 13,000 VND/month</p>
            <button className="regis-btn" style={{ backgroundColor: "#9457ff" }} onClick={purchasePremium}>
              <NavLink to="/premium/purchase_plus" style={{ color: "white", textDecoration: "none" }}>
                REGISTER
              </NavLink>
            </button>
            <hr />
            <div>
              <p className="exclusive-header">EXCLUSIVE:</p>
              <ul className="exclusive-body-1">
                <li>
                  <i className="fa-solid fa-check"></i>
                  <p>Listen to music ad-free</p>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <p>Listen and download Lossless music</p>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <p>Unlimited music storage</p>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <p>Advanced music listening features</p>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <p>Expand upload capabilities</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="pro-premium">
            <div className="d-flex flex-column ">
              <div className="d-flex align-items-start">
                <span>Melodies</span>
                <span style={{ marginLeft: "10px" }}>PRO</span>
              </div>
              <p>Listen to music in the highest quality, ad-free.</p>
            </div>
            <p className="price-premium">From 49,000 VND/month</p>
            <button className="regis-btn" style={{ backgroundColor: "#dca519" }} onClick={purchasePremium}>
              <NavLink to="/premium/purchase_pro" style={{ color: "white", textDecoration: "none" }}>
                REGISTER
              </NavLink>
            </button>
            <hr />
            <div>
              <p className="exclusive-header">EXCLUSIVE:</p>
              <ul className="exclusive-body-2">
                <li>
                  <i className="fa-solid fa-check"></i>
                  <p>Premium music storage</p>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <p>Listen to music ad-free</p>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <p>Listen and download Lossless music</p>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <p>Unlimited music storage</p>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <p>Advanced music listening features</p>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <p>Expand upload capabilities</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-purchase-premium" style={{ display: displayModal ? "block" : "none" }}>
        {loginCheck ? (
          <div className="login-modal"></div>
        ) : (
          <div className="not-login-modal">
            <img src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/login.png" style={{ width: "40vw" }} alt="" />
            <h2 style={{ color: "black" }}>Login to continue</h2>
            <NavLink to="/login" style={{ color: "white", backgroundColor: "#0365fc", textDecoration: "none", fontSize: "30px", padding: "10px 100px 5px 100px", borderRadius: "30px" }}>
              Login here
            </NavLink>
            <i className="fa-solid fa-xmark" style={{ color: "black", position: "absolute", right: "20px", cursor: "pointer" }} onClick={() => setDisplayModal(false)}></i>
          </div>
        )}
      </div>
    </div>
  );
}
