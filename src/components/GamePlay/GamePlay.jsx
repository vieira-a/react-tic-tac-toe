import * as S from './styles';
import { color } from '../UI/Colors';

//Components
import ButtonX from "../Button/ButtonX";
import ButtonO from "../Button/ButtonO";
import ButtonReload from '../Button/ButtonReload';

//Context
import React, { useContext, useState, useCallback, useEffect } from "react";
import { GameContext } from "../../context/GameContext";

export default function GamePlay () {
  
  const 
  {
   /**Refactoring */
    player1,
    player2,
    movePlayer1,
    movePlayer2,
    move1,
    move2,
    playerTurn,
    setPlayerTurn,
    startGame,
   /**End of refactoring */
    avaliableMoves,
    setAvaliableMoves,
  } = useContext(GameContext);

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
      setPlayer1Moves((prev) => {
        return {
          ...prev, [buttonMove.id] : buttonMove.id
        }
      })

    } else if(whoPlays === player2){
      setPlayer2Moves((prev) => {
        return {
          ...prev, [buttonMove.id] : buttonMove.id
        }
      })
    
    }
  }

  function disableButton(event){
    event.target.disabled = true
  }

  function enableButton(event){
    event.target.disabled = false
  }

  function updateAvaliableMoves(event){
    setAvaliableMoves(avaliableMoves.filter(item => item != event.target.id))
  }

  //NEW MAIN FUNCTION
  function gamePlayerMove(event){
    updateMovePlayers(event)
    updateAvaliableMoves(event)
    playerMove(event)
    updatePlayerTurn(event)
    disableButton(event)

  }

  // console.log('PLAYER1 MOVES', player1Moves)
  // console.log('PLAYER2 MOVES', player2Moves)
  //console.log('AVALIABLE MOVES', avaliableMoves)

  //OLD FUNCTION
  const handlePlayerMove = (event) => {

    if(playerTurn === 'player1') {
      event.target.innerHTML = 'X'
      event.target.style.color = color['satin-sheen-gold']
      setPlayer1Moves((prev) => {
        return {
          ...prev, [event.target.id] : event.target.id
        }
      })

      event.target.disabled = true;
      
    } else if(playerTurn === 'player2') { 
      event.target.innerHTML = 'O'
      event.target.style.color = color['maximum-blue-green']
      setPlayer2Moves((prev) => {
        return {
          ...prev, [event.target.id] : event.target.id
        }
      })
      event.target.disabled = true;
      //setPlayerTurn('player1')
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

  const scorePlayers = {
    player1: 0,
    player2: 0,
    tie: 0
  }

  //console.log('Score players: ', scorePlayers)

  const scoreBoardTie = document.getElementById('tie-score');
  const divGameOver = document.getElementById('game-over-div');
  const buttonOption = document.querySelectorAll('.btn-option');
  
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

  function checkWinCondition (arrOrig, arrDest, player, status) {
    
    for(let i = 0; i < arrDest.length; i++) {
      let counter = 0
      for(let item of arrOrig) {
        if(arrDest[i].includes(item)) {
          counter += 1
      } 
      if(counter === 3){
        scorePlayers[player] += 1
        updateScorePlayers()
        
      } else {
        scorePlayers.tie += 1
        updateScorePlayers()   
      } 
    }

    useEffect(()=> {
      
      if(counter === 3 || scorePlayers.tie === 72) {
        divGameOver.style.visibility = 'visible';
        //setGameStage(2)
      }
  
    }, [counter, scorePlayers.tie])
    
    }
    
    useCallback(() => {
      
    }, [handlePlayerMove])

    //console.log(scorePlayers)
  }
  
  function updateScorePlayers() {
    let scoreTie = 0
    
    if(scorePlayers.tie === 72){
      scoreTie ++
    }
    scoreBoardTie.innerHTML = scoreTie
  
  }

  function scoreBoardUpdatedPlayer1 () {
    return scorePlayers.player1
  }

  function scoreBoardUpdatedPlayer2 () {
    return scorePlayers.player2
  }

  function nextRound () {
    divGameOver.style.visibility = 'hidden';
    
    buttonOption.forEach((btn) => {
      btn.innerHTML = ''
      //btn.disabled = false;
    })
    startGame()
  }

  function quitGame() {
    window.location.reload()
  }

  // console.log('Player 1 move: ', player1Moves)
  // console.log('Player1 amount: ', player1Amount)

  handlePlayer1Moves()
  handlePlayer2Moves()
  checkWinCondition(player1Amount, victoryConditions, 'player1')
  checkWinCondition(player2Amount, victoryConditions, 'player2')

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
          {/* {handleGameTurn()} */}

        </S.DivTurnIndicator>
        <S.Text primary>turn</S.Text>
      </S.ButtonShowTurn>
      <ButtonReload />
    </S.Header>
    <S.DivPlayOptions>
     
      {/* <S.ButtonPlayOption className='btn-option' id='0' onClick={handlePlayerMove}>
      </S.ButtonPlayOption>
      <S.ButtonPlayOption className='btn-option' id='1' onClick={handlePlayerMove}>
        </S.ButtonPlayOption>
      <S.ButtonPlayOption className='btn-option' id='2' onClick={handlePlayerMove}>
        </S.ButtonPlayOption>
      <S.ButtonPlayOption className='btn-option' id='3' onClick={handlePlayerMove}>
        </S.ButtonPlayOption>
      <S.ButtonPlayOption className='btn-option' id='4' onClick={handlePlayerMove}>
        </S.ButtonPlayOption>
      <S.ButtonPlayOption className='btn-option' id='5' onClick={handlePlayerMove}>
        </S.ButtonPlayOption>
      <S.ButtonPlayOption className='btn-option' id='6' onClick={handlePlayerMove}>
        </S.ButtonPlayOption>
      <S.ButtonPlayOption className='btn-option' id='7' onClick={handlePlayerMove}>
        </S.ButtonPlayOption>
      <S.ButtonPlayOption className='btn-option' id='8' onClick={handlePlayerMove}>
        </S.ButtonPlayOption> */}

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
        <S.Text id='player2-score' lg bold>{scoreBoardUpdatedPlayer1()}</S.Text>
      </S.DivScorePlayer>

      <S.DivScorePlayer bgGray>
        <S.Text sm semibold>empate</S.Text>
        <S.Text id='tie-score' lg bold>0</S.Text>
      </S.DivScorePlayer>

      <S.DivScorePlayer bgGreen>
        <S.Text sm semibold>(O)</S.Text>
        <S.Text id='player1-score' lg bold>{scoreBoardUpdatedPlayer2()}</S.Text>
      </S.DivScorePlayer>
      
    </S.DivScoreBoard>
    
    {/* <S.ButtonPlayOption id='game-over' onClick={gameOver}>
      Game over
    </S.ButtonPlayOption> */}

    </>
  )
}