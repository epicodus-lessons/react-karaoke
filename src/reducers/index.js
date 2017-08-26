import constants from "./../constants";
const { defaultState, types } = constants;

const reducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case types.NEXT_LINE:
      let newPosition = state.arrayPosition + 1;
      newState = {
        songTitle: state.songTitle,
        artist: state.artist,
        chorusString: state.chorusString,
        chorusArray: state.chorusArray,
        arrayPosition: newPosition,
        currentPhrase: state.chorusArray[newPosition]
      };
      return newState;
    case types.RESTART_SONG:
      newState = {
        songTitle: state.songTitle,
        artist: state.artist,
        chorusString: state.chorusString,
        chorusArray: state.chorusArray,
        arrayPosition: 0,
        currentPhrase: state.chorusArray[0]
      };
      return newState;
    default:
      return state;
  }
};


export default reducer;
