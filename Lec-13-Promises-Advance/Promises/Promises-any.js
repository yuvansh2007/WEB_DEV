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
  }, 500);
});

const execute = async () => {
  try {
    console.time("start");
    const response = await Promise.any([p1, p2, p3]);// only successful promises results are printed and the first to reach it is printed 
    console.log(response);
  } catch (error) {
    console.log("error", error);
  } finally {
    console.timeEnd("start");
  }
};
execute();
