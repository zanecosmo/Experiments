
players = [];

const addPlayers = (numberOfPlayers) => {
    for (let i = 0; i < numberOfPlayers; i++) {
        players.push({keys: []});
    };
};


const dealCards = () => {
    let cards = ["w", "a", "s", "d"];
    while (cards.length > 1) {
        for (let i = 0; i < players.length; i++) {
            const num = Math.floor(Math.random()*cards.length);
            const card = cards.splice(num, 1);
            players[i].keys.push(card[0]);
            console.log(players[i]);
        };
    };
    if (players.length % 2 !== 0) {
        const index = Math.floor(Math.random()*players.length);
        players[index].keys.push(cards[0]);
    };
};
    
addPlayers(4);
dealCards();

console.log(players);