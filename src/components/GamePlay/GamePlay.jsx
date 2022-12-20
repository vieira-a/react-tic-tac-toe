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
    handleGameStage,
    handleGameTurn,
  } = useContext(GameContext);

  console.log(gameOption )

  return (
    <>
    <S.Header>
      <S.DivLogo>
        <ButtonX />
        <ButtonO />
      </S.DivLogo>
      <S.ButtonShowTurn>
        <S.DivTurnIndicator>
          {handleGameTurn()}

        </S.DivTurnIndicator>
        <S.Text primary>turn</S.Text>
      </S.ButtonShowTurn>
      <ButtonReload />
    </S.Header>
    <S.DivPlayOptions>
      <S.ButtonPlayOption></S.ButtonPlayOption>
      <S.ButtonPlayOption></S.ButtonPlayOption>
      <S.ButtonPlayOption></S.ButtonPlayOption>
      <S.ButtonPlayOption></S.ButtonPlayOption>
      <S.ButtonPlayOption></S.ButtonPlayOption>
      <S.ButtonPlayOption></S.ButtonPlayOption>
      <S.ButtonPlayOption></S.ButtonPlayOption>
      <S.ButtonPlayOption></S.ButtonPlayOption>
      <S.ButtonPlayOption></S.ButtonPlayOption>
    </S.DivPlayOptions>

    </>
  )
}