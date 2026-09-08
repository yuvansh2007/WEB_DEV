function Animal (type){
    this.type = type;
    // this.dangerous = function (){
    // ____________________________________________________________________
    
    // this this.dangerous function takes extra memory in the function

    // ____________________________________________________________________

    //     if(this.type === "carnivorous"){
    //         console.log("Dangerous");
    //     }else{
    //         console.log("safe");
    //     }
    // }
}

Animal.prototype.dangerous = function () {
    if(this.type === "carnivorous"){
        console.log("Dangerous");
    }else{
        console.log("safe");
    }
}

const cat = new Animal("omnivorous")
const lion = new Animal("carnivorous")
const dog = new Animal("omnivorous");

cat.dangerous();
lion.dangerous();


// we can verify this usage of extra space by using  => 
 