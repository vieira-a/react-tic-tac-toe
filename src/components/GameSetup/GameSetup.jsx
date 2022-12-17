import { useContext } from "react";
import { GameContext } from "../../context/GameContext";

export default function GameSetup() {

  const 
  {
    gameOption, 
    setGameOption, 
    gamePlayer, 
    setGamePlayer,
    gameStage,
    setGameStage, 
    handleGameOption
  } = useContext(GameContext);

  return (
    <>
    <header>
      <div className="logo">Logo</div>
    </header>
    <section>
      <div className="setGameOption">
        <p>pick player 1' mark</p>
        <div className="setGameOption">
          <button disabled={gameOption === 0 ? true : false} onClick={handleGameOption}>x</button>
          <button disabled={gameOption === 1 ? true: false} onClick={handleGameOption}>o</button>
        </div>
        <div className="setGamePlayer">
          <button>new game (vs cpu)</button>
          <button>new game (vs human)</button>
        </div>
      </div>
    </section>
  
    </>
  )
}