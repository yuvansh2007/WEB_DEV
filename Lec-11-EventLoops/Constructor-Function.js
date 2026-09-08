function Person(name) {
    this.name = name;
    this.greet = () => {
      console.log("hello", this.name); // if console.log("hello",name) this is used then name creates this.name a closure
    };
    this.setName = (newname) => {
        this.name = newname;
    };
}
// New keyword creates an empty object {} and binds it to the function
const person = new Person("rahul");
const rajesh = new Person("Rajesh");
person.greet();

console.log(rajesh.name);

person.setName("ramesh");
person.greet();
