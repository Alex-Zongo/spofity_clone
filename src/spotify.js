// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#authenticating-with-spotify

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "https://spotify-clone-c36ba.web.app/";

const clientId = "d59174807c174262b3a886da73090133";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
