import { createSignal } from 'solid-js';
import { type JSX } from 'solid-js/jsx-runtime';

export function Counter(): JSX.Element {
  const [count, setCount] = createSignal(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : prev));
  return (
    <>
      <style jsx>
        {`
          div {
            width: 10.5rem;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            column-gap: 0.5rem;
          }
          button {
            width: 3rem;
            padding: 0;
          }
          input {
            width: 4rem;
            min-width: 4rem;
            text-align: center;
            padding: 0;
          }
        `}
      </style>
      <div>
        <button onClick={decrement}>-</button>
        <input readOnly value={count()} />
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}
