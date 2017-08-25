import React from "react";
import SongDisplay from "./SongDisplay";
import styles from "./../styles/App.css";

function App(){
  return (
    <div className = {styles.app}>
      <div className = "container">
        <SongDisplay />
      </div>
    </div>
  );
}

export default App;
