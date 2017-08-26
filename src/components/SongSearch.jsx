import React from "react";
import styles from "./../styles/SongSearch.css";

function SongSearch(){
  return (
    <div className = {styles.songSearch}>
      <form>
        <input defaultValue="song search"></input>
        <button>search</button>
      </form>
    </div>
  );
}

export default SongSearch;
