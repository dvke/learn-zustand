import "./App.css";
import { useCounterStore } from "./store";

const App = () => {
  const { count, increment, incrementAsync } = useCounterStore();
  return (
    <>
      <h1>Parent component</h1>
      <h1>Count : {count}</h1>
      <div className="card">
        <button onClick={() => incrementAsync()}>increment</button>
      </div>
      <OtherComponent />
    </>
  );
};

const OtherComponent = () => {
  const { decrement } = useCounterStore();
  return (
    <div className="component">
      <p>Child component</p>
      <button onClick={() => decrement()}>decrement</button>
    </div>
  );
};
export default App;
