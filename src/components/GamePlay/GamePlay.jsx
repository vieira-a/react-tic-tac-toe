//Context
import { useContext } from "react";
import { GameContext } from "../../context/GameContext";

export default function GamePlay () {

  const 
  {
    gameOption, 
    setGameOption, 
    gamePlayer, 
    setGamePlayer,
    gameStage,
    setGameStage, 
    handleGameOption,
    handleGameStage
  } = useContext(GameContext);

  console.log(gameOption )

  return (
    <h1>Game Play</h1>
  )
}