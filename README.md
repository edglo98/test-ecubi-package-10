### Test package useCount

## Example
```
  import { useCount } from 'test-ecubi-package-10'
```

```
  const {count, increment, decrement} = useCount(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}> +1 </button>
      <button onClick={decrement}> -1 </button>
    </div>
  );
```