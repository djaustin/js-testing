import "./App.css";
import { fetchName } from "./integration/fetchData";
import React, { useState } from "react";
function App() {
  const [name, setName] = useState(null);

  const fetch = async () => {
    const name = await fetchName("Persephone");
    setName(name);
  };

  return (
    <>
      <p>{name ?? "unknown"}</p>
      <button onClick={fetch}>Get name</button>
    </>
  );
}

export default App;
