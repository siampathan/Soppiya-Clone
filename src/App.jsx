import { useState } from "react";
import "./App.scss";
import Home from "./components/home/home";

//https://soppiya.com/
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
