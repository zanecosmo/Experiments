const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const func = (end) => {
    for (let i = 0; i < end; i++) {
        console.log(array[i]);
    };
};

const shortFor = (value, array, callback) => {
    let stopper = 1;
    for (let i = 0; i < stopper; i++) {
        array[i] === value ? callback(i) : stopper++
    };
};

shortFor(5, array, func);

