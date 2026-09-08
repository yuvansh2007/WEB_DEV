
// // const fetchData = (a) => {
// //     const getData = new Promise((resolve,reject) =>{
// //         setTimeout(() => {
// //             if(a > 10) resolve("Data Fetched")
// //             else reject("Failed")
// //         }, 5000);
// //     });
// //     return getData;
// // }
// // fetchData(20)
// // .then((result) => {
// //     console.log(result);
// // })
// // .catch((err) =>{
// //     console.log(err);
// // })
// // console.log("END");


// console.log("A");
// console.log("B");

// // for (let index = 0; index < 10000000; index++) {}

// // const xyz = ()=>{
// //     console.log("xyz");
// // }

// // const abc = ()=>{
// //     xyz();
// //     console.log("abc");
// // }
// // abc();


// setTimeout(() => {
//     console.log("TIMEOUT");
// });

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("PROMISE")
//     });
// }).then((result) => {
//     console.log(result);
// })

// console.log("C");
// console.log("D");

async function BoilWater() {
    console.log("starting");
    return new Promise((res,rej) =>{
        setTimeout(() => {
            console.log("boiling")
            res();
        }, 5000);
    });
}
async function addtea() {
    return new Promise((res,rej) =>{
        setTimeout(() => {
            console.log("added tea")
            res();
        }, 1000);
    });
}
async function addsugar() {
    return new Promise((res,rej) =>{
        setTimeout(() => {
            console.log("added sugar")
            res();
        }, 1000);
    });
}
async function server() {
    return new Promise((res,rej) =>{
        setTimeout(() => {
            console.log("serve")
            res();
        }, 2000);
    });
}
( async () => {
    await BoilWater();
    await addtea();
    await addsugar();
    await server();
})();
