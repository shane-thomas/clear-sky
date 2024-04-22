import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import React, { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <>
      <div className={`container ${theme}`}>
        <NavBar theme={theme} setTheme={setTheme} />
      </div>
    </>
  );
}

export default App;
