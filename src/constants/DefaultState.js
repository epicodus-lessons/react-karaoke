const BYE_BYE_BYE = "Don't want to be a fool for you, Just another player in your game for two, You may hate me but it ain't no lie, Baby bye bye bye, Bye bye, I Don't want to make it tough, I just want to tell you that I've had enough, It might sound crazy but it ain't no lie, Baby bye bye bye";

const chorusArray = BYE_BYE_BYE.split(", ");
const startPosition = 0;

export const defaultState = {
  songTitle: "Bye Bye Bye",
  artist: "N'Sync",
  chorusString: BYE_BYE_BYE,
  chorusArray: chorusArray,
  arrayPosition: startPosition,
  currentPhrase: chorusArray[startPosition]
};
