import React, { useState } from "react";

import "./ArtistList.css";
import ArtistInfo from "../ArtistInfo/ArtistInfo";

const artists = [
  {
    name: "Eminiem",
    image: "./69824 2.png",
    background: "https://wallpapers.com/images/hd/eminem-the-best-rapper-086skjct0fxtuy9h.jpg",
    playlist: [
      {
        rank: "1",
        title: "Without Me",
        artist: "Eminem",
        releaseDate: "May 15, 2002",
        played: "21,215,618",
        time: "3:26",
        cover: "./eminem1.png",
      },
      {
        rank: "2",
        title: "mockingbird ",
        artist: "Eminem",
        releaseDate: "Apr 25, 2005",
        played: "19,856,112",
        time: "2:45",
        cover: "./eminem2.png",
      },
      {
        rank: "3",
        title: "The Real Slim Shark",
        artist: "Eminem",
        releaseDate: "Nov 30, 2023",
        played: "16,564,223",
        time: "2:11",
        cover: "./eminem3.png",
      },
      {
        rank: "4",
        title: "Lose Yourself",
        artist: "Eminem",
        releaseDate: "Nov 30, 2023",
        played: "16,240,390",
        time: "2:18",
        cover: "./eminem4.png",
      },
      {
        rank: "5",
        title: "Godzila",
        artist: "Eminem",
        releaseDate: "Nov 30, 2023",
        played: "14,367,500",
        time: "3:51",
        cover: "./eminem5.png",
      },
    ],
  },
  {
    name: "Imagine Dragons",
    image: "./69824 3.png",
    background: "imagineDragon.jpg",
    playlist: [
      {
        rank: "1",
        title: "Believer",
        artist: "Imagine Dragons",
        releaseDate: "February 1, 2017",
        played: "1,200,000,000",
        time: "3:24",
        cover: "https://upload.wikimedia.org/wikipedia/vi/5/5c/Imagine-Dragons-Believer-art.jpg",
      },
      {
        rank: "2",
        title: "Radioactive",
        artist: "Imagine Dragons",
        releaseDate: "February 29, 2012",
        played: "2,500,000,000",
        time: "3:07",
        cover: "https://i1.sndcdn.com/artworks-000069495641-rx1t0z-t500x500.jpg",
      },
      {
        rank: "3",
        title: "Thunder",
        artist: "Imagine Dragons",
        releaseDate: "April 27, 2017",
        played: "1,800,000,000",
        time: "3:07",
        cover: "https://upload.wikimedia.org/wikipedia/en/2/28/Imagine_Dragons_Thunder.jpg",
      },
      {
        rank: "4",
        title: "Demons",
        artist: "Imagine Dragons",
        releaseDate: "January 29, 2013",
        played: "1,500,000,000",
        time: "2:57",
        cover: "https://upload.wikimedia.org/wikipedia/vi/2/2b/Imagine_Dragons_-_%22Demons%22_%28Official_Single_Cover%29.jpg",
      },
      {
        rank: "5",
        title: "Whatever It Takes",
        artist: "Imagine Dragons",
        releaseDate: "September 7, 2017",
        played: "1,300,000,000",
        time: "3:21",
        cover: "https://i.scdn.co/image/ab67616d0000b2735675e83f707f1d7271e5cf8a",
      },
    ],
  },
  {
    name: "Adele",
    image: "./69824 4.png",
    background: "https://wallpapers.com/images/hd/adele-background-rhfwzznpjkjd1ccb.jpg",
    playlist: [
      {
        rank: "1",
        title: "Rolling in the Deep",
        artist: "Adele",
        releaseDate: "November 29, 2010",
        played: "1,500,000,000",
        time: "3:48",
        cover: "https://upload.wikimedia.org/wikipedia/en/7/74/Adele_-_Rolling_in_the_Deep.png",
      },
      {
        rank: "2",
        title: "Someone Like You",
        artist: "Adele",
        releaseDate: "January 24, 2011",
        played: "1,200,000,000",
        time: "4:45",
        cover: "https://upload.wikimedia.org/wikipedia/vi/3/3a/Adele_Someone_Like_You.jpg",
      },
      {
        rank: "3",
        title: "Hello",
        artist: "Adele",
        releaseDate: "October 23, 2015",
        played: "1,800,000,000",
        time: "4:55",
        cover: "https://cdn-images.dzcdn.net/images/cover/938059115e8f91ed8f3454d6edc29e54/0x1900-000000-80-0-0.jpg",
      },
      {
        rank: "4",
        title: "Set Fire to the Rain",
        artist: "Adele",
        releaseDate: "July 20, 2011",
        played: "1,000,000,000",
        time: "4:02",
        cover: "https://i1.sndcdn.com/artworks-000069226825-f4rlrf-t500x500.jpg",
      },
      {
        rank: "5",
        title: "Skyfall",
        artist: "Adele",
        releaseDate: "October 5, 2012",
        played: "800,000,000",
        time: "4:46",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQCfIYgb87PD91l5TNAsjdu9uwLusq0CZCBw&s",
      },
    ],
  },
  {
    name: "Lana Del Ray",
    image: "./69824 5.png",
    background: "https://wallpapercat.com/w/full/9/d/1/195709-3840x2160-desktop-4k-lana-del-rey-background.jpg",
    playlist: [
      {
        rank: "1",
        title: "Video Games",
        artist: "Lana Del Ray",
        releaseDate: "October 12, 2011",
        played: "1,200,000,000",
        time: "4:40",
        cover: "https://i.scdn.co/image/ab67616d00001e02cb76604d9c5963544cf5be64",
      },
      {
        rank: "2",
        title: "Summertime Sadness",
        artist: "Lana Del Ray",
        releaseDate: "June 22, 2012",
        played: "900,000,000",
        time: "4:25",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw6lOFu9sJrH0mhM22SK9nIAN2XkQjD76vBQ&s",
      },
      {
        rank: "3",
        title: "Born to Die",
        artist: "Lana Del Ray",
        releaseDate: "January 27, 2012",
        played: "800,000,000",
        time: "4:54",
        cover: "https://upload.wikimedia.org/wikipedia/en/2/29/BornToDieAlbumCover.png",
      },
      {
        rank: "4",
        title: "Young and Beautiful",
        artist: "Lana Del Ray",
        releaseDate: "June 19, 2013",
        played: "700,000,000",
        time: "3:56",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaNPHhQGpa9KRthZkAAWgtI3G0VsYwkxXs4A&s",
      },
      {
        rank: "5",
        title: "Lust for Life",
        artist: "Lana Del Ray",
        releaseDate: "May 11, 2017",
        played: "600,000,000",
        time: "4:23",
        cover: "https://upload.wikimedia.org/wikipedia/vi/3/34/Lana_Del_Rey_Lust_for_Life.jpg",
      },
    ],
  },
  {
    name: "Harry Styles",
    image: "./69824 6.png",
    background: "https://wallpapers.com/images/hd/harry-styles-laptop-3zx0r4l1xdoqj5nn.jpg",
    playlist: [
      {
        rank: "1",
        title: "Watermelon Sugar",
        artist: "Harry Styles",
        releaseDate: "May 15, 2019",
        played: "1,800,000,000",
        time: "2:54",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSTQRJ1aVSoYPvG5RuVSTuS_B3bcW-ddWISg&s",
      },
      {
        rank: "2",
        title: "Adore You",
        artist: "Harry Styles",
        releaseDate: "December 6, 2019",
        played: "1,600,000,000",
        time: "3:27",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmCzdhgG0QnxNcIIuOIQjyQuwigTwyV-Wpcg&s",
      },
      {
        rank: "3",
        title: "Sign of the Times",
        artist: "Harry Styles",
        releaseDate: "April 7, 2017",
        played: "1,400,000,000",
        time: "5:09",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Harry_Styles_-_Sign_of_the_Times_%28Official_Single_Cover%29.png/220px-Harry_Styles_-_Sign_of_the_Times_%28Official_Single_Cover%29.png",
      },
      {
        rank: "4",
        title: "Falling",
        artist: "Harry Styles",
        releaseDate: "March 18, 2019",
        played: "1,200,000,000",
        time: "4:00",
        cover: "https://i.pinimg.com/originals/79/23/64/792364707ad0a23f5007b9727a6f07d5.jpg",
      },
      {
        rank: "5",
        title: "As It Was",
        artist: "Harry Styles",
        releaseDate: "April 1, 2022",
        played: "2,000,000,000",
        time: "2:47",
        cover: "https://s3.amazonaws.com/media.thecrimson.com/photos/2022/04/04/235936_1355516.jpeg",
      },
    ],
  },
  {
    name: "Billie Eilish",
    image: "./69824 7.png",
    background: "https://wallpapers.com/images/featured/billie-eilish-background-mbclmbm3ltzcioy4.jpg",
    playlist: [
      {
        rank: "1",
        title: "Bad Guy",
        artist: "Billie Eilish",
        releaseDate: "March 29, 2019",
        played: "1,800,000,000",
        time: "3:14",
        cover: "https://thethaovanhoa.mediacdn.vn/372676912336973824/2023/11/3/bad-guy-16989714925081627622345.jpg",
      },
      {
        rank: "2",
        title: "Everything I Wanted",
        artist: "Billie Eilish",
        releaseDate: "November 13, 2019",
        played: "1,200,000,000",
        time: "4:05",
        cover: "https://www.udiscovermusic.com/wp-content/uploads/2019/11/Billie-Eilish-Everything-I-Wanted.jpg",
      },
      {
        rank: "3",
        title: "When the Party's Over",
        artist: "Billie Eilish",
        releaseDate: "March 29, 2018",
        played: "1,000,000,000",
        time: "3:16",
        cover: "https://upload.wikimedia.org/wikipedia/en/1/1f/Billie_Eilish_-_When_the_Party%27s_Over.png",
      },
      {
        rank: "4",
        title: "Therefore I Am",
        artist: "Billie Eilish",
        releaseDate: "November 12, 2020",
        played: "900,000,000",
        time: "2:54",
        cover: "https://upload.wikimedia.org/wikipedia/en/4/4b/Billie_Eilish_-_Therefore_I_Am.png",
      },
      {
        rank: "5",
        title: "Ocean Eyes",
        artist: "Billie Eilish",
        releaseDate: "November 18, 2016",
        played: "1,500,000,000",
        time: "3:20",
        cover: "https://cdn-images.dzcdn.net/images/cover/d85200712419ae036b277deffeea5181/500x500.jpg",
      },
    ],
  },
];

export default function ArtistList(props) {
  const {handleSongPlay, setCurrentSong} = props;
  const [currentArtist, setCurrentArtist] = useState();
  const [displayArtist, setDisplayArtist] = useState(false);
  const displayArtistInfo = () => {
    displayArtist ? setDisplayArtist(false) : setDisplayArtist(true);
  };
  const artist_list = JSON.parse(localStorage.getItem("list_User")).filter((item) => item.role === "artist");
  return (
    <div>
      {displayArtist ? (
        <ArtistInfo setDisplayArtist={setDisplayArtist} artist={currentArtist} handleSongPlay={handleSongPlay} setCurrentSong={setCurrentSong}></ArtistInfo>
      ) : (
        <div className="popular-artists-container">
          <div className="artists-list-container">
            {artists.map((artist, index) => (
              <div
                className="artist-item"
                key={index}
                onClick={() => {
                  displayArtistInfo();
                  setCurrentArtist(artist);
                }}
                style={{ cursor: "pointer" }}
              >
                <img src={artist.image} alt={artist.name} className="artist-image" />
                <p className="artist-name">{artist.name}</p>
              </div>
            ))}
            {artist_list.map((artist, index) => (
              <div
                className="artist-item"
                key={index}
                onClick={() => {
                  displayArtistInfo();
                  setCurrentArtist(artist);
                }}
                style={{ cursor: "pointer" }}
              >
                <img src="https://sagardiocese.com/wp-content/uploads/2019/09/Blank-300x300.png" alt={artist.username} className="artist-image" />
                <p className="artist-name">{artist.username}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
