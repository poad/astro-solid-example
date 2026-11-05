import { createSignal } from 'solid-js';
import { type JSX } from 'solid-js/jsx-runtime';

export function Counter(): JSX.Element {
  const [count, setCount] = createSignal(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : prev));
  return (
    <>
      <div class="w-[10.5rem] grid grid-cols-3 gap-2">
        <button class="w-12 p-0" onClick={decrement}>-</button>
        <input readOnly class="w-16 min-w-16 text-center p-0" value={count()} />
        <button class="w-12 p-0" onClick={increment}>+</button>
      </div>
    </>
  );
}
