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
  font-size:  1.2rem;
  font-weight: ${props => props.semibold ? 600 : props.bold ? 700 : 500 };
  color: ${props => props.primary ? color.gunmetal['light'] : color.gunmetal[1]};
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
`
