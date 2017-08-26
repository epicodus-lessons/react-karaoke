import React from "react";
import styles from "./../styles/SongDisplay.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { nextLine, restartSong } from "./../actions";

const SongDisplay = ({ dispatch, song }) => {
  const { songTitle, artist, currentPhrase, chorusArray, arrayPosition } = song;
  return (
    <div className = {styles.songDisplay}>
      <div className = {styles.songInfo}>
        <h1>{songTitle}</h1>
        <hr/>
        <h4>{artist}</h4>
      </div>
      <div className = {styles.phrase} onClick={e => {
        e.preventDefault();
        if(!(arrayPosition === chorusArray.length - 1)) {
          dispatch(nextLine());
        } else {
          dispatch(restartSong());
        }
      }}>
        <h1>
          {currentPhrase}
        </h1>
      </div>
    </div>
  );
};

SongDisplay.propTypes = {
  song: PropTypes.object,
  songTitle: PropTypes.string,
  artist: PropTypes.string,
  currentPhrase: PropTypes.string,
  chorusArray: PropTypes.array,
  arrayPosition: PropTypes.number,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    song: state
  };
};

export default connect(
  mapStateToProps
)(SongDisplay);
