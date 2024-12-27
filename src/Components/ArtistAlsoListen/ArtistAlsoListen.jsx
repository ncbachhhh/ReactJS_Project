import React from "react";
import './ArtistAlsoListen.css'
import { useNavigate } from "react-router-dom";

export default function ArtistAlsoListen() {
  const artistAlsoListen = [
    {
      name: "50 Cent",
      image: "./AlsoListenTo (1).png",
    },
    {
      name: "Snoop Dog",
      image: "./AlsoListenTo (2).png",
    },
    {
      name: "Tupac",
      image: "./AlsoListenTo (3).png",
    },
    {
      name: "Jay-Z",
      image: "./AlsoListenTo (4).png",
    },
  ];
  return (
    <div style={{marginTop: '20px' }}>
      <h2 className="section-title">
        Eminem Fans <span className="highlight">Also Listen To</span>
      </h2>
      <div className="also-listen-to-container" style={{display: 'flex', alignItems: 'center'}}>
        {artistAlsoListen.map((item, index) => (
          <div className="also-listen-to-item" key={index} >
            <img src={item.image} alt="" style={{ borderRadius: "50%" }} />
            <p>{item.name}</p>
          </div>
        ))}
        <div className="view-all">
          <div className="view-all-icon">+</div>
          <p>View All</p>
        </div>
      </div>
    </div>
  );
}
