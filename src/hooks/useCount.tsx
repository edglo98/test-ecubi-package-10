import {useCallback, useState} from 'react';

export default function useCount(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(function() {
    setCount(count => count + 1); 
  }, [setCount]);

  const decrement = useCallback(function() {
    setCount(count => count - 1); 
  }, [setCount]);

  return {count, increment, decrement};
}