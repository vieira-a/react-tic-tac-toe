import styled from "styled-components";
import { color, shadow } from "../UI/Colors";
/**
 * Header > Section > Section
 */
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2.4rem;
`

export const DivLogo = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
`

export const ButtonShowTurn = styled.button`
  background: ${color.gunmetal[4]};
  box-shadow: ${shadow.gunmetal};
  padding: 0.8rem 1.2rem;
`
export const Text = styled.p`
  font-size:  1.2rem;
  font-weight: ${props => props.semibold ? 600 : props.bold ? 700 : 500 };
  color: ${props => props.primary ? color.gunmetal['light'] : color.gunmetal[1]};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`
