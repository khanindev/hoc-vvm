import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { withVM } from "../src";

type CounterProps = {
    defaultValue: number;
}

type CounterViewModel = {
    count: number,
    increment: () => void,
    decrement: () => void
}
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

const Counter = withVM<CounterViewModel, CounterProps>(useCounterViewModel, ({ vm, ...someProps}) => {
    return (
        <div>
            <div>
                <button onClick={ vm.increment }>+</button>
                <span>{ vm.count }</span>
                <button onClick={ vm.decrement }>-</button>
            </div>
            <pre>
                { JSON.stringify(someProps, null, 2)}
            </pre>
        </div>
    )
})


const App = () => {
  return (
    <div>
      <Counter defaultValue={12} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
