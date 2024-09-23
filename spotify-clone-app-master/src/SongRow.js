import React from "react";

import "./SongRow.css";
import { useDataLayerValue } from "./DataLayer";

const SongRow = ({ track }) => {
  const [{ spotify }, dispatch] = useDataLayerValue();

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((res) => {
          dispatch({
            type: "SET_ITEM",
            item: res.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className="songRow" onClick={() => playSong(track.id)}>
      <img
        className="songRow_album"
        src={track.album.images[0].url}
        alt="album_logo"
      />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")}
          {track.album.name}
        </p>
      </div>
    </div>
  );
};

export default SongRow;
