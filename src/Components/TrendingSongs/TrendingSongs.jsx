import React, { useState } from "react";
import { FaHeart } from "react-icons/fa"; // Sử dụng biểu tượng trái tim từ react-icons
import "./TrendingSongs.css"; // Đảm bảo rằng đã import CSS file
import SongsData from "../../Data/SongsData";
import AlbumsData from "../../Data/AlbumsData";

function TrendingSongs(props) {
  const { handleSongPlay } = props;
  // State để kiểm tra trạng thái hiển thị tất cả bài hát hay không
  const [showAll, setShowAll] = useState(false);

  // Hàm xử lý khi nhấn nút "View All"
  const handleViewAllClick = () => {
    setShowAll((prevState) => !prevState); // Toggle trạng thái khi nhấn vào View All
  };

  // Slicing dữ liệu để hiển thị 10 bài đầu tiên và ẩn các bài hát còn lại
  const displayedSongs = showAll ? SongsData : SongsData.slice(0, 10);

  return (
    <div className="trending-songs-container">
      <h2 className="section-title">
        Trending <span className="highlight">Songs</span>
      </h2>
      <div className="trending-table-container">
        <table className="trending-songs-table">
          <thead>
            <tr>
              <td>Rank</td>
              <td>Song</td>
              <td>Release Date</td>
              <td className="text-center">Album</td>
              <td className="text-center">Time</td>
            </tr>
          </thead>
          <tbody>
            {displayedSongs.map((song, index) => (
              <tr
                key={index}
                onClick={() => {
                  console.log(AlbumsData.filter((item) => item.title === song.title));
                  handleSongPlay(AlbumsData.filter((item) => item.title === song.title)[0]);
                }}
              >
                <td className="rounded-left">{song.rank}</td>
                <td>
                  <div className="song-info-trending">
                    <img src={song.cover} alt={song.title} className="trending-song-cover" />
                    <div>
                      <strong className="song-title">{song.title}</strong>
                      <p className="song-artist">{song.artist}</p>
                    </div>
                  </div>
                </td>
                <td>{song.releaseDate}</td>
                <td className="text-center">{song.album}</td>
                <td className="rounded-right">
                  <div className="song-time d-flex gap-2 justify-content-center">
                    <i className="fa-regular fa-heart heart-icon"></i>
                    {song.time}
                    <i className="fa-solid fa-ellipsis"></i>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Hiển thị nút View All nếu bài hát không phải là đầy đủ */}
      <button className="view-all-btn" onClick={handleViewAllClick}>
        {showAll ? "- View Less" : "+ View All"}
      </button>
    </div>
  );
}

export default TrendingSongs;
