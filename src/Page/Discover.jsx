import React from "react";
import MusicGenres from "../Components/MusicGenres/MusicGenres";
import MoodPlaylists from "../Components/MoodPlaylists/MoodPlaylists";
import PopularArtists from "../Components/PopularArtists/PopularArtists";
import MusicVideo from "../Components/MusicVideo/MusicVideo";
import NewReleaseSongs from "../Components/NewReleaseSongs/NewReleaseSongs";
import NewAlbums from "../Components/NewAlbums/NewAlbums";

function Discover() {
  return (
    <div>
      <MusicGenres />
      <MoodPlaylists />
      <PopularArtists />
      <MusicVideo />
      <NewReleaseSongs />
      <NewAlbums />
    </div>
  );
}

export default Discover;
