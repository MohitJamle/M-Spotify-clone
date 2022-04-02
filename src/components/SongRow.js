import React, { useEffect, useMemo, useState } from "react";
import { useDataLayerContext } from "../store/DataLayer";
import "./SongRow.css";

const SongRow = ({ track, url }) => {
  const [, dispatch] = useDataLayerContext();
  const [playing, setPlaying] = useState(false);
  const audio = useMemo(() => new Audio(url), [url]);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [audio, playing]);

  const playSong = () => {
    setPlaying(!playing);

    dispatch({
      type: "SET_CURRENT",
      current_song: track,
    });
  };

  return (
    <div className="songRow" onClick={playSong}>
      <img className="songRow__album" src={track.album.images[0].url} alt="" />

      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(",")},
          {track.album.name}
        </p>
      </div>
    </div>
  );
};

export default SongRow;
