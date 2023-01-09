//Styles
import { GlobalStyle } from "./components/GlobalStyle";

//Components
import GameSetup from "./components/GameSetup/GameSetup";
import GamePlay from "./components/GamePlay/GamePlay";

//Hooks
import { useState } from "react";

function App() {
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
  * TRANSITION: stages of the game. Default: GameSetup(0). GamePlay(1)
  * That states are changed on GameSetup > GamePlay (on game start) or GamePlay > GameSetup (on game over)
  */
  const [gameStage, setGameStage] = useState(0);
  
  const [avaliableMoves, setAvaliableMoves] = useState([0,1,2,3,4,5,6,7,8]);
  
  return (
    <div className="App wrapper">
      <GlobalStyle />
      {gameStage === 0 && <GameSetup 
      
      player1={player1}
      setPlayer1={setPlayer1}
      player2={player2}
      setPlayer2={setPlayer2}
      avaliableMoves={avaliableMoves}
      setAvaliableMoves={setAvaliableMoves}
      movePlayer1={movePlayer1}
      setMovePlayer1={setMovePlayer1}
      movePlayer2={movePlayer2}
      setMovePlayer2={setMovePlayer2}
      gameStage={gameStage}
      setGameStage={setGameStage}

      />}
      
      {gameStage === 1 && <GamePlay 
      
      player1={player1}
      setPlayer1={setPlayer1}
      player2={player2}
      setPlayer2={setPlayer2}
      avaliableMoves={avaliableMoves}
      setAvaliableMoves={setAvaliableMoves}
      movePlayer1={movePlayer1}
      setMovePlayer1={setMovePlayer1}
      movePlayer2={movePlayer2}
      setMovePlayer2={setMovePlayer2}
      gameStage={gameStage}
      setGameStage={setGameStage}
      
      />}
    </div>
    )
}

export default App;
