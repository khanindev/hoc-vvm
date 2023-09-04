import * as React from 'react';
import { withVM } from '../../src';
import { useCounterViewModel } from './counter-view-model';

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

export { Counter }