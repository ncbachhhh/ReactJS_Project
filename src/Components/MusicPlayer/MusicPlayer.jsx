import React, { useRef, useState, useEffect } from "react";
import "./MusicPlayer.css";
import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaRandom, FaRedo, FaVolumeUp } from "react-icons/fa";

function MusicPlayer({ song, isPlaying, onPlayPause, songsList = [], setCurrentSong }) {
  const audioRef = useRef(null);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [volume, setVolume] = useState(100);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0); // Time when paused
  const [duration, setDuration] = useState(0);

  // Khi bài hát thay đổi hoặc trạng thái play/pause thay đổi
  useEffect(() => {
    if (audioRef.current && song) {
      audioRef.current.src = song?.mp3 || "";
      audioRef.current.load();
      audioRef.current.onloadedmetadata = () => {
        setDuration(audioRef.current.duration);
      };

      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = currentTime;
      }
    }
  }, [song]); // Chỉ tải lại bài hát khi song thay đổi, không làm lại khi isPlaying thay đổi

  // Cập nhật thời gian hiện tại
  useEffect(() => {
    if (audioRef.current) {
      const updateTime = () => setCurrentTime(audioRef.current.currentTime);
      audioRef.current.addEventListener("timeupdate", updateTime);

      // Cleanup function để gỡ bỏ sự kiện
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener("timeupdate", updateTime);
        }
      };
    }
  }, []);

  // Khi bài hát kết thúc
  useEffect(() => {
    if (audioRef.current) {
      const handleSongEnd = () => {
        playNext();
      };

      audioRef.current.addEventListener("ended", handleSongEnd);

      // Cleanup function để gỡ bỏ sự kiện
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener("ended", handleSongEnd);
        }
      };
    }
  }, [currentIndex, songsList]);

  // Logic play/pause
  const togglePlayPause = () => {
    if (isPlaying) {
      setCurrentTime(audioRef.current.currentTime);
      audioRef.current.pause();
    } else {
      audioRef.current.currentTime = currentTime;
      audioRef.current.play();
    }
    onPlayPause(!isPlaying);
  };

  // Định dạng thời gian
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleTimelineChange = (e) => {
    const newTime = e.target.value;
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  // Phát bài tiếp theo
  const playNext = () => {
    if (!songsList || songsList.length === 0) return;

    let nextIndex = isShuffle ? Math.floor(Math.random() * songsList.length) : (currentIndex + 1) % songsList.length;

    setCurrentIndex(nextIndex);
    setCurrentSong(songsList[nextIndex]);
  };

  // Phát bài trước đó
  const playPrev = () => {
    if (!songsList || songsList.length === 0) return;

    let prevIndex = currentIndex === 0 ? songsList.length - 1 : currentIndex - 1;

    setCurrentIndex(prevIndex);
    setCurrentSong(songsList[prevIndex]);
  };

  // Bật/tắt lặp lại bài hát
  const toggleRepeat = () => {
    setIsRepeat(!isRepeat);
    if (audioRef.current) {
      audioRef.current.loop = !isRepeat;
    }
  };

  // Bật/tắt phát ngẫu nhiên
  const toggleShuffle = () => {
    setIsShuffle(!isShuffle);
  };

  // Điều chỉnh âm lượng
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };
  // console.log(song);
  const downloadMusic = (song) => {
    const link = document.createElement("a"); // Tạo thẻ <a>
    link.href = song.mp3; // Gắn link tới file MP3
    link.download = `${song.title}.mp3`; // Tên file khi tải về
    link.click(); // Tự động click để tải
  }

  return (
    <div className="music-player">
      {/* Thông tin bài hát */}
      <div className="music-info">
        <img src={song?.cover || "https://via.placeholder.com/50"} alt={song?.title || "Unknown"} className="music-cover" />
        <div className="song-details">
          <p className="song-title">{song?.title || "Unknown Title"}</p>
          <p className="song-artist">{song?.artist || "Unknown Artist"}</p>
        </div>
      </div>

      {/* Nút điều khiển */}
      <div className="player-controls">
        <FaRandom className={`control-button ${isShuffle ? "active" : ""}`} onClick={toggleShuffle} />
        <FaStepBackward className="control-button" onClick={playPrev} />
        {isPlaying ? <FaPause className="control-button pause-button" onClick={togglePlayPause} /> : <FaPlay className="control-button play-button" onClick={togglePlayPause} />}
        <FaStepForward className="control-button" onClick={playNext} />
        <FaRedo className={`control-button ${isRepeat ? "active" : ""}`} onClick={toggleRepeat} />
        <i className=" control-button fa-solid fa-download" onClick={ () => downloadMusic(song)}></i>
      </div>

      {/* Thanh timeline */}
      <div className="timeline-container">
        <span className="time">{formatTime(currentTime)}</span>
        <input type="range" className="timeline" min="0" max={duration} value={currentTime} onChange={handleTimelineChange} />
        <span className="time">{formatTime(duration)}</span>
      </div>

      {/* Điều chỉnh âm lượng */}
      <div className="volume-control">
        <FaVolumeUp />
        <input type="range" className="volume-slider" min="0" max="100" value={volume} onChange={handleVolumeChange} />
      </div>
      <audio ref={audioRef}></audio>
    </div>
  );
}

export default MusicPlayer;
