//Will print 0 -> 9
for (let c = 0; c < 10; c++) {
  setTimeout(() => {
    console.log(c);
  }, 10);
}

//Will print 10 -> 10 times
let x = 0;
for (; x < 10; x++) {
  setTimeout(() => {
    console.log(x);
  }, 10);
}

//Will print 10 -> 10 times
for (var k = 0; k < 10; k++) {
  setTimeout(() => {
    console.log(k);
  }, 10);
}

//Will print 10 -> 10 times
let i = 0;
while (i < 10) {
  setTimeout(() => {
    console.log(i);
  }, 10);
  i++;
}

//Will print 0 -> 9
let j = 0;
while (j < 10) {
  const a = j;
  setTimeout(() => {
    console.log(a);
  }, 10);
  j++;
}

const counter = () => {
    let count = 10;
    return function increment()  {
        return ++count;
    }
}

const inc = counter();
console.log(inc());
console.log(inc());
console.log(inc());
console.log(inc());
console.log(inc());

const inc2 = counter();
console.log(inc2());
console.log(inc2());

console.log(" INC 1- ", inc()," INC 2- ",inc2());

const counterINCDEC = () => {
  let count = 10;
  const inc = () => ++count;
  const dec = () => --count;

  return { inc, dec };
};

const { inc, dec } = counterINCDEC();

console.log(inc());
console.log(inc());
console.log(inc());
console.log(dec());
console.log(dec());

let globalVal = 10;

const outer = () => {
  let outerVal = 30;
  function inner() {
    let innerVal = 40;
    console.log(innerVal); //Accessbile -> 40
    console.log(outerVal); //Accessible -> 30
    console.log(globalVal); //Accessible -> 10
  }

  inner();
};

outer();
