import { useContext } from "react";
import { GameContext } from "./context/GameContext";

function App() {
  
  const { gameOption, setGameOption } = useContext(GameContext);
  
  return (
    <h1>Tic Tac Toe Game</h1>
  )
}

export default App
