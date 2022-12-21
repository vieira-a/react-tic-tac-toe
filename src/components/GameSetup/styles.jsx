import styled from "styled-components";
import { color, shadow } from "../UI/Colors";

export const Header = styled.header`
  margin-top: 10rem;
  display: flex;
  gap: 0.8rem;
  justify-content: center;
`

export const Text = styled.p`
  font-size:  1.2rem;
  font-weight: ${props => props.semibold ? 600 : props.bold ? 700 : 500 };
  color: ${props => props.primary ? color.gunmetal['light'] : color.gunmetal[1]};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`
export const SetupSection = styled.section`
  padding: 1.6rem 2.4rem;
  margin-block: 4.2rem;
  background-color: ${color.gunmetal[4]};
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
`

export const SetupOption = styled.div`
  width: 100%;
  background-color: ${color.gunmetal[1]};
  border-radius: 8px;
  display: flex;
  flex-direction: row;
`

export const SetupButton = styled.div`
  width: 100%;
  padding-inline: 1.3rem;
  display: flex;
  flex-direction: row;
  gap: 1.3rem;
  justify-content: center;
  padding-block: 0.8rem;

`

export const ButtonOption = styled.button`
  width: 100%;
  height: 4.8rem;
  border-radius: 6px;
  background-color: ${color.gunmetal[1]};
  cursor: pointer;
  &[disabled]{
    background-color: ${color.gunmetal['light']};
    }
`
export const SetPlayerSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
`

export const ButtonSetPlayer = styled.button`
  width: 100%;  
  height: 4rem;
  background: ${props => props.bgGold ? color["satin-sheen-gold"] : props.bgGreen ? color["maximum-blue-green"] : 'none'};
  box-shadow: ${props => props.shadowGold ? shadow.gold : props.shadowGreen ? shadow.green : 'none'};
  border-radius: 8px;
  cursor: pointer;
  transform: translate
`