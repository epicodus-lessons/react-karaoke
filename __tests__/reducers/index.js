import * as types from "./../../src/constants/ActionTypes";
import { defaultState } from "./../../src/constants/DefaultState";
import reducer from "./../../src/reducers";

describe("Karaoke Reducer", () => {

  it('should return default state', () => {
    expect(reducer(defaultState, { type: null })).toEqual(defaultState);
  });

  it("should update chorus phrase", () => {
    expect(reducer(defaultState, { type: types.NEXT_LYRIC }).currentPhrase).toEqual(defaultState.chorusArray[1]);
  });

  it("should restart song", () => {
    const newState = reducer(defaultState, { type: types.NEXT_LYRIC });
    expect(reducer(newState, { type: types.RESTART_SONG })).toEqual(defaultState);
  });

});
