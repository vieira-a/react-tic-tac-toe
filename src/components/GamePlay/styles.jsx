import styled from "styled-components";
import { color, shadow } from "../UI/Colors";
/**
 * Header > Section > Section
 */
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 2.4rem;
  margin-bottom: 3.8rem;
`

export const DivLogo = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
`

export const ButtonShowTurn = styled.button`
  background: ${color.gunmetal[4]};
  box-shadow: ${shadow.gunmetal['sm']};
  padding: 0.8rem 1.2rem;
  border-radius: 4px;
  display: flex;
  gap: 0.8rem;
`

export const DivTurnIndicator = styled.div`
  display: flex;
`

export const Text = styled.p`
  font-size: ${props => props.sm ? '1.2rem' : props.lg ? '1.8rem' : '1.4rem'};
  font-weight: ${props => props.semibold ? 600 : props.bold ? 700 : 500 };
  color: ${props => props.primary ? color.gunmetal['light'] : props.green ? color['maximum-blue-green'] : color.gunmetal[1]};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`

export const DivPlayOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.8rem;
`

export const ButtonPlayOption = styled.button`
  height: 8.4rem;
  border-radius: 8px;
  background-color: ${color.gunmetal[4]};
  box-shadow: ${shadow.gunmetal['lg']};
  font-family: 'Fredoka', sans-serif;
  font-size: 4.8rem;
  font-weight: 700;
  color: ${props => props.buttonGold ? color["satin-sheen-gold"] : props.buttonGreen ? color["maximum-blue-green"] : 'none'};
`

export const DivScoreBoard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 3.6rem;
`

export const DivScorePlayer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.8rem 2.2rem;
  border-radius: 8px;
  background-color: ${props => 
    props.bgGold ? color["satin-sheen-gold"] : 
    props.bgGreen ? color["maximum-blue-green"] :
    props.bgGray ? color.gunmetal['light'] : 'none'
  };
`

export const DivGameOver = styled.div`
  position: absolute;
  justify-content: center;
  width: 100vw;
  height: 20rem;
  left: 0;
  top: 22rem;
  background-color: ${color.gunmetal['4']};
  visibility: ${props => props.hidden ? 'hidden': 'visible'};
`

export const DivGameOverBoard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`

export const DivGameOverButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`

export const GameOverButtonQuit = styled.button`
  background-color: ${color.gunmetal['light']};
  padding: 1rem;
  border-radius: 4px;
  box-shadow: ${shadow.gray}
`

export const GameOverButtonNextRound = styled.button`
  background-color: ${color["satin-sheen-gold"]};
  padding: 1rem;
  border-radius: 4px;
  box-shadow: ${shadow.gold};
`
