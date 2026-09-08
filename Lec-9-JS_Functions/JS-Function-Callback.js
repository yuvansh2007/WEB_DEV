// const calculateArea = (shape,areaCalculation,... arguments)=>{ //rest operator
//     const areaParams = arguments;
//     console.log(`Shape : ${shape}`,areaCalculation(... areaParams));// spread operator
// }

// const squareArea = (side)=>{
//     console.log(side);
//     return side * side;
// }
// const cuboidArea = (h,w,l)=>{
//     console.log(w,h,l);
//     return 2*(h*w + w*l + l*h);
// }


// calculateArea("square",squareArea,10);
// calculateArea("cuboid",cuboidArea,1,3,4);



let arr = [10,20,30,40];
//for each- does not return
arr.forEach ((element,index) => {
    console.log(`${element} at ${index}`);
});

//map-Always returns
const addedsum = arr.map((element,index) => {
    return element + 20;
});
console.log(addedsum);

//filter-only prints the element not the added value
const filtersum = arr.filter((element,index) => {
    if(element < 30){
        return element + 20;
    }
})
console.log(filtersum);

//reduce
const sum = arr.reduce((accumilator,element) => {
    return accumilator + element;
},0);
console.log(sum);

// //includes
console.log(arr.includes(1));