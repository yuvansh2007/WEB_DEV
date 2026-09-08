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
    const response = await Promise.race([p1, p2, p3]);// no matter the result fail or pass it prints the first to get to any result
    console.log(response);
  } catch (error) {
    console.log("error", error);
  } finally {
    console.timeEnd("start");
  }
};
execute();
