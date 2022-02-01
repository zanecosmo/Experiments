// 260 fillers for 185 pills
// -50 pills (135 pills)

const numOfPills = 185;
const fillerUnits = 400;

const findProportion = () => {
    return fillerUnits/numOfPills;
};

const fillersPerPill = findProportion();

const totalPills = numOfPills-50;

const totalFillers = fillersPerPill*totalPills;

console.log(`total number of fillers needed: ${Math.ceil(totalFillers)}`);