import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import About from "../About/About";
import { Outlet } from "react-router-dom";

export default function Layout({ setIsLoading, setCurrentSong, setIsPlaying }) {
  return (
    <div>
      <Sidebar />
      <Header setIsLoading={setIsLoading} setCurrentSong={setCurrentSong} setIsPlaying={setIsPlaying} />
      <Outlet />
      <About />
    </div>
  );
}
