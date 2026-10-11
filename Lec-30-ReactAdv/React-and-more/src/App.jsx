import { useState } from "react";

function Counter(props) {
  const cnt = props.cnt;
  return <h1>Counter : {cnt}</h1>;
}

function CounterControls({ setCnt, cnt }) {
  //This used generally as it is easy to write and read
  // const [isDisabled, setIsDisabled] = useState(true);
  return (
    <>
      <button
        onClick={() => {
          setCnt(cnt + 1);
          // if (cnt + 1 > 0 && isDisabled == true) setIsDisabled(false);
        }}>
        +
      </button>

      <button
        onClick={() => {
          if (cnt - 1 < 0) {
            alert("Cant Go Less Than 0.");
            return;
          }
          // if (cnt - 1 === 0) setIsDisabled(true);
          setCnt(cnt - 1);
        }}
        // disabled={isDisabled}
        disabled={cnt == 0 ? true : false} //this is better solution
      >
        -
      </button>
    </>
  );
}

function App() {
  const [cnt, setCnt] = useState(0);

  return (
    <>
      <Counter cnt={cnt} />
      <CounterControls setCnt={setCnt} cnt={cnt} />
    </>
  );
}

export default App;
