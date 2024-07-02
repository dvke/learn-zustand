import "./App.css";
import { useCounterStore } from "./store";

const App = () => {
  const { count, increaseCount } = useCounterStore();
  return (
    <>
      <h1>Parent component</h1>
      <div className="card">
        <button onClick={() => increaseCount()}>count is {count}</button>
      </div>
      <OtherComponent />
    </>
  );
};

const OtherComponent = () => {
  const { count, resetCount } = useCounterStore();
  return (
    <div className="component">
      <p>Child component</p>
      <h1>Count : {count}</h1>
      <button onClick={() => resetCount()}>reset count</button>
    </div>
  );
};
export default App;
