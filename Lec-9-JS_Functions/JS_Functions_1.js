// 1ST way to make function

function greet(name, age, address) {
  console.log(`Inside function,hello ${name} ${age} ${(addres = "N/A")}`);
  return "i am returned";
  //Prints undefined as undefined is considered as a value in js when age is not passed
  // can also set a value to be returned if nothing is passed (default value initialization)
}

console.log(greet("ronnie 0046"));

//2ND way to declare funtion

const abc = function () {
  console.log("this is a const function definition");
};
abc();

// 3RD way to declare function

const ArrowFunction = () => {
  console.log("this is arrow function");
};
ArrowFunction();

//Immidiately invoked function
(() => {
  console.log("This is iffies (Imidiately Invoked Functions)");
})();



const person = {
  name: "Tanish",
  greet: function () {
    console.log("Hello");
  },
  greetArrow: () => {
    console.log("hello from arrow");
  },
};

person.getAddress = () => {
  console.log("Address");
};

person.greet();
person.greetArrow();
person.getAddress();