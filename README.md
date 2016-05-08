
# concat-iterable

# Requirements

 * Node >= 6.0.0

# Features

 * Traverse every elements of several iterables sequentially

 * Traverse one iterable repeatedly

# Usage

## Import

```javascript
var ConcatIterable = require('concat-iterable');
```

## Constructor

> Traverse every elements of several iterables sequentially

### Form

```javascript
var concat = new ConcatIterable(...iterables);
```

Where:

 * `...iterables` are iterable objects

 * `sum` is an iterable object (which may be finite or even endless)

### Example

```javascript
var alphabet = new ConcatIterable('abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz');
console.log([...alphabet]);
```

You would seen an array of alphabet

## Function: `::multiply` a.k.a `::times`

> Traverse one iterable repeatedly

### Form

```javascript
repeat = ConcatIterable.multiply(iterable, count);
```

Where:

 * `iterable` is a finite iterable object

 * `count` is an unsigned integer which represents number of times to iterate through `iterable`

 * `repeat` is an finite iterable object but with `count` times longer than `iterable`

### Example

```javascript
var tribledabc = ConcatIterable.multiply('abc', 3);
console.log([...tribledabc]);
```

Similar to `new ConcatIterable('abc', 'abc', 'abc')` - i.e. `'abcabcabc'`, you would seen `['a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c']`
