import constants from "./../../src/constants";
import reducer from "./../../src/reducers";

describe("Karaoke Reducer", () => {
  const { defaultState, types } = constants;

  it('should return default state', () => {
    expect(reducer(defaultState, { type: null })).toEqual(defaultState);
  });

  it("should update chorus phrase", () => {
    expect(reducer(defaultState, { type: types.NEXT_LINE }).currentPhrase).toEqual(defaultState.chorusArray[1]);
  });

  it("should restart song", () => {
    const newState = reducer(defaultState, { type: types.NEXT_LINE });
    expect(reducer(newState, { type: types.RESTART_SONG })).toEqual(defaultState);
  });

});
