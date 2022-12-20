import * as S from './styles';

//Components
import ButtonX from "../Button/ButtonX";
import ButtonO from "../Button/ButtonO";
import ButtonReload from '../Button/ButtonReload';

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
    <S.Header>
      <S.DivLogo>
        <ButtonX />
        <ButtonO />
      </S.DivLogo>
      <S.ButtonShowTurn>
        <S.Text primary>turn</S.Text>
        <span></span>
      </S.ButtonShowTurn>
      <ButtonReload />
    </S.Header>
  )
}