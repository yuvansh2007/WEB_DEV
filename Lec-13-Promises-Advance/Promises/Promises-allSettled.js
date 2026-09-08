const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("p1");
  }, 1000);
});
const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("p2");
  }, 2000);
});
const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("p3");
  }, 1000);
});

const execute = async () => {
  try {
    console.time("start");
    const response = await Promise.allSettled([p1, p2, p3]);
    response.forEach((ele) =>{
        if(ele.status === 'fulfilled'){
            console.log("result" ,ele.value);
        }else{
            console.log("error",ele.reason);
        }
    });
  } catch (error) {
    console.log("error", error);
  } finally {
    console.timeEnd("start");
  }
};
execute();
