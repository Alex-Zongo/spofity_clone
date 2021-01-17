import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";
import { actionTypes } from "./reducer";

function Sidebar({ spotify }) {
  const [{ playlists }, dispatch] = useDataLayerValue();

  const setCurrentBodyPlaylist = (id) => {
    spotify.getPlaylist(`${id}`).then((response) => {
      dispatch({
        type: actionTypes.SET_BODY_CURRENT_PLAYLIST,
        body_current_playlist: response,
      });
    });
  };
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://respect-mag.com/wp-content/uploads/2019/12/spotify-logo-1920x1080_fouoik.jpg"
        alt=""
      />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption
          key={playlist.id}
          title={playlist.name}
          id={playlist.id}
          setCurrentBodyPlaylist={setCurrentBodyPlaylist}
        />
      ))}
    </div>
  );
}

export default Sidebar;
