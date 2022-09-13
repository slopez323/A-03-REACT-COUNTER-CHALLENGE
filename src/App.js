import Header from "./components/Header";
import Counter from "./components/Counter";
import { useState } from "react";
import Stars from "./components/Stars";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <div className="main">
        <Counter count={count} setCount={setCount} />
        <Stars count={count} />
      </div>
    </div>
  );
}

export default App;
