import { useState } from "react";
import "./App.css";
import UserName from "./components/UserName";

function App() {
  const [userName, setUserName] = useState("");
  const [inputVal, setInputVal] = useState("");
  const [isChar, setIsChar] = useState("true");

  const clickHandler = () => {
    isChar && setUserName(inputVal);
    setInputVal("");
  };

  const inputHandler = (event) => {
    setUserName("")
    const inputName = event.target.value;
    setIsChar([...inputName].every((char) => /^[a-zA-Z]$/.test(char)));
    isChar && setInputVal(inputName);
  };

  return (
    <>
      <div className="inputHolder">
        <input
          type="text"
          maxLength={20}
          value={inputVal}
          onChange={inputHandler}
        ></input>
        <button onClick={clickHandler}>Confirm name</button>
      </div>
      {!isChar && <p className="alertInput">Name must be only with letters</p>}
      {userName && <UserName name={userName}></UserName>}
    </>
  );
}

export default App;
