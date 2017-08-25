import * as types from "./../../src/constants/ActionTypes";
import { defaultState } from "./../../src/constants/DefaultState";
import reducer from "./../../src/reducers";

describe("Karaoke Reducer", () => {

  it('should return default state', () => {
    expect(reducer(defaultState, { type: null })).toEqual(defaultState);
  });


});


// expect(
//   reducer(initialState, { type: null })
// ).toEqual(initialState);
//
// expect(
//   reducer(initialState, { type: 'NEXT_LYRIC' })
// ).toEqual({
//   chorusString: chorus,
//   chorusArray: chorusArray,
//   arrayPosition: 1,
//   currentPhrase: chorusArray[1]
// });
//
// expect(
//   reducer({
//     chorusString: chorus,
//     chorusArray: chorusArray,
//     arrayPosition: 1,
//     currentPhrase: chorusArray[1]
//   }, { type: 'RESTART_SONG' })
// ).toEqual(initialState);
