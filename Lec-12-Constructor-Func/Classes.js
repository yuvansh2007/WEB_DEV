class Animal{
    constructor(type) {
        if(!type){
            throw new Error("Invalid Arr");
            
        }
        this.type = type
    }
    run() {
        console.log("running");
    }
    eat() {
        console.log("eating");
    }
}
class Lion extends Animal {
    constructor(type,name) {
        super(type);
        if(!name){
            throw new Error("Invalid");
            
        }
        this.name = name
    }
    roar() {
        console.log("roar");
    }
}

const simba = new Lion("Carnivorous","simba")
console.log(simba.type);
console.log(simba.name);
simba.eat();
simba.roar();