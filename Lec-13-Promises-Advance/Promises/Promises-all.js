const p1 = new Promise((res,rej) =>{
    setTimeout(() => {
        res(("p1"))
    }, 1000);
});
const p2 = new Promise((res,rej) =>{
    setTimeout(() => {
        res(("p2"))
    }, 2000);
});
const p3= new Promise((res,rej) =>{
    setTimeout(() => {
        rej(("p3"))
    }, 1000);
});


const execute = async () => {
    try {        
        console.time("start");
        const response = await Promise.all([p1,p2,p3])
        console.log(response);
    } catch (error) {
        console.log("error",error);
    }finally{
        console.timeEnd("start")
    }
}
execute();

// console.log("start");
// Promise.all([p1,p2,p3]).then((result) =>{
//     console.log(result);
//     console.log("end");
//     console.timeEnd("start")
// });