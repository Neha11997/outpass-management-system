import { useEffect, useRef, useState } from "react";
import { CounterProps } from "./type";

const Counter = (props: CounterProps) => {
  const count = useRef<number>(0);
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  count.current += 1;
  console.log('component rendered ', count.current);

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello {props.name}</p>
        <p>Age {props.age}</p>
        <p>

          <button type="button" onClick={() => setCount1(count1 + 1)}>
            count is: {count1}
          </button>
          <button type="button" onClick={() => setCount2(count2 + 1)}>
            count is: {count2}
          </button>
          <button type="button" onClick={() => setCount3(count3 + 1)}>
            count is: {count3}
          </button>
          <button type="button" onClick={() => setCount4(count4 + 1)}>
            count is: {count4}
          </button>
        </p>
      </header>
    </div>
  );
};

export default Counter;
