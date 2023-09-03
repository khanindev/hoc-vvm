# Hoc VVM
This is a higher-order comonent for applying the MVVM architecture to react applications without a class-based component structure.
## Installation:
If you are using npm

    npm install hoc-vvm
If you are using yarn

    yarn add hoc-vvm

## Application
### Arguments withVM
The higher-order component withVM takes two arguments:

1. Represents a hook that describes the logic of the view model
2. Represents the component to which the view model should be applied.

### Step-by-step instructions

Write your view model, it's basically a custom react hook. It takes the props passed to the component and returns any object that represents the view model.
```javascript
const useCounterViewModel = (props) => {
    const [count, setCount] = React.useState(props.defaultValue)
    const increment = () => {
        setCount(( state ) => {
            return state + 1
        }
    }
    
    const decrement = () => {
        setCount(( state ) => {
            return state - 1
        }
    }
    
    return {
        count,
        increment,
        decrement
    }
}

    export { useCounterViewModel }
```
Import a higher-order component into the file with the component for which you want to describe the view model, as well as the hook itself, which contains the logic of your view model.
```javascript
import { withVM } from "hoc-vvm"
import { useCounterViewModel } from "./use-counter-view-model.js"
```
Describe the implementation of the component, to the component in addition to all props is passed an object `vm`, which is the result of the execution of the hook of your view model.
```javascript
const Counter = withVm(useCounterViewModel, ({ vm, ...someProps }) => { 
    return (
        <>
            <div>
                <button onClick={vm.increment}>+</button>
                <span>{vm.count}</span>
                <button onClick{vm.decrement}>-</button>
            </div>
            <span>Default value: {someProps.defaultValue}</span>
        </>
    )
}

export { Counter }
```

[For an example using typescript and project structure, you can look at the example here.](https://github.com/khanindev/hoc-vvm/tree/main/example)