import * as types from "./../constants/ActionTypes";
import v4 from "uuid/v4";

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
  artist,
  songId: v4()
});

export function fetchSongId(title, artist) {
  return function (dispatch) {
    dispatch(requestSong(title, artist));
    artist = artist.replace(" ", "_");
    title = title.replace(" ", "_");

    return fetch("http://api.musixmatch.com/ws/1.1/track.search?q_artist=" + artist + "&q_track=" + title + "&page_size=1&s_track_rating=desc&apikey=a8503c69d6322a8e9e7faaaa8afc05a1")
    .then(
      response => response.json(),
      error => console.log("An error occured.", error)
    )
    .then(function(json) {
      if (json.message.body.track_list.length > 0) {
        const id = json.message.body.track_list[0].track.track_id;
        fetchLyrics(id);
      } else {
        console.log("failed id search")
      }
    });
  };
}

export function fetchLyrics(id) {
  return fetch("http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=" + id + "&apikey=a8503c69d6322a8e9e7faaaa8afc05a1")
  .then(
    response => response.json(),
    error => console.log("An error occured.", error)
  )
  .then(function(json) {
    if (json.message.body.lyrics) {
      console.log(json.message.body.lyrics);

    } else {
      console.log("failed lyrics search")
    }
  });
}
