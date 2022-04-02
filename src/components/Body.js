import React from "react";
import { useDataLayerContext } from "../store/DataLayer";
import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import "./Body.css";
import Header from "./Header";
import SongRow from "./SongRow";

const Body = ({ toogle }) => {
  const [{ discover_weekly }] = useDataLayerContext();

  const styles = {
    flex: toogle ? "1" : "0.8",
    position: "relative",
    padding: "30px",
    background: "linear-gradient(#6d84aa, rgb(25, 25, 25), rgba(0, 0, 0, 1))",
    color: "white",
    height: "100vh",
    overflowY: "overlay",
    paddingBottom: "150px",
  };

  return (
    <div className="body" style={styles}>
      <Header />

      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />

        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>

        {/* List of songs */}

        {discover_weekly?.tracks.items.map((item) => {
          return (
            <SongRow
              track={item.track}
              key={item.track.id}
              url={item.track.preview_url}
              onClick={() => {
                console.log("first");
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
