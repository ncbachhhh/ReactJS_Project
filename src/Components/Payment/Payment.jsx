import React, { useState } from "react";
import "./Payment.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function Payment() {
  const location = useLocation();
  const [userID, setID] = useState(localStorage.getItem("userID"));
  const [list_User, setListUser] = useState(JSON.parse(localStorage.getItem("list_User")));
  const { price, month, premium, start, end } = location.state;
  const start_date = start.toLocaleDateString("vi-VN");
  const end_date = end.toLocaleDateString("vi-VN");

  const [activeIndex, setActiveIndex] = useState(0);
  const [message, setMessage] = useState();
  const navigate = useNavigate();

  const handlePurchasePremium = (userID) => {
    let new_user = list_User;
    for (let i = 0; i < new_user.length; i++) {
      if (new_user[i].id === userID) {
        new_user[i].premium = premium;
        new_user[i].end_premium = end_date;
      }
    }
    setListUser(new_user);
    localStorage.setItem("list_User", JSON.stringify(new_user));
    setMessage("Payment successful");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="payment-container">
      <div className="payment-select">
        <h2>Select Payment </h2>
        <ul className="payment-list">
          <li className={activeIndex === 0 ? "active_payment" : ""} onClick={() => handleItemClick(0)}>
            <img src="https://res-zalo.zadn.vn/upload/media/2023/10/30/card_credit_1698635301680_676415.svg" style={{ marginRight: "30px" }} />
            <span>International Payment Card</span>
          </li>
          <li className={activeIndex === 1 ? "active_payment" : ""} onClick={() => handleItemClick(1)} style={{ display: "flex" }}>
            <img src="https://res-zalo.zadn.vn/upload/media/2023/11/6/card_viet_qr_1699264190200_68464.svg" style={{ marginRight: "30px" }} />
            <p>
              <p>QR Code</p>
              <p>Scan with Zalo and banking app</p>
            </p>
          </li>
          <li className={activeIndex === 2 ? "active_payment" : ""} onClick={() => handleItemClick(2)}>
            <img src="https://res-zalo.zadn.vn/upload/media/2023/10/27/card_zalopay_1698403817975_647967.svg" style={{ marginRight: "30px" }} />
            <span>ZaloPay Wallet</span>
          </li>
          <li className={activeIndex === 3 ? "active_payment" : ""} onClick={() => handleItemClick(3)}>
            <img src="https://res-zalo.zadn.vn/upload/media/2023/10/30/card_momo_1698634813333_672965.svg" style={{ marginRight: "30px" }} />
            <span>MoMo Wallet</span>
          </li>
        </ul>
      </div>
      <div className="payment-confirm">
        <h2>Transaction details</h2>
        <div className="transaction-details">
          <div className="d-flex align-items-center gap-5 ">
            <div>
              <p>
                Melodies {premium} - {month} month
              </p>
              <p style={{ fontSize: "13px", color: "#9ea1a3" }}>Next payment due date: {end_date}</p>
            </div>
            <div style={{ fontSize: "20px", fontWeight: "500" }}>{price}</div>
          </div>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <p style={{ fontSize: "18px" }}>Total:</p>
            <p style={{ fontSize: "24px", fontWeight: "600" }}>{price}</p>
          </div>
          <p style={{ textAlign: "end", fontSize: "13px" }}>Includes VAT and related fees.</p>
        </div>
        <button onClick={() => handlePurchasePremium(userID)} style={{ width: "100%", padding: "10px", border: "none", borderRadius: "20px", color: "white", backgroundColor: "#0068ff", marginTop: "20px", textAlign: "center" }}>
          Purchase
        </button>
        {message ? <p style={{ textAlign: "center", width: "100%", color: "#7eff7e", marginTop: '15px' }}>{message}</p> : null}
      </div>
    </div>
  );
}
