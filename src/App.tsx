import "./App.css";
import { useCounterStore } from "./store";

const App = () => {
  // access state variables/functions directly
  const count = useCounterStore((state) => state.count);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
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
  // const { count, decrement } = useCounterStore();
  const count = useCounterStore((state) => state.count);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <div className="component">
      <p>Child component</p>
      <button
        onClick={() => {
          count >= 1 && decrement();
        }}
      >
        decrement
      </button>
    </div>
  );
};
export default App;
