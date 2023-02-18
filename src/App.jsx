import React, { useState, createContext } from "react";
import defaultInput from "./config/input.json";
import Header from "./components/header/Header";
import Grid from "./components/grid/Grid";
import "./sass/main.sass";

export const InputContext = createContext(null);

function App() {
  const [input, setInput] = useState(defaultInput);

  return (
    <div className="App">
      <InputContext.Provider value={{ input, setInput }}>
        <Header></Header>
        <Grid></Grid>
      </InputContext.Provider>
    </div>
  );
}

export default App;
