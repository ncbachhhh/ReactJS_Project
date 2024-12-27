import React, { useState } from "react";
import "./AlbumsList.css";
import AlbumInfo from "../AlbumInfo/AlbumInfo";
// import albums from "../../Data/AlbumsData.js"; // Import dữ liệu từ file data.js

const albums = [
  {
    title: "I Got Heaven",
    artist: "Mannequin",
    cover: "./Rectangle 17 (10).png",
    songs: [
      {
        rank: "1",
        title: "Gift Horse",
        artist: "Mannequin",
        played: "10,576,384",
        album: "I Got Heaven",
        time: "4:09",
        cover: "https://i.scdn.co/image/ab67616d00001e02ff86c63665f087dd2989b0d7",
      },
      {
        rank: "2",
        title: "POP POP POP",
        artist: "Mannequin",
        played: "7,000,000",
        album: "I Got Heaven",
        time: "4:16",
        cover: "https://i.scdn.co/image/ab67616d00001e02838fbd7f0f3d02d2235cd121",
      },
      {
        rank: "3",
        title: "Dancer",
        artist: "Mannequin",
        played: "19,000,000",
        album: "I Got Heaven",
        time: "3:09",
        cover: "https://i.scdn.co/image/ab67616d00001e02838fbd7f0f3d02d2235cd121",
      },
      {
        rank: "4",
        title: "OK? OK? OK?",
        artist: "Mannequin",
        played: "1,576,384",
        album: "I Got Heaven",
        time: "2:11",
        cover: "https://i.scdn.co/image/ab67616d00001e02ff86c63665f087dd2989b0d7",
      },
      {
        rank: "5",
        title: "Split Me Open",
        artist: "Mannequin",
        played: "876,384",
        album: "I Got Heaven",
        time: "4:01",
        cover: "https://i.scdn.co/image/ab67616d00001e02ff86c63665f087dd2989b0d7",
      },
    ],
  },
  {
    title: "Saviors",
    artist: "Green Day",
    cover: "./Rectangle 17 (11).png",
    songs: [
      {
        rank: "1",
        title: "The American Dream Is Killing Me",
        artist: "Green Day",
        played: "20,605,508",
        album: "Saviors",
        time: "3:06",
        cover: "https://i.scdn.co/image/ab67616d00001e024e805200727de6c107de5b33",
      },
      {
        rank: "2",
        title: "Look Ma, No Brains!",
        artist: "Green Day",
        played: "14,469,771",
        album: "Saviors",
        time: "2:03",
        cover: "https://i.scdn.co/image/ab67616d00001e024e805200727de6c107de5b33",
      },
      {
        rank: "3",
        title: "One Eyed Bastard",
        artist: "Green Day",
        played: "16,630,000",
        album: "Saviors",
        time: "2:52",
        cover: "https://i.scdn.co/image/ab67616d00001e024e805200727de6c107de5b33",
      },
      {
        rank: "4",
        title: "Dilemma",
        artist: "Green Day",
        played: "26,447,384",
        album: "Saviors",
        time: "3:18",
        cover: "https://i.scdn.co/image/ab67616d00001e024e805200727de6c107de5b33",
      },
      {
        rank: "5",
        title: "Bobby Sox",
        artist: "Green Day",
        played: "37,497,384",
        album: "Saviors",
        time: "3:08",
        cover: "https://i.scdn.co/image/ab67616d00001e024e805200727de6c107de5b33",
      },
    ],
  },
  {
    title: "Loss of Life",
    artist: "MGMT",
    cover: "./Rectangle 17 (12).png",
    songs: [
      {
        rank: "1",
        title: "Mother Nature",
        artist: "MGMT",
        played: "7.343.508",
        album: "Loss Of Life",
        time: "3:56",
        cover: "https://i.scdn.co/image/ab67616d00001e021fd336bd388a632180e721d8",
      },
      {
        rank: "2",
        title: "Capricorn",
        artist: "MGMT",
        played: "14,542,771",
        album: "Loss Of Life",
        time: "4:09",
        cover: "https://i.scdn.co/image/ab67616d00001e021fd336bd388a632180e721d8",
      },
      {
        rank: "3",
        title: "Gen-X Cops",
        artist: "MGMT",
        played: "5,961,000",
        album: "Loss Of Life",
        time: "3:47",
        cover: "https://i.scdn.co/image/ab67616d00001e021fd336bd388a632180e721d8",
      },
      {
        rank: "4",
        title: "Classiccal",
        artist: "MGMT",
        played: "7,000,384",
        album: "Loss Of Life",
        time: "3:36",
        cover: "https://i.scdn.co/image/ab67616d00001e021fd336bd388a632180e721d8",
      },
      {
        rank: "5",
        title: "Mary Boon",
        artist: "MGMT",
        played: "8,497,384",
        album: "Loss Of Life",
        time: "4:26",
        cover: "https://i.scdn.co/image/ab67616d00001e021fd336bd388a632180e721d8",
      },
    ],
  },
  {
    title: "All Quiet on the Eastern",
    artist: "The Libertines",
    cover: "./Rectangle 17 (13).png",
    songs: [
      {
        rank: "1",
        title: "Run Run Run",
        artist: "The Libertines",
        played: "6,088,171",
        album: "All Quiet on the Eastern",
        time: "2:53",
        cover: "https://i.scdn.co/image/ab67616d00001e021e218d8336b2b8757086d1a3",
      },
      {
        rank: "2",
        title: "Shiver",
        artist: "The Libertines",
        played: "2,028,809",
        album: "All Quiet on the Eastern",
        time: "3:00",
        cover: "https://i.scdn.co/image/ab67616d00001e021e218d8336b2b8757086d1a3",
      },
      {
        rank: "3",
        title: "Merry Old England",
        artist: "The Libertines",
        played: "1,225,789",
        album: "All Quiet on the Eastern",
        time: "4:49",
        cover: "https://i.scdn.co/image/ab67616d00001e021e218d8336b2b8757086d1a3",
      },
      {
        rank: "4",
        title: "Oh Shit",
        artist: "The Libertines",
        played: "1,876,681",
        album: "All Quiet on the Eastern",
        time: "3:01",
        cover: "https://i.scdn.co/image/ab67616d00001e021e218d8336b2b8757086d1a3",
      },
      {
        rank: "5",
        title: "Mustangs",
        artist: "The Libertines",
        played: "771.164",
        album: "All Quiet on the Eastern",
        time: "3:27",
        cover: "https://i.scdn.co/image/ab67616d00001e021e218d8336b2b8757086d1a3",
      },
    ],
  },
  {
    title: "Little Rope",
    artist: "Sleater-Kinney",
    cover: "./Rectangle 17 (14).png",
    songs: [
      {
        rank: "1",
        title: "Hell",
        artist: "Sleater-Kinney",
        played: "982,218",
        album: "Little Rope",
        time: "3:14",
        cover: "https://i.scdn.co/image/ab67616d00001e022b6e664018522e07c01ba0cf",
      },
      {
        rank: "2",
        title: "Untidy Creature",
        artist: "Sleater-Kinney",
        played: "479,981",
        album: "Little Rope",
        time: "3:28",
        cover: "https://i.scdn.co/image/ab67616d00001e022b6e664018522e07c01ba0cf",
      },
      {
        rank: "3",
        title: "Hunt You Down",
        artist: "Sleater-Kinney",
        played: "518,252",
        album: "Little Rope",
        time: "3:32",
        cover: "https://i.scdn.co/image/ab67616d00001e022b6e664018522e07c01ba0cf",
      },
      {
        rank: "4",
        title: "Oh Shit",
        artist: "Sleater-Kinney",
        played: "1,876,681",
        album: "Little Rope",
        time: "3:01",
        cover: "https://i.scdn.co/image/ab67616d00001e022b6e664018522e07c01ba0cf",
      },
      {
        rank: "5",
        title: "Mustangs",
        artist: "Sleater-Kinney",
        played: "771.164",
        album: "Little Rope",
        time: "3:27",
        cover: "https://i.scdn.co/image/ab67616d00001e022b6e664018522e07c01ba0cf",
      },
    ],
  },
];

export default function AlbumsList(props) {
  const {handleSongPlay, setCurrentSong} = props;
  const [displayInfo, setDisplayInfo] = useState(false);
  const [currentAlbum, setCurrentAlbum] = useState();

  const handleClickAlbum = () => {
    return displayInfo ? setDisplayInfo(false) : setDisplayInfo(true);
  };

  return (
    <div>
      {displayInfo ? (
        <AlbumInfo
          setDisplayInfo={setDisplayInfo}
          album={currentAlbum}
          handleSongPlay={handleSongPlay} setCurrentSong={setCurrentSong}
        ></AlbumInfo>
      ) : (
        <div className="new-albums-container">
          <div className="albumsList">
            {albums.map((album, index) => (
              <div
                className="album-item"
                key={index}
                onClick={() => {
                  setCurrentAlbum(album);
                  handleClickAlbum();
                }}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={album.cover}
                  alt={album.title}
                  className="album-cover"
                />
                <div className="album-info">
                  <h3 className="album-title">{album.title}</h3>
                  <p className="album-artist">{album.artist}</p>
                </div>
                <div className="status-indicator"></div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
