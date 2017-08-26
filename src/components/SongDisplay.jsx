import React from "react";
import styles from "./../styles/SongDisplay.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const SongDisplay = (props) => {
  const { songTitle, artist, currentPhrase } = props.song;
  console.log(songTitle);
  return (
    <div className = {styles.songDisplay}>
      <div className = {styles.songInfo}>
        <h1>{songTitle}</h1>
        <hr/>
        <h4>{artist}</h4>
      </div>
      <div className = {styles.phrase}>
        <h1>{currentPhrase}</h1>
      </div>
    </div>
  );
};


const mapStateToProps = state => {
  return {
    song: state
  };
};

export default connect(
  mapStateToProps
)(SongDisplay);
