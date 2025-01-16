import { useState } from "react";
import Layout from "../Layout";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
