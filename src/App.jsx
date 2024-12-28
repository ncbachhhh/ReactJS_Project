import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Page/Home";
import Discover from "./Page/Discover";
import Albums from "./Page/Albums";
import Artists from "./Page/Artists";
import RecentlyAdded from "./Page/RecentlyAdded";
import MostPlayed from "./Page/MostPlayed";
import Login from "./Page/LoginPage/LoginPage";
import SignUp from "./Page/SignUp/SignUp";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Setting from "./Components/Setting/Setting";
import MostPlayedHit from "./Components/MostPlayedHit/MostPlayedHit";
import MusicPlayer from "./Components/MusicPlayer/MusicPlayer";
import SongsData from "./Data/SongsData";
import AlbumsData from "./Data/AlbumsData";
import LoadingPage from "./Components/LoadingPage/LoadingPage";
import JoinOurPlatform from "./Components/JoinOurPlatform/JoinOurPlatform";
import Premium from "./Components/Premium/Premium";
import PurchasePro from "./Components/PurchasePro/PurchasePro";
import PurchasePlus from "./Components/PurchasePlus/PurchasePlus";
import Payment from "./Components/Payment/Payment";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false); // Quản lý trạng thái loading
  const [currentSong, setCurrentSong] = useState(AlbumsData[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const location = useLocation(); // Hook để lấy đường dẫn hiện tại

  const handleSongPlay = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    const handleMouseDown = (event) => {
      const target = event.target;
      // Kiểm tra nếu phần tử không phải là input hoặc textarea
      if (target.tagName !== "INPUT" && target.tagName !== "TEXTAREA" && !target.isContentEditable) {
        event.preventDefault(); // Ngăn tập trung vào phần tử
      }
    };

    // Gắn sự kiện mousedown vào document
    document.addEventListener("mousedown", handleMouseDown);

    // Dọn dẹp sự kiện khi component bị unmount
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  // Nếu đang loading, chỉ hiển thị LoadingPage
  if (isLoading) {
    return <LoadingPage />;
  }

  // Kiểm tra đường dẫn hiện tại
  const isMusicPlayerHidden = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="app">
      <main className="content">
        <Routes>
          <Route path="/" element={<Layout setIsLoading={setIsLoading} setCurrentSong={setCurrentSong} setIsPlaying={setIsPlaying} />}>
            <Route index element={<Home handleSongPlay={handleSongPlay}/>} />
            <Route path="discover" element={<Discover />} />
            <Route path="mostPlayed" element={<MostPlayedHit onSongPlay={handleSongPlay} />} />
            <Route path="recentlyAdded" element={<RecentlyAdded />} />
            <Route path="settings" element={<Setting />} />
            <Route path="/premium" element={<Premium />}></Route>
            <Route path="/premium/purchase_plus" element={<PurchasePlus />}></Route>
            <Route path="/premium/purchase_pro" element={<PurchasePro />}></Route>
            <Route path="/payment" element={<Payment />}></Route>
          </Route>
          <Route path="/albums" element={<Albums setIsLoading={setIsLoading} setIsPlaying={setIsPlaying} handleSongPlay={handleSongPlay} setCurrentSong={setCurrentSong} />} />
          <Route path="/artists" element={<Artists setIsLoading={setIsLoading} setIsPlaying={setIsPlaying} handleSongPlay={handleSongPlay} setCurrentSong={setCurrentSong} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/join" element={<JoinOurPlatform setIsLoading={setIsLoading} isLoading={isLoading} />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>

      {/* Music Player */}
      {!isMusicPlayerHidden && <MusicPlayer song={currentSong} isPlaying={isPlaying} onPlayPause={togglePlayPause} songsList={AlbumsData} setCurrentSong={setCurrentSong} />}
    </div>
  );
}

export default App;
