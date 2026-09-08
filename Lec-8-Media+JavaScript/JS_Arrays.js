let arr = [10 , 20 , "hey" , true];

console.log(arr)//prints the whole array

for(let i = 0 ; i < arr.length ; i++){
    console.log(arr[i]);
}

let name = "hello";

for (let i = 0; i < name.length; i++) {
    console.log(name[i]);    
}
console.log("__________________________________________________________");
console.log("__________________________________________________________");
console.log("__________________________________________________________");

console.log( "For Each Loop" );

arr.forEach(element => {
    console.log(element);
});

console.log("__________________________________________________________");
console.log("__________________________________________________________");
console.log("__________________________________________________________");


console.log("For of Loop");


for (const a of arr) {
    console.log(a);
}



console.log("For in Loop");
console.log("Prints the indexes of arr");

for (const a in arr) {    
    console.log(a);
}

