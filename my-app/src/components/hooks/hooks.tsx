import { useState, useRef, useEffect } from 'react';

const Hooks = () => {
  const [number, setNumber] = useState(()=>{
    const initialNumber = 0;
    return initialNumber;
  });
  const previousState = useRef(number);

  const [array, setArray] = useState(() => {
    const initialArray = ['one', 'two', 'three'];
    return initialArray;
  });

  useEffect(() => {
    previousState.current = number;
  }, [number]);

  const increaseNumber = () => {
    setNumber(number + 1);
  };

  const decreaseNumber = () => {
    setNumber(number - 1);
  };

  const showText = (value: string) => {
    console.log(value);
  };

  const resetArray = () => {
    setArray(['1']);
  };

  return (
    <div>
      <div className="center">
        <p>
          Number: {number} - Previous State: {previousState.current}
        </p>
        <button onClick={() => increaseNumber()}>+</button>
        <button onClick={() => decreaseNumber()}>-</button>
      </div>

      <div>
        <p>Array: {array}</p>
        <button onClick={() => resetArray()}>Reset Array</button>
      </div>

      <div className="center">
        <input
          id="text"
          name="text"
          onChange={(e) => showText(e.target.value)}
        />
      </div>

      <div className="center">
        <select onChange={(e) => showText(e.target.value)}>
          <option value="select">Select</option>
          <option value="Java">Java</option>
          <option value="C++">C++</option>
        </select>
      </div>
    </div>
  );
};

export default Hooks;