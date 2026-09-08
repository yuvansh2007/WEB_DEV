function Animal(name,type) {
    console.log(name,type);
    if(!name || !type){
        throw new Error("Invalid Arr");
    }
    this.name = name;
    this.type = type
}
Animal.prototype.run = () => {
  console.log("running");
};
Animal.prototype.eat = () => {
  console.log("eating");
};
Animal.prototype.sleep = () => {
  console.log("sleeping");
};

function Lion(name,type,x) {
    Animal.call(this,name,type)
    if(!x){
        throw new Error("Invalid arr");
    }
    this.x = x
}
Lion.prototype = Object.create(Animal.prototype);
Lion.prototype.roar = () => {
  console.log("roar");
};

Lion.prototype.constructor = Lion; // Mandatory Line

const simba = new Lion("name","type","x");

console.log(simba.roar());