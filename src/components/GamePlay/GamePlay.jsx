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
    playerMoves,
    setPlayerMoves,
    avaliableMoves,
    setAvaliableMoves,
  } = useContext(GameContext);

  const handlePlayerMove = (event) => {
    setPlayerMoves((prev) => {
      return {
        ...prev, [event.target.id]: Number(event.target.id)
      }
    })
    setAvaliableMoves(avaliableMoves.filter(item => item != event.target.id))
  }
  console.log(playerMoves)

  

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
      <S.ButtonPlayOption onClick={handlePlayerMove} id='0'></S.ButtonPlayOption>
      <S.ButtonPlayOption onClick={handlePlayerMove} id='1'></S.ButtonPlayOption>
      <S.ButtonPlayOption onClick={handlePlayerMove} id='2'></S.ButtonPlayOption>
      <S.ButtonPlayOption onClick={handlePlayerMove} id='3'></S.ButtonPlayOption>
      <S.ButtonPlayOption onClick={handlePlayerMove} id='4'></S.ButtonPlayOption>
      <S.ButtonPlayOption onClick={handlePlayerMove} id='5'></S.ButtonPlayOption>
      <S.ButtonPlayOption onClick={handlePlayerMove} id='6'></S.ButtonPlayOption>
      <S.ButtonPlayOption onClick={handlePlayerMove} id='7'></S.ButtonPlayOption>
      <S.ButtonPlayOption onClick={handlePlayerMove} id='8'></S.ButtonPlayOption>

    </S.DivPlayOptions>
    <S.DivScoreBoard>
      <S.DivScorePlayer bgGreen>
        <S.Text sm semibold>you</S.Text>
        <S.Text lg bold>14</S.Text>
      </S.DivScorePlayer>
      <S.DivScorePlayer bgGray>
        <S.Text sm semibold>ties</S.Text>
        <S.Text lg bold>32</S.Text>
      </S.DivScorePlayer>
      <S.DivScorePlayer bgGold>
        <S.Text sm semibold>(cpu)</S.Text>
        <S.Text lg bold>14</S.Text>
      </S.DivScorePlayer>
    </S.DivScoreBoard>

    </>
  )
}