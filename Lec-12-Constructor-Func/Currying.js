function add(a,b){
    return a + b;
}

const sum = add(1,5);
console.log(sum);

// same way to do addition of two no.s

function CurryingSum(a) {
    return function(b){
        return a + b;
    }
}
const curryingAdd = CurryingSum(1)(5)
console.log(curryingAdd);


const logger = (level) =>{
    return (message)=>{
        console.log(`[${level}] : ${message}`);
    }
}

logger("info")(`sum = ${sum}`);


logger("info")(`CurryingSum = ${sum}`)
logger("ERROR")("Application stopped");
