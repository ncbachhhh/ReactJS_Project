import React from "react";
import NewReleaseSongs from "../Components/NewReleaseSongs/NewReleaseSongs";
import TrendingSongs from "../Components/TrendingSongs/TrendingSongs";
import PopularArtists from "../Components/PopularArtists/PopularArtists";
import MusicVideo from "../Components/MusicVideo/MusicVideo";
import TopAlbums from "../Components/TopAlbums/TopAlbums";
import MoodPlaylists from "../Components/MoodPlaylists/MoodPlaylists";
import JoinOurPlatform from "../Components/JoinOurPlatform/JoinOurPlatform";

function RecentlyAdded() {
  return (
    <div>
      <NewReleaseSongs />
      <TopAlbums />
      <TrendingSongs />
      <PopularArtists />
      <MusicVideo />
      <MoodPlaylists />
      <JoinOurPlatform />
    </div>
  );
}

export default RecentlyAdded;
