let thisArray
let nameCollection
const minimum=97
const maximum=122


function runThrice() {    
    for (let i = 0; i <= 3; i++) {
        getRandomInt(minimum,maximum);
    }
}

function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
}


Collection = getRandomInt(minimum,maximum);

console.log(nameCollection);