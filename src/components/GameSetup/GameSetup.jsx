//Styles
import * as S from './styles';
import { color } from '../UI/Colors';

//Components
import ButtonX from "../Button/ButtonX";
import ButtonO from "../Button/ButtonO";

//Contetx
import { useContext } from "react";
import { GameContext } from "../../context/GameContext";

export default function GameSetup() {

  const 
  {
    gameOption, 
    setGameOption, 
    gamePlayer, 
    setGamePlayer,
    gameStage,
    setGameStage, 
    handleGameOption,
    handleGameStage
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
            <S.ButtonOption isEnabled disabled={gameOption === 0 ? true : false} onClick={handleGameOption}>
              <ButtonX fill={color['charleston-green']}/>
            </S.ButtonOption>
          </S.SetupButton>
          <S.SetupButton>

            <S.ButtonOption disabled={gameOption === 1 ? true: false} onClick={handleGameOption}>
              <ButtonO fill={color.gunmetal['light']}/>
            </S.ButtonOption>
          </S.SetupButton>
        </S.SetupOption>

        <S.Text semibold primary>remember: x goes first</S.Text>

    </S.SetupSection>

    <S.SetPlayerSection>

      <S.ButtonSetPlayer bgGold shadowGold onClick={handleGameStage}>
        <S.Text bold>new game (vs cpu)</S.Text>
      </S.ButtonSetPlayer>

      <S.ButtonSetPlayer bgGreen shadowGreen onClick={handleGameStage}>
        <S.Text bold>new game (vs player)</S.Text>
      </S.ButtonSetPlayer>

    </S.SetPlayerSection>
    </>
  )
}