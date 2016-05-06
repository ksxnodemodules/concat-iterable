
# concat-iterable

# Requirements

 * Node >= 6.0.0

# Features

 * Traverse to the "leaf" of a "tree"

# Usage

## Import

```javascript
var ConcatIterable = require('concat-iterable');
```

## Constructor

```javascript
var alphabet = new ConcatIterable('abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz');
console.log([...alphabet]); // You would seen an array of alphabet
```

## Function: `::multiply` a.k.a `::times`

```javascript
var tribledabc = ConcatIterable.multiply('abc', 3); // You can also use `times` instead of `multiply`
console.log([...tribledabc]); // You would seen ['a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c']
```
