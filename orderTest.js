const one = 1,
    two = 2,
    three = 3;

const callAdd = (one, two, three) => addVariables(one, two, three);

const addVariables = (one, two, three) => console.log(`sum is ${one + two + three}`);

callAdd(one, two, three);