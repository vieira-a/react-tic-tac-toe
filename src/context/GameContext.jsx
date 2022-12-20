import { createContext, useState } from "react";
import ButtonO from "../components/Button/ButtonO";
import ButtonX from "../components/Button/ButtonX";

export const GameContext = createContext();

export const GameContextProvider = ({children}) => {
  
  const [gameOption, setGameOption] = useState(0); // 0-x | 1-o
  const [gamePlayer, setGamePlayer] = useState(0); // 0-user | 1-cpu | 2-human
  const [gameStage, setGameStage] = useState(0);

  const handleGameOption = (event) => {
    if(gameOption === 0){
      setGameOption(1);
    } else if(gameOption === 1){
      setGameOption(0);
    }
  }

  const handleGameStage = () => {
    if(gameStage === 0) {
      setGameStage(1);
    } else if(gameStage === 1){
      setGameStage(2)
    }
  }

  const handleGameTurn = () => {
    if(gameOption === 0) {
    return <ButtonX />
    } else {
      return <ButtonO />
    }
  }

return (
  <GameContext.Provider 
  value={
    {
      gameOption, 
      setGameOption, 
      gamePlayer, 
      setGamePlayer,
      gameStage,
      setGameStage,
      handleGameOption,
      handleGameStage,
      handleGameTurn,
    }
    }>
    {children}
  </GameContext.Provider>
)
}