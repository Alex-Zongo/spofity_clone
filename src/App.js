import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";
import { actionTypes } from "./reducer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: actionTypes.SET_TOKEN,
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify
        .getMe()
        .then((user) => {
          dispatch({
            type: actionTypes.SET_USER,
            user: user,
          });
        })
        .catch((err) => {
          console.log(err);
        });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: actionTypes.SET_PLAYLISTS,
          playlists: playlists,
        });
      });
      // get "Good Vibes" spotify playlist
      spotify.getPlaylist("37i9dQZF1DWYBO1MoTDhZI").then((response) => {
        dispatch({
          type: actionTypes.SET_BODY_CURRENT_PLAYLIST,
          body_current_playlist: response,
        });
      });
      /*
      spotify.getMyRecentlyPlayedTracks().then((response) => {
        dispatch({
          type: actionTypes.SET_RECENTLY_PLAYED_TRACKS,
          recently_played_tracks: response,
        });
      });
      spotify.getMyTopTracks().then((response) => {
        dispatch({
          type: actionTypes.SET_TOP_TRACKS,
          top_tracks: response,
        });
      });

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: actionTypes.SET_TOP_ARTISTS,
          top_artists: response,
        })
      );*/
    }
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
