export const privateLobby = (
   `<div id="displayGameCode"></div>
    
    <div>Players</div>
    <div>Player 1. PlayerName (if (isHost === true) : HOST</div>
    <div>Player 2. PlayerName/NONE (if (isHost === true) : HOST</div>
    <div>Player 3. PlayerName/NONE (if (isHost === true) : HOST</div>
    <div>Player 4. PlayerName/NONE (if (isHost === true) : HOST</div>

    <div id="maxPlayers">(max number of players reached)</div>

    <div>if (isHost === true): Play Button --> onclick: switch to level view, start game on level one</div>

    <div>leave game button --> onclick: if (isHost === true): choose new host, and exit back to start menu, and remove player from page
    otherwise, simply exit to start menu and remove player from page</div>`
)