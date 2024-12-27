import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Hero.css";

// Danh sách các ảnh và nghệ sĩ
const images = [
  {
    src: "./772a8122dc26a4eec94be1beca1eb5ca.jpg",
    artist: "Billie Eilish",
    description: "You can have easy access to every song of Billie Eilish by just clicking on the Listen now button. You can also follow her for supporting her and keeping up with what she does.",
  },
  {
    src: "./ngang-2-1713617550644143367093.webp",
    artist: "Taylor Swift",
    description: "Listen to the chart-topping hits of Taylor Swift, a pop icon whose lyrics captivate millions worldwide. Follow her for the latest updates.",
  },
  {
    src: "./Rose-Bruno-Mars-2C2.jpg",
    artist: "Rosé & Bruno Mars",
    description: "Enjoy the collaboration of K-pop sensation Rosé and pop-funk artist Bruno Mars. Follow them for the latest music releases.",
  },
  {
    src: "./ca-si-justin-bieber-16582480887271375335734.webp",
    artist: "Justin Bieber",
    description: "Experience the latest hits of Justin Bieber, one of the most influential pop icons of this generation. Follow him for more updates.",
  },
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Tự động chuyển ảnh sau mỗi 5 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // 5000ms = 5s

    // Dọn dẹp interval khi component unmount hoặc khi currentIndex thay đổi
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="hero-container">
      {/* Nút điều hướng trái */}
      <div className="nav-btn left" onClick={handlePrev}>
        <i className="fa-solid fa-chevron-left"></i>
      </div>

      {/* Phần chính với ảnh nền mờ và nội dung */}
      <div
        className="hero"
        style={{
          backgroundImage: `url(${images[currentIndex].src})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-text">
          <h2>{images[currentIndex].artist}</h2>
          <p>{images[currentIndex].description}</p>
          <button className="listen-btn">Listen Now</button>
          <button className="follow-btn">Follow</button>
        </div>
      </div>

      {/* Nút điều hướng phải */}
      <div className="nav-btn right" onClick={handleNext}>
      <i className="fa-solid fa-chevron-right"></i>
      </div>

      {/* Chỉ báo trang */}
      <div className="page-indicator">
        {images.map((_, index) => (
          <span key={index} className={`dot ${index === currentIndex ? "active" : ""}`}></span>
        ))}
      </div>
    </section>
  );
}

export default Hero;
