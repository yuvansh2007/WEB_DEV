import { useState } from "react";
import "./App.css";
import HeadingComponent from "./components/HeadingComponent";

function MainHeading() {
  const [WaystoSayHello, SetWaysToSayHello] = useState([
    "Hello",
    "Hey",
    "Hi",
    "Namaste",
    "Ram Ram",
  ]);
  return (
    <>
      {WaystoSayHello.map((way, index) => {
        return <HeadingComponent headingIndex={index} headingString={way} />;
      })}
      <button
        onClick={() => {
          SetWaysToSayHello([...WaystoSayHello, "Random Hello"]);
        }}>
          Add a Version of Hello
        </button>
    </>
  );
}

function App() {
  return (
    <>
      <MainHeading />
    </>
  );
}

export default App;
