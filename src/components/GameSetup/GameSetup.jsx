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