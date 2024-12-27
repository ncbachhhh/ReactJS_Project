import React, { useState } from "react";
import "./PurchasePro.css";
import { NavLink } from "react-router-dom";

export default function PurchasePro() {
  let now = new Date();
  const [expiredDate, setDate] = useState(new Date(now));

  const [activeIndex, setActiveIndex] = useState(null);
  const [monthPremium, setMonth] = useState(0);
  const [price, setPrice] = useState();

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  //
  const data = { price: price, month: monthPremium, premium: "Pro", start: now, end: expiredDate };
  return (
    <div className="purchase-container">
      <div>
        <h2>Select Upgrade</h2>
        <ul className="purchase-list">
          <li
            className={activeIndex === 0 ? "active_purchase" : ""}
            onClick={() => {
              handleItemClick(0);
              setMonth(12);
              setPrice("499.000đ");
              expiredDate.setFullYear(now.getFullYear());
              expiredDate.setMonth(now.getMonth() + 12);
              setDate(expiredDate);
            }}
          >
            <p>12 tháng</p>
            <p>499.000đ</p>
            <p>Chỉ 41.000đ/tháng</p>
          </li>
          <li
            className={activeIndex === 1 ? "active_purchase" : ""}
            onClick={() => {
              handleItemClick(1);
              setMonth(6);
              setPrice("279.000đ");
              expiredDate.setFullYear(now.getFullYear());
              expiredDate.setMonth(now.getMonth() + 6);
              setDate(expiredDate);
            }}
          >
            <p>6 tháng</p>
            <p>279.000đ</p>
            <p>Chỉ 41.000đ/tháng</p>
          </li>
          <li
            className={activeIndex === 2 ? "active_purchase" : ""}
            onClick={() => {
              handleItemClick(2);
              setMonth(1);
              setPrice("49.000đ");
              expiredDate.setFullYear(now.getFullYear());
              expiredDate.setMonth(now.getMonth() + 1);
              setDate(expiredDate);
            }}
          >
            <p>1 tháng</p>
            <p>49.000đ</p>
          </li>
          <li
            className={activeIndex === 3 ? "active_purchase" : ""}
            onClick={() => {
              handleItemClick(3);
              setMonth(1);
              setPrice("89.000đ");
              expiredDate.setFullYear(now.getFullYear());
              expiredDate.setMonth(now.getMonth() + 1);
              setDate(expiredDate);
            }}
          >
            <p>1 tháng Family</p>
            <p>89.000đ</p>
            <p>Dùng chung cho 6 thành viên</p>
          </li>
        </ul>
      </div>
      <div className="purchase-area">
        <div>
          <p>Time upgrade: {now.toLocaleDateString("vi-VN")}</p>
          <p>Expired: {expiredDate.toLocaleDateString("vi-VN")}</p>
          <hr />
          <span style={{ color: "#dca519", fontWeight: "600", fontSize: "28px", textAlign: "center", width: "200px", display: "inline-block" }}>{price}</span>
          <button>
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
  );
}
