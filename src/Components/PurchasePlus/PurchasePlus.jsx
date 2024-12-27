import React, { useState } from "react";
import "./PurchasePlus.css";
import { NavLink } from "react-router-dom";

export default function PurchasePlus() {
  let now = new Date();
  const [expiredDate, setDate] = useState(new Date(now));

  const [activeIndex, setActiveIndex] = useState(null);
  const [monthPremium, setMonth] = useState(0);
  const [price, setPrice] = useState();

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };
  const data = { price: price, month: monthPremium, premium: "Plus", start: now, end: expiredDate };
  return (
    <div className="purchase-container">
      <div>
        <h2>Select Upgrade</h2>
        <ul className="purchase-list">
          <li
            className={activeIndex === 0 ? "active_purchase_plus" : ""}
            onClick={() => {
              handleItemClick(0);
              setMonth(12);
              setPrice("159.000đ");
              expiredDate.setFullYear(now.getFullYear());
              expiredDate.setMonth(now.getMonth() + 12);
              setDate(expiredDate);
            }}
          >
            <p>12 tháng</p>
            <p>159.000đ</p>
            <p>Chỉ 13.000đ/tháng</p>
          </li>
          <li
            className={activeIndex === 1 ? "active_purchase_plus" : ""}
            onClick={() => {
              handleItemClick(1);
              setMonth(6);
              setPrice("89.000đ");
              expiredDate.setFullYear(now.getFullYear());
              expiredDate.setMonth(now.getMonth() + 6);
              setDate(expiredDate);
            }}
          >
            <p>6 tháng</p>
            <p>89.000đ</p>
            <p>Chỉ 15.000đ/tháng</p>
          </li>
          <li
            className={activeIndex === 2 ? "active_purchase_plus" : ""}
            onClick={() => {
              handleItemClick(2);
              setMonth(1);
              setPrice("19.000đ");
              expiredDate.setFullYear(now.getFullYear());
              expiredDate.setMonth(now.getMonth() + 1);
              setDate(expiredDate);
            }}
          >
            <p>1 tháng</p>
            <p>19.000đ</p>
          </li>
          <li
            className={activeIndex === 3 ? "active_purchase_plus" : ""}
            onClick={() => {
              handleItemClick(3);
              setMonth(1);
              setPrice("49.000đ");
              expiredDate.setFullYear(now.getFullYear());
              expiredDate.setMonth(now.getMonth() + 1);
              setDate(expiredDate);
            }}
          >
            <p>1 tháng Family</p>
            <p>49.000đ</p>
            <p>Dùng chung cho 6 thành viên</p>
          </li>
        </ul>
      </div>
      <div className="purchase-area">
        <div>
          <p>Time upgrade: {now.toLocaleDateString("vi-VN")}</p>
          <p>Expired: {expiredDate.toLocaleDateString("vi-VN")}</p>
          <hr />
          <span style={{ color: "#9457ff", fontWeight: "600", fontSize: "28px", textAlign: "center", width: "200px", display: "inline-block" }}>{price}</span>
          <button className="register-btn-plus">
            {price ? (
              <NavLink to="/payment" state={data} style={{ color: "white", textDecoration: "none" }}>
                REGISTER
              </NavLink>
            ) : (
              <p onClick={() => alert("You need to select a package before proceeding with payment.")}>REGISTER</p>
            )}
          </button>
        </div>
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
    </div>
  );
}
