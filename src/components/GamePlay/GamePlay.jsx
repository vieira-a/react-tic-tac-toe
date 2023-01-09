import * as S from './styles';
import { color } from '../UI/Colors';

//Components
import ButtonX from "../Button/ButtonX";
import ButtonO from "../Button/ButtonO";
import ButtonReload from '../Button/ButtonReload';

//Context
import React, { useState, useCallback, useEffect } from "react";

export default function GamePlay (
  {
    player1, 
    player2, 
    avaliableMoves,
    setAvaliableMoves,
    movePlayer1,
    movePlayer2,
  }) 
  {
  
  const [player1Moves, setPlayer1Moves] = useState([]);
  const [player2Moves, setPlayer2Moves] = useState([]);
 
  /**
   * PLAY: haldling players moves
   * Objectives: 
   * #1 Write the move in HTML accoding with button click
   * #2 Update player turn
   * #3 Fill array of both players
   * #4 Delete move from avaliableMoves array
   */

  const [whoPlays, setWhoPlays] = useState(player1);
  //1# - Write the move in HTML accoding with button click
  function playerMove(event){
    
    let buttonMove = event.target
  
    if(whoPlays === player1){
      buttonMove.innerHTML = movePlayer1
      buttonMove.style.color = color['satin-sheen-gold']
    } else if(whoPlays === player2){
      buttonMove.innerHTML = movePlayer2
      buttonMove.style.color = color['maximum-blue-green']
    }
  }

  //#2 Update player turn
  function updatePlayerTurn(){
    
    if(whoPlays === player1){
      setWhoPlays(player2)
    } else if(whoPlays === player2){
      setWhoPlays(player1)
    }
  }

  //#3 Fill array of both players
  function updateMovePlayers(event){

    let buttonMove = event.target

    if(whoPlays === player1){
      setPlayer1Moves((prev) => [...prev, buttonMove.id])

    } else if(whoPlays === player2){
      setPlayer2Moves((prev) => [...prev, buttonMove.id])
    }
  }

  function disableButton(event){
    event.target.disabled = true
  }

  function updateAvaliableMoves(event){
    setAvaliableMoves(avaliableMoves.filter(item => item != event.target.id))
  }
  
  //MAIN FUNCTION
  function gamePlayerMove(event){
    updateMovePlayers(event)
    updateAvaliableMoves(event)
    playerMove(event)
    updatePlayerTurn(event)
    disableButton(event)
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

  /**
   * ACCESSORY STATES
   */
  let scorePlayer = []
  let scoreHuman = []
  let scoreTie = []

  /**
   * GAME MANAGEMENT
   */
  const gameResult = useCallback((player, playerMovesArray, victoryConditionArray, remainingMoves) => {

    let playerWins = false
    let humanWins = false
    let tie = false
    
    for(let i = 0; i < victoryConditionArray.length; i++){
      let playerPoints = 0
      for(let item of playerMovesArray){
        if(victoryConditionArray[i].includes(item)){
          playerPoints += 1
        }
        if(playerPoints === 3 && player === 'player'){
          playerWins = true
          if(playerWins === true){
            scorePlayer.push([...scorePlayer, 'player'])
          }
        } else if(playerPoints === 3 && player === 'human'){
          humanWins = true
          if(humanWins === true) {
            scoreHuman.push([...scoreHuman, 'human'])
          }
        } else if(playerWins === false && humanWins === false && remainingMoves.length === 0) {
          tie = true  
          if(tie === true) {
            scoreTie.push('tie')
          }
        }
      }
    }
  }, [playerMove]) 

  gameResult(player1, player1Moves, victoryConditions, avaliableMoves)
  gameResult(player2, player2Moves, victoryConditions, avaliableMoves)
  
  /**
   * SETUP SCOREBOARD
   */
  const [scoreBoardPlayer, setScoreBoardPlayer] = useState(0);
  const [scoreBoardHuman, setScoreBoardHuman] = useState(0);
  const [scoreBoardTie, setScoreBoardTie] = useState(0);

  /**
   * UPDATE SCORE BOARD FOR PLAYER
   */
  useEffect(() => {
    const updateScoreBoardPlayer = () => {
      if(scorePlayer.length === 1) {
        setScoreBoardPlayer((point) => point + 1)
      }
    }
    updateScoreBoardPlayer()
  }, [scorePlayer.length === 1])

  /**
   * UPDATE SCORE BOARD FOR HUMAN
   */
  useEffect(() => {

    const updateScoreBoardHuman = () => {

      if(scoreHuman.length === 1) {
        setScoreBoardHuman((point) => point + 1)
      }
    }
    updateScoreBoardHuman()
  }, [scoreHuman.length === 1])

  /**
   * UPDATE SCORE BOARD FOR TIES
   */
  useEffect(() => {
    const updateScoreBoardTie = () => {
      if(scoreTie.length === 72){
        setScoreBoardTie((point) => point + 1)
      }
    }
    updateScoreBoardTie()
  }, [scoreTie.length === 72])
  
  const gameOverElement = document.querySelector('#game-over-div');
  const buttonOption = document.querySelectorAll('.btn-option');
  
  /**
   * GAME OVER
   */
  useEffect(()=> {
    const gameOver = () => {
        if(scoreBoardPlayer || scoreBoardHuman || scoreBoardTie){
          gameOverElement.style.visibility = 'visible';
          gameOverElement.style.display = 'flex';
          for(let i = 0; i < buttonOption.length; i++){
            buttonOption[i].disabled = true
          }
        }
    }  
    gameOver()
  }, [scoreBoardPlayer, scoreBoardHuman, scoreBoardTie ])
  
  /**
   * NEXT ROUND
   */
  function nextRound () {
    
    gameOverElement.style.visibility = 'hidden'
    setWhoPlays(player1)
    setPlayer1Moves([])
    setPlayer2Moves([])
    setAvaliableMoves([0,1,2,3,4,5,6,7,8])

    buttonOption.forEach((btn) => {
      btn.innerHTML = ''
      btn.disabled = false;
    })
  }

  /**
   * QUIT GAME
   */
  function quitGame() {
    window.location.reload()
  }

  return (
    <>
    <S.DivGameOver hidden id='game-over-div'>
      <S.DivGameOverBoard>
        <S.Text primary>final de jogo</S.Text>
        <S.Text lg green>jogar de novo?</S.Text>
        <S.DivGameOverButtons>
          <S.GameOverButtonQuit onClick={quitGame}>
            <S.Text bold>sair</S.Text>
          </S.GameOverButtonQuit>
          <S.GameOverButtonNextRound onClick={nextRound}>
            <S.Text bold>próxima rodada</S.Text>
          </S.GameOverButtonNextRound>
        </S.DivGameOverButtons>
      </S.DivGameOverBoard>
    </S.DivGameOver>
    <S.Header>
      <S.DivLogo>
        <ButtonX />
        <ButtonO />
      </S.DivLogo>
      <S.ButtonShowTurn>
        <S.DivTurnIndicator>
        </S.DivTurnIndicator>
        <S.Text primary>turn</S.Text>
      </S.ButtonShowTurn>
      <ButtonReload />
    </S.Header>
    <S.DivPlayOptions>
        <S.ButtonPlayOption className='btn-option' id='0' onClick={gamePlayerMove}>
      </S.ButtonPlayOption>
      <S.ButtonPlayOption className='btn-option' id='1' onClick={gamePlayerMove}>
        </S.ButtonPlayOption>
      <S.ButtonPlayOption className='btn-option' id='2' onClick={gamePlayerMove}>
        </S.ButtonPlayOption>
      <S.ButtonPlayOption className='btn-option' id='3' onClick={gamePlayerMove}>
        </S.ButtonPlayOption>
      <S.ButtonPlayOption className='btn-option' id='4' onClick={gamePlayerMove}>
        </S.ButtonPlayOption>
      <S.ButtonPlayOption className='btn-option' id='5' onClick={gamePlayerMove}>
        </S.ButtonPlayOption>
      <S.ButtonPlayOption className='btn-option' id='6' onClick={gamePlayerMove}>
        </S.ButtonPlayOption>
      <S.ButtonPlayOption className='btn-option' id='7' onClick={gamePlayerMove}>
        </S.ButtonPlayOption>
      <S.ButtonPlayOption className='btn-option' id='8' onClick={gamePlayerMove}>
        </S.ButtonPlayOption>
    </S.DivPlayOptions>
    <S.DivScoreBoard>
      <S.DivScorePlayer bgGold>
        <S.Text sm semibold>(X)</S.Text>
        <S.Text id='player1-score' lg bold>{scoreBoardPlayer}</S.Text>
      </S.DivScorePlayer>
      <S.DivScorePlayer bgGray>
        <S.Text sm semibold>empate</S.Text>
        <S.Text id='tie-score' lg bold>{scoreBoardTie}</S.Text>
      </S.DivScorePlayer>
      <S.DivScorePlayer bgGreen>
        <S.Text sm semibold>(O)</S.Text>
        <S.Text id='player2-score' lg bold>{scoreBoardHuman}</S.Text>
      </S.DivScorePlayer>
    </S.DivScoreBoard>
    </>
  )
}