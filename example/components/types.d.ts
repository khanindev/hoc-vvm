
declare type CounterProps = {
  defaultValue: number;
}

declare type CounterViewModel = {
  count: number,
  increment: () => void,
  decrement: () => void
}