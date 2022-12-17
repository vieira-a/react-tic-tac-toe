import { useContext } from "react";
import { GameContext } from "./context/GameContext";
import GameSetup from "./components/GameSetup/GameSetup";

function App() {
  
  const { gameStage } = useContext(GameContext);
  
  return (
    <div className="App">
      {gameStage === 0 && <GameSetup />}
    </div>
    )
}

export default App
