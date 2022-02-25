const sendButton = document.querySelector(".button");
const textInput = document.querySelector(".input");

const hasNoCharacters = (string) => {
    for (char of string) {if (char !== " ") return false};
    return true;
};

const getText = () => {
    if (textInput.value.length === 0) return "EMPTY";
    if (hasNoCharacters(textInput.value)) return "EMPTY";
    return textInput.value;
};

const sendToServer = () => {
    const textValue = getText();
    fetch("/send-email", {
        method: "POST",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({textValue: textValue})
    })
    .then(res => res.json())
    .then(res => console.log(res));
};

sendButton.addEventListener("click", sendToServer);