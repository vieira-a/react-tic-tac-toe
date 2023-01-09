// import { createContext, useState } from "react";

// export const GameContext = createContext();

// export const GameContextProvider = ({children}) => {
//   /**
//    * SETUP who plays the game. Default: player vs human
//    * This state will be changed after each move during the game
//    */
//   const [player1, setPlayer1] = useState('player');
//   const [player2, setPlayer2] = useState('human');
//   /**
//    * SETUP: avaliable moves: 0 = X, 1 = O
//    */
//   const move1 = 'X'; // 0-x | 1-o
//   const move2 = 'O'; // 0-x | 1-o
//   /**
//    * SETUP who plays X or O. Default: player (X) - human (O)
//    */
//   const [movePlayer1, setMovePlayer1] = useState(move1);
//   const [movePlayer2, setMovePlayer2] = useState(move2);
//   /**
//    * TRANSITION: stages of the game. Default: GameSetup(0). GamePlay(1)
//    * That states are changed on GameSetup > GamePlay (on game start) or GamePlay > GameSetup (on game over)
//    */
//   const [gameStage, setGameStage] = useState(0);
  
//   //Handle transition stage: 0=setup, 1=start
//   // const changeGameStage = () =>{
//   //   if(gameStage === 0){
//   //     setGameStage(1)
//   //   } else if(gameStage === 1){
//   //     setGameStage(0)
//   //   }
//   // }
  
//   const [avaliableMoves, setAvaliableMoves] = useState([0,1,2,3,4,5,6,7,8]);
  
  
// return (
//   <GameContext.Provider 
//   value={
//     {
//       player1,
//       player2,
//       setPlayer1,
//       setPlayer2,
//       move1,
//       move2,
//       movePlayer1,
//       movePlayer2,
//       setMovePlayer1,
//       setMovePlayer2,
//       //changeGameStage,
//       gameStage,
//       setGameStage,
//       avaliableMoves,
//       setAvaliableMoves
//     }
//     }>
//     {children}
//   </GameContext.Provider>
// )
// }