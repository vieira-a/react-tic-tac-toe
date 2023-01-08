# Refactoring notes

## Objectives
Make the application more functional and descriptive.

## Review

### GameContext.jsx

1- There ware many functions with same responsabilities regarding the initial game setup. This functions ware in the `GameContext.jsx` component, but would not be used by more then one component, just the `GameSetup.jsx` component.

- Setup defaults: 
  - `player1` as 'player' and `player2` as 'human';
  - `move1` as 'X' and `move2` as 'O'
  - `movePlayer1` as ``move1`` and `movePlayer2` as `move2`

- I created just one function to handle the initial game setup: `handleGamePlayers`. This function was moved from the `GameContext.jsx` to the `GameSetup.jsx` component.

With those variables and this function, you can setup who plays and what each player will play; this is the initial game setup needed.

2- There were one function to start the game named startGame, that change many context states; this could cause bugs when changing from other game states.

- I created a generical function to change the stages of the game: `changeGameStage`; this function is in `GameContext.jsx` because could be used by more than one component.

### GamePlay.jsx

1- The function ``handlePlayerMove`` is responsible for handling many stages during the game:

- `setPlayer1Moves` and `setPlayer1Moves` arrays updated after each move
- `setPlayerTurn`: 'player1' or 'player2'

This function was replaced by `updateMovePlayers` function, responsible now just by fill move array of players.
I make separate functions to disable and enable buttons on click, and update the array of avaliable moves.

Now, a main function named `gamePlayerMove` is responsible by call this others functions, and:

- Update player moves array;
- Update avaliable moves array;
- Write the move player in HTML;
- Update who plays after each move;
- Disable button.

2- There was more 2 functions: `handlePlayer1Moves` and `handlePlayer2Moves` to get the each item of `player1Moves` and `player2Moves` (that was an object with key and value) and fill others arrays `player1Amount` and `player2Amount`, with just the values.

With the function `updateMovePlayers` I just fill the players arrays with the values.

