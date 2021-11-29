// import {menuShell} from "/menu_shell";
// import {startPage} from "/start_part";
// import {privateLobby} from "/private_lobby";
// import {joinPage} from "/join_page";

console.log("something");

outerShell = document.getElementById('shell');
partial = document.getElementById('partial');

const renderShell = (shell) => {
    if (shell === null) {outershell.innerHTML = menuShell}
    else {outerShell.innerHTML = shell}
}

renderShell();

const renderPartial = (part) => {
    if (part === null) {partial.innerHTML = startPage}
    else {partial.innerHTML = part}    
}

renderPartial();

menuPage.innerHTML = menuShell;

const startButton = grab("startButton");
const joinButton = grab("joinButton");

if (startButton) {startButton.onclick = renderPartial(privateLobby)}
if (joinButton) {joinButton.onclick = renderPartial(joinPage)}