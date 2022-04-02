import React from "react";
import { useDataLayerContext } from "../store/DataLayer";
import "./SidebarOption.css";

const SidebarOption = ({ title, Icon, id }) => {
  const [, dispatch] = useDataLayerContext();

  const changeComp = () => {
    dispatch({
      type: "Set_PLAYLIST",
      playingList: id,
    });
    dispatch({
      type: "SET_PLAYING",
      playing: "",
    });
  };

  return (
    <div className="sidebarOption" onClick={!Icon ? changeComp : undefined}>
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
};

export default SidebarOption;
