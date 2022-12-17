import { createContext, useState } from "react";

export const GameContext = createContext();

export const GameContextProvider = ({children}) => {
  
  const [gameOption, setGameOption] = useState(0); // 0-x | 1-o
  const [gamePlayer, setGamePlayer] = useState(0); // 0-user | 1-cpu | 2-human
  const [gameStage, setGameStage] = useState(0); // 0-setup | 1-play | 2- gameover

  const handleGameOption = () => {
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
      handleGameStage
    }
    }>
    {children}
  </GameContext.Provider>
)

}