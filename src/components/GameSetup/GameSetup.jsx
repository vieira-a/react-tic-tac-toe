//Styles
import * as S from './styles';

//components
import ButtonX from "../Button/ButtonX";
import ButtonO from "../Button/ButtonO";

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
    handleGameOption,
    handleGameStage
  } = useContext(GameContext);

  return (
    <>
    <header>
      <ButtonX />
      <ButtonO />
    </header>
    <section>
      <div className="setGameOption">
        <S.Text>pick player 1' mark</S.Text>
        <div className="setGameOption">
          <button disabled={gameOption === 0 ? true : false} onClick={handleGameOption}>x</button>
          <button disabled={gameOption === 1 ? true: false} onClick={handleGameOption}>o</button>
        </div>
        <div className="setGamePlayer">
          <button onClick={handleGameStage}>new game (vs cpu)</button>
          <button onClick={handleGameStage}>new game (vs human)</button>
        </div>
      </div>
    </section>
  
    </>
  )
}