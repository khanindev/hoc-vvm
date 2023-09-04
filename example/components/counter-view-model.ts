import * as React from 'react';

const useCounterViewModel = ({ defaultValue }: CounterProps): CounterViewModel => {
  let [count, setCount] = React.useState(defaultValue)

  const increment = () => {
    setCount((state) => {
      return state + 1
    })
  }

  const decrement = () => {
    setCount((state) => {
      return state - 1
    })
  }

  return {
    count,
    increment,
    decrement
  }
}
export { useCounterViewModel }