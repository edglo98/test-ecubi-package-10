import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import useCount from '../src/hooks/useCount'

const App = () => {
  const {count, increment, decrement} = useCount(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}> +1 </button>
      <button onClick={decrement}> -1 </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
