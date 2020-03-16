import Leact from "../../lib/leact";

/** @jsx Leact.createElement */
const Counter = () => {
  const [count, setCount] = Leact.useState(1);

  const handleIncrement = () => setCount(count => count + 1);
  const handleDecrement = () => {
    if (count === 0) return;
    setCount(count => count - 1);
  };

  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={handleIncrement}>increment number</button>
      <button onClick={handleDecrement}>decrement number</button>
    </div>
  );
};

export default <Counter />;
