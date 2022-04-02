import {
  PlayCircleOutline,
  SkipPrevious,
  SkipNext,
  Shuffle,
  Repeat,
  PlaylistPlay,
  VolumeDown,
} from "@material-ui/icons";
import React from "react";
import "./Footer.css";
import { Grid, Slider } from "@material-ui/core";
import { useDataLayerContext } from "../store/DataLayer";

const Footer = () => {
  const [{ current_song }] = useDataLayerContext();

  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src={current_song?.album.images[0].url}
          alt=""
        />

        <div className="footer__songInfo">
          <h4> {current_song?.album.name}</h4>
          <p> {current_song?.artists.map((artist) => artist.name).join(",")}</p>
        </div>
      </div>

      <div className="footer__center">
        <Shuffle className="footer__green" />
        <SkipPrevious className="footer__icon" />
        <PlayCircleOutline fontSize="large" className="footer__icon" />
        <SkipNext className="footer__icon" />
        <Repeat className="footer__green" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
