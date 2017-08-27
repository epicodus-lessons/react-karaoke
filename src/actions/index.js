import * as types from "./../constants/ActionTypes";

export const nextLine = (songId) => ({
  type: types.NEXT_LINE,
  songId
});

export const restartSong = (songId) => ({
  type: types.RESTART_SONG,
  songId
});

export const selectSong = (songId) => ({
  type: types.SELECT_SONG,
  songId
});

export const recieveSong = (title, artist, json) => ({
  type: types.RECIEVE_SONG,
  title,
  response: json,
  receivedAt: Date.now()
});

export const requestSong = (title, artist) => ({
  type: types.REQUEST_SONG,
  title,
  artist
});
