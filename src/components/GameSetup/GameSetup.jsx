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
    player1Moves,
    setPlayer1Moves,
    player2Moves,
    setPlayer2Moves,
    setupGameOptions,
    startGame,
    /**End of refactoring */
    gamePlayer, 
    setGamePlayer,
    gameStage,
    setGameStage, 
    handleGameOption,
    handleGameStage,
  } = useContext(GameContext);

  return (
    <>
    <S.Header>

      <ButtonX />
      <ButtonO />

    </S.Header>

    <S.SetupSection>
        
        <S.Text semibold primary>pick player 1' mark</S.Text>

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

        <S.Text semibold primary>remember: x goes first</S.Text>

    </S.SetupSection>

    <S.SetPlayerSection>

      <S.ButtonSetPlayer id='1' bgGold shadowGold onClick={startGame}>
        new game (vs cpu)
      </S.ButtonSetPlayer>

      <S.ButtonSetPlayer id='2' bgGreen shadowGreen onClick={startGame}>
        new game (vs player)
      </S.ButtonSetPlayer>

    </S.SetPlayerSection>
    </>
  )
}