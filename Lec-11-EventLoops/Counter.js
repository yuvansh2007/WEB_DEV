const counter = (initial) =>{
    let count = initial
    return{
        increment: ()=>{
            return count++;
        },
        decrement: ()=>{
            return count--;
        },
        get: ()=>{
            return count;
        },
    }
}

const cnt = counter(10);
console.log(cnt.increment());
console.log(cnt.increment());
console.log(cnt.decrement());
console.log(cnt.get());