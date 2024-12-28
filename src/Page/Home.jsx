import React from "react";
import Hero from "../Components/Hero/Hero";
import SongList from "../Components/SongList/SongList";
import NewReleaseSongs from "../Components/NewReleaseSongs/NewReleaseSongs";
import TrendingSongs from "../Components/TrendingSongs/TrendingSongs";
import PopularArtists from "../Components/PopularArtists/PopularArtists";
import MusicVideo from "../Components/MusicVideo/MusicVideo";
import TopAlbums from "../Components/TopAlbums/TopAlbums";
import MoodPlaylists from "../Components/MoodPlaylists/MoodPlaylists";
import JoinOurPlatform from "../Components/JoinOurPlatform/JoinOurPlatform";

function Home(props) {
  const {handleSongPlay} = props;
  const specialAccount = {
    username: "admin",
    email: "admin@gmail.com",
    password: "admin",
    role: "admin",
    id: "admin",
    premium: "Pro",
  };

  // check key trong local
  if (localStorage.getItem("list_User") === null) {
    localStorage.setItem("list_User", JSON.stringify([specialAccount]));
  }

  if (localStorage.getItem("loginStatus") === null) {
    localStorage.setItem("loginStatus", false);
  }
  return (
    <div>
      <Hero handleSongPlay={handleSongPlay}/>
      <SongList handleSongPlay={handleSongPlay}/>
      <NewReleaseSongs handleSongPlay={handleSongPlay}/>
      <TrendingSongs handleSongPlay={handleSongPlay}/>
      <MusicVideo />
      <TopAlbums />
      <MoodPlaylists />
      <JoinOurPlatform />
    </div>
  );
}

export default Home;
