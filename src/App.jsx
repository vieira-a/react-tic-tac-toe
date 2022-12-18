//Styles
import { GlobalStyle } from "./components/GlobalStyle";

//Context
import { useContext } from "react";
import { GameContext } from "./context/GameContext";

//Components
import GameSetup from "./components/GameSetup/GameSetup";
import GamePlay from "./components/GamePlay/GamePlay";
import GameOver from "./components/GameOver/GameOver";

function App() {
  
  const { gameStage } = useContext(GameContext);
  
  return (
    <div className="App">
      <GlobalStyle />
      {gameStage === 0 && <GameSetup />}
      {gameStage === 1 && <GamePlay />}
      {gameStage === 2 && <GameOver />}
    </div>
    )
}

export default App;
