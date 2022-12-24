import * as S from './styles';
import { color } from '../UI/Colors';

//Components
import ButtonX from "../Button/ButtonX";
import ButtonO from "../Button/ButtonO";
import ButtonReload from '../Button/ButtonReload';

//Context
import React, { useContext, useState, useCallback, useMemo } from "react";
import { GameContext } from "../../context/GameContext";

export default function GamePlay () {
  
  const 
  {
   /**Refactoring */
   playerOption,
    setPlayerOption,
    cpuOption,
    setCpuOption,
    humanOption,
    setHumanOption,
    player1,
    setPlayer1,
    player2,
    setPlayer2,
    playerTurn,
    setPlayerTurn,
    setupGameOptions,
    startGame,
   /**End of refactoring */
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

  const [player1Moves, setPlayer1Moves] = useState([]);
  const [player2Moves, setPlayer2Moves] = useState([]);

  const handlePlayerMove = (event) => {

    if(playerTurn === player1) {
      event.target.innerHTML = 'X'
      event.target.style.color = color['satin-sheen-gold']
      console.log(event.target.style)
      setPlayer1Moves((prev) => {
        return {
          ...prev, [event.target.id] : event.target.id
        }
      })
      event.target.disabled = true;
      setPlayerTurn(player2)
      
    } else if(playerTurn === player2) { 
      event.target.innerHTML = 'O'
      event.target.style.color = color['maximum-blue-green']
      setPlayer2Moves((prev) => {
        return {
          ...prev, [event.target.id] : event.target.id
        }
      })
      event.target.disabled = true;
      setPlayerTurn(player1)
    }
    setAvaliableMoves(avaliableMoves.filter(item => item != event.target.id))
  }

  console.log(player1Moves)
  console.log(player2Moves)

  return (
    <>
    <S.Header>
      <S.DivLogo>
        <ButtonX />
        <ButtonO />
      </S.DivLogo>
      <S.ButtonShowTurn>
        <S.DivTurnIndicator>
          {/* {handleGameTurn()} */}

        </S.DivTurnIndicator>
        <S.Text primary>turn</S.Text>
      </S.ButtonShowTurn>
      <ButtonReload />
    </S.Header>
    <S.DivPlayOptions>
     
      <S.ButtonPlayOption id='0' onClick={handlePlayerMove}>
      </S.ButtonPlayOption>
      <S.ButtonPlayOption id='1' onClick={handlePlayerMove}>
        </S.ButtonPlayOption>
      <S.ButtonPlayOption id='2' onClick={handlePlayerMove}>
        </S.ButtonPlayOption>
      <S.ButtonPlayOption id='3' onClick={handlePlayerMove}>
        </S.ButtonPlayOption>
      <S.ButtonPlayOption id='4' onClick={handlePlayerMove}>
        </S.ButtonPlayOption>
      <S.ButtonPlayOption id='5' onClick={handlePlayerMove}>
        </S.ButtonPlayOption>
      <S.ButtonPlayOption id='6' onClick={handlePlayerMove}>
        </S.ButtonPlayOption>
      <S.ButtonPlayOption id='7' onClick={handlePlayerMove}>
        </S.ButtonPlayOption>
      <S.ButtonPlayOption id='8' onClick={handlePlayerMove}>
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