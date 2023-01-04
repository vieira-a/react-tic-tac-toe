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

  /**
   * Preparing victory condition. It will be one function by player
   * I need to verify if some of victory conditions arrays are part of player array during the game, from the third play
   * First: get only values of object playerMove and create a new array to it
   * Second: compare the arrays
   */

   const victoryConditions = [
    ['0', '1', '2'],
    ['0', '3', '6'],
    ['0', '4', '8'],
    ['1', '4', '7'],
    ['2', '4', '6'],
    ['2', '5', '8'],
    ['3', '4', '5'],
    ['6', '7', '8']
  ]

  function checkWinCondition (arrOrig, arrDest, player) {
    
    for(let i = 0; i < arrDest.length; i++) {
      
      let counter = 0

      for(let item of arrOrig) {
      
        if(arrDest[i].includes(item)) {
          counter += 1
          console.log(`Array número ${[i]}: ${arrDest[i]} --- Itens: ${item} --- Contador: ${counter}`)
      } 
      if(counter === 3){
        console.log(`${player} wins`)
      }
    }
    }

    useCallback(() => {

    }, [handlePlayerMove])

  }

  let player1Amount = []
  let player2Amount = []

  const handlePlayer1Moves = () => {
    
    for(let key in player1Moves) {
      player1Amount.push(key)
    }

    useCallback(()=>{
      
    }, [player1Moves])
  }

  const handlePlayer2Moves = () => {
    
    for(let key in player2Moves) {
      player2Amount.push(key)
      
    }

    useCallback(()=>{
      
    }, [player2Moves])
  }

  handlePlayer1Moves()
  handlePlayer2Moves()
  checkWinCondition(player1Amount, victoryConditions, 'Player 1')
  checkWinCondition(player2Amount, victoryConditions, 'Player 2')

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