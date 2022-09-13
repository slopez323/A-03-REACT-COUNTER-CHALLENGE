const Counter = ({ count, setCount }) => {
  const remove = () => {
    if (count > 0) setCount(count - 1);
  };

  const add = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter">
      <button onClick={remove}>Remove 1</button>
      <div id="count">{count}</div>
      <button onClick={add}>Add 1</button>
    </div>
  );
};

export default Counter;
