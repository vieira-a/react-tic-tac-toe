import { createContext, useState } from "react";

export const GameContext = createContext();

export const GameContextProvider = ({children}) => {
  /**
   * SETUP who plays the game. Default: player vs human
   * This state will be changed after each move during the game
   */
  const [player1, setPlayer1] = useState('player');
  const [player2, setPlayer2] = useState('human');
  /**
   * SETUP: avaliable moves: 0 = X, 1 = O
   */
  const move1 = 'X'; // 0-x | 1-o
  const move2 = 'O'; // 0-x | 1-o
  /**
   * SETUP who plays X or O. Default: player (X) - human (O)
   */
  const [movePlayer1, setMovePlayer1] = useState(move1);
  const [movePlayer2, setMovePlayer2] = useState(move2);

  /**
   * LOG INITIAL SETUP
   */
  // console.log(`
  // PLAYER1: ${player1} - Move: ${movePlayer1} | PLAYER2: ${player2} - Move: ${movePlayer2}
  // `)
  /**
   * TRANSITION: stages of the game. Default: GameSetup(0). GamePlay(1)
   * That states are changed on GameSetup > GamePlay (on game start) or GamePlay > GameSetup (on game over)
   */
  const [gameStage, setGameStage] = useState(0);

  //Handle transition stage: 0=setup, 1=start
  function changeGameStage() {
    if(gameStage === 0){
      setGameStage(1)
    } else if(gameStage === 1){
      setGameStage(0)
    }
  }

  const [playerOption, setPlayerOption] = useState(0);
  const [cpuOption, setCpuOption] = useState(1);
  const [humanOption, setHumanOption] = useState(null);
  const [playerTurn, setPlayerTurn] = useState(player1);

  const [gameOption, setGameOption] = useState(0); // 0-x | 1-o
  const [gamePlayer, setGamePlayer] = useState(0); // 0-user | 1-cpu | 2-human
  const [playerMoves, setPlayerMoves] = useState([]);
  const [avaliableMoves, setAvaliableMoves] = useState([0,1,2,3,4,5,6,7,8]);
  
  
return (
  <GameContext.Provider 
  value={
    {
      /**Refactoring */
      player1,
      player2,
      setPlayer1,
      setPlayer2,
      move1,
      move2,
      movePlayer1,
      movePlayer2,
      setMovePlayer1,
      setMovePlayer2,
      changeGameStage,
      /**End of refactoring */
      playerOption,
      cpuOption,
      humanOption,
      playerTurn,
      setPlayerTurn,
      //setupGameOptions,
      //startGame,
      gameOption, 
      setGameOption, 
      gamePlayer, 
      setGamePlayer,
      gameStage,
      setGameStage,
      //handleGameOption,
      //handleGameTurn,
      playerMoves,
      setPlayerMoves,
      avaliableMoves,
      setAvaliableMoves
    }
    }>
    {children}
  </GameContext.Provider>
)
}