let obj = {
    name:"abc",
    age: 26,
    address: {
        lane: "xyz",
        road: "civil",
    },
};

console.log(obj.age,obj["name"],obj.address.lane);

obj.gender = "male";

console.log(obj.gender);

obj.age = 27;
console.log(obj);

console.log(obj.address?.house?.no);//OPTIONS

// For of loop doesnot work on objs

for (const key in obj) { 
    console.log(obj[key]);
}