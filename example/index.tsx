import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Counter} from './components';

const App = () => {
  return (
    <div>
      <Counter defaultValue={12} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
