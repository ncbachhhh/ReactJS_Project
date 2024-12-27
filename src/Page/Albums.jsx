import React from "react";
import AlbumInfo from "../Components/AlbumInfo/AlbumInfo";
import Sidebar from "../Components/Sidebar/Sidebar";
import AlbumsList from "../Components/AlbumsList/AlbumsList";
import Header from "../Components/Header/Header";
import { Routes, Route } from "react-router-dom";

function Albums(props) {
  const {handleSongPlay, setCurrentSong, setIsLoading, setIsPlaying} = props;
  return (
    <div>
      <Sidebar></Sidebar>
      <Header setIsLoading={setIsLoading} setCurrentSong={setCurrentSong} setIsPlaying={setIsPlaying}></Header>
      <AlbumsList handleSongPlay={handleSongPlay} setCurrentSong={setCurrentSong}></AlbumsList>
    </div>
  );
}

export default Albums;
