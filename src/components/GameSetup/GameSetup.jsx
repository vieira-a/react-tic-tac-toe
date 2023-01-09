//Styles
import * as S from './styles';

//Components
import ButtonX from "../Button/ButtonX";
import ButtonO from "../Button/ButtonO";

//Hooks
import { useState } from 'react';
import GamePlay from '../GamePlay/GamePlay';

export default function GameSetup({
  player1, 
  setPlayer1,
  player2, 
  setPlayer2,
  avaliableMoves,
  setAvaliableMoves,
  movePlayer1,
  setMovePlayer1,
  movePlayer2,
  setMovePlayer2,
  gameStage,
  setGameStage
}) {

  /**
   * SETUP: Functions to handle who and what each player will play
   * Default: player1 = player - player2 = human | player1 move = X - player 2 move = O
   * That functions will change the states after each move
   */

  //Handle which player will play first
  function handleGamePlayers () {
    if(player1 === 'player' && player2 === 'human'){
      setPlayer1('human')
      setPlayer2('player')
    } else if(player1 === 'human' && player2 === 'player'){
      setPlayer1('player')
      setPlayer2('human')
    }
  }

  return (
    <>
      <S.Header>
        <ButtonX />
        <ButtonO />
      </S.Header>
      <S.SetupSection>    
        <S.Text semibold primary>quer jogar x ou o ?</S.Text>
        <S.SetupOption>
          <S.SetupButton>
            {/* <S.ButtonOption disabled={playerOption === 0 ? true : false} onClick={setupGameOptions}>
              <ButtonX />
            </S.ButtonOption> */}
            <S.ButtonOption disabled={player1 === 'player' ? true : false} onClick={handleGamePlayers}>
              <ButtonX />
            </S.ButtonOption>
          </S.SetupButton>
          <S.SetupButton>
          <S.ButtonOption disabled={player2 === 'player' ? true: false} onClick={handleGamePlayers}>
              <ButtonO />
            </S.ButtonOption>
            {/* <S.ButtonOption disabled={playerOption === 1 ? true: false} onClick={setupGameOptions}>
              <ButtonO />
            </S.ButtonOption> */}
          </S.SetupButton>
        </S.SetupOption>
        <S.Text semibold primary>lembre-se: x começa</S.Text>
      </S.SetupSection>
      <S.SetPlayerSection>
        <S.ButtonSetPlayer disabled id='1' bgGold shadowGold>
          <S.Text>novo jogo (vs cpu)</S.Text>
        </S.ButtonSetPlayer>
        <S.ButtonSetPlayer id='2' bgGreen shadowGreen onClick={()=>setGameStage(1)}>
          <S.Text>novo jogo (vs humano)</S.Text>
        </S.ButtonSetPlayer>
      </S.SetPlayerSection>
      {gameStage === 1 && <GamePlay/>}
    </>
  )
}