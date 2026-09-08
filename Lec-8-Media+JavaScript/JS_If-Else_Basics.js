let a = 10;
if(a <= 15){
    console.log("this works same as c++");
}
else if( a == 10 || a == 100){
    console.log("checks like in c++ or ||")
}
else{
    console.log("false")
}

console.log(a == 10)//true
console.log(a == "10")//true
// because javascript automatically type converts

console.log(a === "10")//false
// === checks the value and the type doesnot type convert

console.log(a + 10 + "hey")//20hey
//it is smart concatenates string with anything if + operation is given

//ternary operators

console.log(a == 10 ? true : false)//same as c++

console.log (true && true)//logical and condition same as c++
console.log(false || true) //logical or condition same as c++

