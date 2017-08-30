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

export const recieveSong = (title, artist, songId, songArray) => ({
  type: types.RECIEVE_SONG,
  songId,
  title,
  artist,
  songArray,
  receivedAt: Date.now()
});

export const requestSong = (title, artist, localSongId) => ({
  type: types.REQUEST_SONG,
  title,
  artist,
  songId: localSongId
});

export function fetchSongId(title, artist) {
  return function (dispatch) {
    const localSongId = v4();
    dispatch(requestSong(title, artist, localSongId));
    artist = artist.replace(" ", "_");
    title = title.replace(" ", "_");

    return fetch("http://api.musixmatch.com/ws/1.1/track.search?q_artist=" + artist + "&q_track=" + title + "&page_size=1&s_track_rating=desc&apikey=a8503c69d6322a8e9e7faaaa8afc05a1")
    .then(
      response => response.json(),
      error => console.log("An error occured.", error)
    )
    .then(function(json) {
      if (json.message.body.track_list.length > 0) {
        const musicMatchId = json.message.body.track_list[0].track.track_id;
        const artist = json.message.body.track_list[0].track.artist_name;
        const title = json.message.body.track_list[0].track.track_name;
        fetchLyrics(title, artist, musicMatchId, localSongId, dispatch);
      } else {
        console.log("failed id search")
      }
    });
  };
}

export function fetchLyrics(title, artist, musicMatchId, localSongId, dispatch) {
  return fetch("http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=" + musicMatchId + "&apikey=a8503c69d6322a8e9e7faaaa8afc05a1")
  .then(
    response => response.json(),
    error => console.log("An error occured.", error)
  )
  .then(function(json) {
    if (json.message.body.lyrics) {
      let lyrics = json.message.body.lyrics.lyrics_body;
      lyrics = lyrics.replace('"', "");
      const songArray = lyrics.split(/\n/g);
      dispatch(recieveSong(title, artist, localSongId, songArray));
      dispatch(selectSong(localSongId));

    } else {
      console.log("failed lyrics search")
    }
  });
}
