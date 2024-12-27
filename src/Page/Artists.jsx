import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import Header from "../Components/Header/Header";
import ArtistList from "../Components/ArtistList/ArtistList";

function Artists(props) {
  const { handleSongPlay, setCurrentSong, setIsLoading, setIsPlaying } = props;
  return (
    <div>
      <Sidebar></Sidebar>
      <Header setIsLoading={setIsLoading} setCurrentSong={setCurrentSong} setIsPlaying={setIsPlaying}></Header>
      <ArtistList handleSongPlay={handleSongPlay} setCurrentSong={setCurrentSong}></ArtistList>
    </div>
  );
}

export default Artists;
