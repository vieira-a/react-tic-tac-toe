import { createContext, useState, useCallback } from "react";
import ButtonO from "../components/Button/ButtonO";
import ButtonX from "../components/Button/ButtonX";

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
  console.log(`
  PLAYER1: ${player1} - Move: ${movePlayer1} | PLAYER2: ${player2} - Move: ${movePlayer2}
  `)

  /**
   * TRANSITION: stages of the game. Default: GameSetup(0). GamePlay(1)
   * That states are changed on GameSetup > GamePlay (on game start) or GamePlay > GameSetup (on game over)
   */
  const [gameStage, setGameStage] = useState(0);

  //Handle transition
  function gameStart() {
    setGameStage(1)
  }

  const [playerOption, setPlayerOption] = useState(0);
  const [cpuOption, setCpuOption] = useState(1);
  const [humanOption, setHumanOption] = useState(null);
  const [playerTurn, setPlayerTurn] = useState(player1);

  const [gameOption, setGameOption] = useState(0); // 0-x | 1-o
  const [gamePlayer, setGamePlayer] = useState(0); // 0-user | 1-cpu | 2-human
  const [playerMoves, setPlayerMoves] = useState([]);
  const [avaliableMoves, setAvaliableMoves] = useState([0,1,2,3,4,5,6,7,8]);
  
  function setupGameOptions() {
    
    if(playerOption === 0){
      setPlayerOption(1);
      setCpuOption(0);
      setPlayer1('cpu');
      setPlayer2('player');
      setPlayerTurn('player2')
      
    } else {
      setPlayerOption(0);
      setCpuOption(1);
      setPlayer1('player');
      setPlayer2('cpu');
      setPlayerTurn('player1')
    }
  }

  function startGame(event) {
    
    if(playerOption === 1 && event.target.id === '1') {
      setCpuOption(0);
      setPlayerOption(1);
      setPlayer1('cpu');
      setPlayer2('player');
      setPlayerTurn('cpu')
      setPlayerTurn('player1')
      
    } else if(playerOption === 0 && event.target.id === '2'){
      setPlayerOption(0);
      setHumanOption(1);
      setCpuOption(null);
      
      setPlayer1('player');
      setPlayer2('human');
      setPlayerTurn('player1')

    } else if(playerOption === 1 && event.target.id === '2'){
      
      setHumanOption(0);
      setPlayerOption(1);
      setCpuOption(null);
      
      setPlayer1('human');
      setPlayer2('player');
      setPlayerTurn('player1')

    }

    setGameStage(1);

  }
  
  const handleGameOption = (event) => {
    if(gameOption === 0){
      setGameOption(1);
    } else if(gameOption === 1){
      setGameOption(0);
    }
  }

  const handleGameStage = () => {
    if(gameStage === 0) {
      setGameStage(1);
    } else if(gameStage === 1){
      setGameStage(2)
    }
  }

  const handleGameTurn = () => {
    if(gameOption === 0) {
    return <ButtonX />
    } else {
      return <ButtonO />
    }
  }

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
      gameStart,
      /**End of refactoring */
      playerOption,
      cpuOption,
      humanOption,
      playerTurn,
      setPlayerTurn,
      setupGameOptions,
      startGame,
      gameOption, 
      setGameOption, 
      gamePlayer, 
      setGamePlayer,
      gameStage,
      setGameStage,
      handleGameOption,
      handleGameStage,
      handleGameTurn,
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