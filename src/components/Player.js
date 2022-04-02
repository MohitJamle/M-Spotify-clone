import React, { useState } from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

const Player = () => {
  const [toogleside, setToogleside] = useState(false);

  const toogleSidebar = () => {
    setToogleside(() => {
      if (toogleside === true) {
        return false;
      } else {
        return true;
      }
    });
  };

  return (
    <div className="player">
      <div className="player_body">
        <Sidebar toogle={toogleside} />
        <h1 className="toogle" onClick={toogleSidebar}>
          x
        </h1>
        <Body toogle={toogleside} />
      </div>

      <Footer />
    </div>
  );
};

export default Player;
