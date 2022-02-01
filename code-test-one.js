const removeListener = (e) => {
    console.log("PRESS SPACE INFINITELY");
    if (e.key === " ") {
        document.removeEventListener("keydown", removeListener);
        document.addEventListener("keydown", removeListener);
    };
};

document.addEventListener("keydown", removeListener);

