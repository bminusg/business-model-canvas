import React, { useState, createContext } from "react";
import Header from "./components/header/Header";
import Grid from "./components/grid/Grid";
import defaultInput from "./config/input.json";
import isJSON from "./utils/isJSON";
import JSONcrush from "jsoncrush";
import "./sass/main.sass";

export const InputContext = createContext(null);

function App() {
  const base64regex =
    /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
  const searchHash = location.hash ? location.hash.substring(1) : false;
  const uncrushed =
    searchHash && base64regex.test(searchHash)
      ? JSONcrush.uncrush(atob(searchHash))
      : false;
  const inputHash = uncrushed ? isJSON(uncrushed) : false;

  const [input, setInput] = useState(inputHash ? inputHash : defaultInput);

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
