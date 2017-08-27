import constants from "./../../src/constants";
import * as actions from "./../../src/actions";
import selectedSong from "./../../src/reducers/selectedSong";
import songsById from "./../../src/reducers/songsById";

describe("Karaoke App", () => {
  const { defaultState, types } = constants;

  describe("Songs By Title Reducer", () => {
    const songData = defaultState.songsById[defaultState.selectedSong];
    let newSongData;
    it('should return default state', () => {
      expect(songsById(defaultState.songsById, { type: null }))
      .toEqual(defaultState.songsById);
    });

    it("should update chorus phrase", () => {
      newSongData = songsById(defaultState.songsById, actions.nextLine(defaultState.selectedSong))[defaultState.selectedSong];
      expect(newSongData.currentPhrase)
      .toEqual(songData.songArray[1]);
    });

    // it("should restart song", () => {
    //   const newState = reducer(defaultState, { type: types.NEXT_LINE });
    //   expect(reducer(newState, { type: types.RESTART_SONG })).toEqual(defaultState);
    // });

  });

});
