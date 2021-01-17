export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discover_weekly: null,
  body_current_playlist: null,
  top_artists: null,
  spotify: null,
  recently_played_tracks: null,
  top_tracks: null,
  token: null,
};
export const actionTypes = {
  SET_USER: "SET_USER",
  SET_TOKEN: "SET_TOKEN",
  SET_PLAYLISTS: "SET_PLAYLISTS",
  SET_DISCOVER_WEEKLY: "SET_DISCOVER_WEEKLY",
  SET_TOP_ARTISTS: "SET_TOP_ARTISTS",

  SET_RECENTLY_PLAYED_TRACKS: "SET_RECENTLY_PLAYED_TRACKS",
  SET_TOP_TRACKS: "SET_TOP_TRACKS",
  SET_PLAYING: "SET_PLAYING",
  SET_ITEM: "SET_ITEM",
  SET_BODY_CURRENT_PLAYLIST: "SET_BODY_CURRENT_PLAYLIST",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case actionTypes.SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.playlists,
      };

    case actionTypes.SET_TOP_ARTISTS:
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case actionTypes.SET_RECENTLY_PLAYED_TRACKS:
      return {
        ...state,
        recently_played_tracks: action.recently_played_tracks,
      };
    case actionTypes.SET_TOP_TRACKS:
      return {
        ...state,
        top_tracks: action.top_tracks,
      };
    case actionTypes.SET_ITEM:
      return {
        ...state,
        item: action.item,
      };
    case actionTypes.SET_PLAYING:
      return {
        ...state,
        playing: action.playing,
      };
    case actionTypes.SET_BODY_CURRENT_PLAYLIST:
      return {
        ...state,
        body_current_playlist: action.body_current_playlist,
      };
    default:
      return state;
  }
};

export default reducer;
