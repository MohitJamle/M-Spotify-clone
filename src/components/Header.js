import React from "react";
import "./Header.css";
import { Search } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { useDataLayerContext } from "../store/DataLayer";

const Header = () => {
  const [{ user }] = useDataLayerContext();

  return (
    <div className="header">
      <div className="header__left">
        <Search />
        <input
          type="text"
          placeholder="Search for Artists, songs, or podcasts"
        />
      </div>

      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
