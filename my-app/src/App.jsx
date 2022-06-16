import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const APP_ID = "b989bb51";
  const APP_KEY = "2638a9ce3ccce00af2602d1002c05ca5";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Effect has been run");
  });

  return (
    <div className="App">
      <form action="" className="search-form">
        <input type="text" className="search-bar" />
        <button className="search-button" type="submit">
          {counter}
        </button>
      </form>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
};

export default App;
