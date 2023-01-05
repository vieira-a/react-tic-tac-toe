//Styles
import * as S from './styles';

//Components
import ButtonX from "../Button/ButtonX";
import ButtonO from "../Button/ButtonO";

//Contetx
import { useContext } from "react";
import { GameContext } from "../../context/GameContext";

export default function GameSetup() {

  const 
  {
    /**New Refactoring */
    player1,
    player2,
    setPlayer1,
    setPlayer2,
    movePlayer1,
    setMovePlayer1,
    movePlayer2,
    setMovePlayer2,
    gameStage,
    setGameStage, 
    /**End of new refactoring */
    playerOption,
    setPlayerOption,
    cpuOption,
    setCpuOption,
    humanOption,
    setHumanOption,
    playerTurn,
    setPlayerTurn,
    player1Moves,
    setPlayer1Moves,
    player2Moves,
    setPlayer2Moves,
    setupGameOptions,
    startGame,
    gamePlayer, 
    setGamePlayer,
    handleGameOption,
    handleGameStage,
  } = useContext(GameContext);

  function handleGamePlayers () {
    if(player1 === 'player' && player2 === 'human'){
      setPlayer1('human')
      setPlayer2('player')
    } else if(player1 === 'human' && player2 === 'player'){
      setPlayer1('player')
      setPlayer2('human')
    }
  }
  function handleMovePlayers () {
    if(movePlayer1 === move1 && movePlayer2 === move2){
      setMovePlayer1(move2)
      setMovePlayer2(move1)
    } else if(movePlayer1 === move2 && movePlayer2 === move1){
      setMovePlayer1(move1)
      setMovePlayer2(move2)
    }
  }

  

  return (
    <>
    <S.Header>

      <ButtonX />
      <ButtonO />

    </S.Header>

    <S.SetupSection>
        
        <S.Text semibold primary>escolha um jogador</S.Text>

        <S.SetupOption>
          <S.SetupButton>
            <S.ButtonOption disabled={playerOption === 0 ? true : false} onClick={setupGameOptions}>
              <ButtonX />
            </S.ButtonOption>
          </S.SetupButton>
          <S.SetupButton>

            <S.ButtonOption disabled={playerOption === 1 ? true: false} onClick={setupGameOptions}>
              <ButtonO />
            </S.ButtonOption>
          </S.SetupButton>
        </S.SetupOption>

        <S.Text semibold primary>lembre-se: x começa</S.Text>

    </S.SetupSection>

    <S.SetPlayerSection>

      <S.ButtonSetPlayer id='1' bgGold shadowGold onClick={startGame}>
        <S.Text>novo jogo (vs cpu)</S.Text>
        
      </S.ButtonSetPlayer>

      <S.ButtonSetPlayer id='2' bgGreen shadowGreen onClick={startGame}>
        <S.Text>novo jogo (vs humano)</S.Text>
      </S.ButtonSetPlayer>

    </S.SetPlayerSection>
    </>
  )
}