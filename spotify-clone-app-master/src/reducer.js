export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  top_artists: null,
  spotify: null,
  item: null,
  // TODO: REMOVE IN PRODUCTION MODE
  // token:
  //   "BQDRS2DLh410Afc3wnTzkUf4jJU0IwKBfdfFi_Q3dLhvSy5GAdCHhsoSGzbc1SYBCWFQ27DrOILWb5nV0os40kY_OUdTnba5zdYt22NDHRNpOQi28Y3ySXCA2gMh2NlyOq-eh8sNewWKlln6-H4WdUC4UpIKYLvwsZHBkMNb9fIimsH5JKe4uWk7oVwG9GbXD82UpR7BEO9rhxJkSeY9",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };
    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    default:
      return state;
  }
};

export default reducer;
