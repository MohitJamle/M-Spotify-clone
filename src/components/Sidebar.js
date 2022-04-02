import { Home, LibraryMusic, Search } from "@material-ui/icons";
import { useDataLayerContext } from "../store/DataLayer";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

const Sidebar = ({ toogle }) => {
  const [{ playlists }] = useDataLayerContext();

  const show = {
    height: "100vh",
    flex: "0.2",
    paddingLeft: "5px",
    paddingRight: "5px",
    color: "white",
    minWidth: "200px",
    backgroundColor: "#040404",
  };

  const hide = {
    display: "none",
  };

  return (
    <div className="sidebar" style={!toogle ? show : hide}>
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />

      <SidebarOption Icon={Home} title="Home" />
      <SidebarOption Icon={Search} title="Search" />
      <SidebarOption Icon={LibraryMusic} title="Your Library" />

      <br />
      <strong className="sidebar__title">YOUR PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist) => {
        return (
          <SidebarOption
            title={playlist.name}
            key={playlist.id}
            id={playlist.id}
          />
        );
      })}
    </div>
  );
};

export default Sidebar;
