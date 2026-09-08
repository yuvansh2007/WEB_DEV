let arr = [10, 20, 30, "hey", true]; //in JS arrays are hetergenous we can add mixed typed values

console.log(arr);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log("FOR OF LOOP START");
for (const a of arr) {
  console.log(a);
}
console.log("FOR OF LOOP END");

console.log("FOR IN LOOP START");
for (const idx in arr) {
  //idx is the index of arr
  console.log(arr[idx]);
}
console.log("FOR IN LOOP END");

let name = "rahul";
//Strings are immutable and cannot be changed using indexs i.e name[0] = "t" wont work
for (let j = 0; j < name.length; j++) {
  console.log(name[j]);
}

console.log("WHILE");

let a = 1;
while (a < 10) {
  console.log(a);
  a++;
}

console.log("DO WHILE");
do {
  console.log(a);
  a--;
} while (a > 0);
