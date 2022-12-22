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
    event.target.disabled = true;
  }

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
      <S.ButtonPlayOption onClick={handlePlayerMove} id='0'>
        {JSON.stringify(playerMoves).includes(0) && gameOption === 0 ? <ButtonX /> : ''}
        {JSON.stringify(playerMoves).includes(0) && gameOption === 1 ? <ButtonO /> : ''}
        </S.ButtonPlayOption>
      <S.ButtonPlayOption onClick={handlePlayerMove} id='1'>
        {JSON.stringify(playerMoves).includes(1) && gameOption === 0 ? <ButtonX /> : ''}
        {JSON.stringify(playerMoves).includes(1) && gameOption === 1 ? <ButtonO /> : ''}
        </S.ButtonPlayOption>
      <S.ButtonPlayOption onClick={handlePlayerMove} id='2'>
        {JSON.stringify(playerMoves).includes(2) && gameOption === 0 ? <ButtonX /> : ''}
        {JSON.stringify(playerMoves).includes(2) && gameOption === 1 ? <ButtonO /> : ''}
        </S.ButtonPlayOption>
      <S.ButtonPlayOption onClick={handlePlayerMove} id='3'>
        {JSON.stringify(playerMoves).includes(3) && gameOption === 0 ? <ButtonX /> : ''}
        {JSON.stringify(playerMoves).includes(3) && gameOption === 1 ? <ButtonX /> : ''}
        </S.ButtonPlayOption>
      <S.ButtonPlayOption onClick={handlePlayerMove} id='4'>
        {JSON.stringify(playerMoves).includes(4) && gameOption === 0 ? <ButtonX /> : ''}
        {JSON.stringify(playerMoves).includes(4) && gameOption === 1 ? <ButtonX /> : ''}
        </S.ButtonPlayOption>
      <S.ButtonPlayOption onClick={handlePlayerMove} id='5'>
        {JSON.stringify(playerMoves).includes(5) && gameOption === 0 ? <ButtonX /> : ''}
        {JSON.stringify(playerMoves).includes(5) && gameOption === 1 ? <ButtonX /> : ''}
        </S.ButtonPlayOption>
      <S.ButtonPlayOption onClick={handlePlayerMove} id='6'>
        {JSON.stringify(playerMoves).includes(6) && gameOption === 0 ? <ButtonX /> : ''}
        {JSON.stringify(playerMoves).includes(6) && gameOption === 1 ? <ButtonX /> : ''}
        </S.ButtonPlayOption>
      <S.ButtonPlayOption onClick={handlePlayerMove} id='7'>
        {JSON.stringify(playerMoves).includes(7) && gameOption === 0 ? <ButtonX /> : ''}
        {JSON.stringify(playerMoves).includes(7) && gameOption === 1 ? <ButtonX /> : ''}
        </S.ButtonPlayOption>
      <S.ButtonPlayOption onClick={handlePlayerMove} id='8'>
        {JSON.stringify(playerMoves).includes(8) && gameOption === 0 ? <ButtonX /> : ''}
        {JSON.stringify(playerMoves).includes(8) && gameOption === 1 ? <ButtonX /> : ''}
        </S.ButtonPlayOption>

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