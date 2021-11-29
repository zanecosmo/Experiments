const click = (id, callback) => {
    document.getElementById(id).addEventListener("click", callback);
};

const id = id => document.getElementById(id);