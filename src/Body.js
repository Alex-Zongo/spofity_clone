import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";
import { actionTypes } from "./reducer";

function Body({ spotify }) {
  const [{ body_current_playlist }, dispatch] = useDataLayerValue();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:${id}`,
      })
      .then(() => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: actionTypes.SET_ITEM,
            item: r.item,
          });
          dispatch({
            type: actionTypes.SET_PLAYING,
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then(() => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: actionTypes.SET_ITEM,
            item: r.item,
          });
          dispatch({
            type: actionTypes.SET_PLAYING,
            playing: true,
          });
        });
      });
  };

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={body_current_playlist?.images[0]?.url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{body_current_playlist?.name}</h2>
          <p>{body_current_playlist?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
            onClick={() => playPlaylist(body_current_playlist?.id)}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {body_current_playlist?.tracks.items.map((item) => (
          <SongRow
            key={item?.track?.id}
            playSong={playSong}
            track={item.track}
          />
        ))}
      </div>
    </div>
  );
}

export default Body;
