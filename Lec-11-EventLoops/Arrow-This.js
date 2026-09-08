const person = {
    name: "rahul",
    greet: function(){
        console.log(this.name);
    },
};

person.greet();
function abc(){
    console.log(this);
}
abc();

const arrow = ()=>{
    console.log(this);
}


const outer = {
    a: ["apple","pineapple"],
    arrow: ()=>{
        console.log(this);
    },
    inner: function (){
        this.a.forEach(() => {
            console.log(this);
        })
    },
};

outer.arrow();
outer.inner();