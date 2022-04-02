const currentSong = {
  album: {
    name: "Humdard (From 'Ek Villain')",
    images: [
      {
        url: "https://i.scdn.co/image/ab67616d0000b2731aa5adad8593923dcdf1a7d0",
      },
    ],
  },
  artists: [
    {
      href: "https://api.spotify.com/v1/artists/4YRxDV8wJFPHPTeXepOstw",
      id: "4YRxDV8wJFPHPTeXepOstw",
      name: "Arijit Singh",
      type: "artist",
      uri: "spotify:artist:4YRxDV8wJFPHPTeXepOstw",
    },
  ],
};

export const initialState = {
  user: null,
  playlists: [],
  playing: null,
  spotify: null,
  item: null,
  token: null,
  top_artists: null,
  discover_weekly: null,
  playingList: null,
  current_song: currentSong,
};

const reducer = (state, action) => {
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

    case "SET_CURRENT":
      return {
        ...state,
        current_song: action.current_song,
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

    case "Set_PLAYLIST":
      return {
        ...state,
        playingList: action.playingList,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    default:
      return state;
  }
};

export default reducer;
