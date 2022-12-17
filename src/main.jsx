import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//Context to Game Setup
import { GameContextProvider } from '../src/context/GameContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GameContextProvider>
      <App />
    </GameContextProvider>
  </React.StrictMode>,
)
