console.log("start");
let step = {
    stepNum: 1,
    num: (log,func) => {
        console.log(`${step.stepNum.toString()}. ${log}`);
        func();
        step.stepNum++;
    }
};
    
    
    
// let step = 1;
// const s = (func,log) => {
//     console.log(`${step.toString()}. ${log}`);
//     func();
//     step++;
// };

const write = () => {
    console.log("stuff");
}

const writeAgain = () => {
    console.log("more stuff");
}

step.num("WRITE CALLED", write);
step.num("WRITE-AGAIN CALLED", writeAgain);
step.num("WRITE CALLED A SECOND TIME", write);

console.log("end");