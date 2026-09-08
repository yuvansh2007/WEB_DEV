function Animal() {}
Animal.prototype.run = () => {
  console.log("running");
};
Animal.prototype.eat = () => {
  console.log("eating");
};
Animal.prototype.sleep = () => {
  console.log("sleeping");
};

function Lion() {}
Lion.prototype = Object.create(Animal.prototype);
Lion.prototype.roar = () => {
  console.log("roar");
};
function Wolf() {}
Wolf.prototype.howl = () => {
  console.log("howl");
};

const simba = new Lion();
const summer = new Wolf();

simba.eat();
simba.run();
simba.roar();

summer.howl();
// summer.run();  // this does not work becuase we didnot create the animal prototype in wolf i.e it does not have the properties of animal
