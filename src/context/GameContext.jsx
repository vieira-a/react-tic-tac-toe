import { createContext, useState } from "react";

export const GameContext = createContext();

export const GameContextProvider = ({children}) => {
  
  const [gameOption, setGameOption] = useState(0);
  const [gamePlayer, setGamePlayer] = useState(0);


return (
  <GameContext.Provider 
  value={
    {
      gameOption, 
      setGameOption, 
      gamePlayer, 
      setGamePlayer,
    }
    }>
    {children}
  </GameContext.Provider>
)

}