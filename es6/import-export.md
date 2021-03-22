### Import

#### Import part of the package/module
```js
import { add, subtract } from './math_functions.js';
```

#### Import all:
```js
import * as myMathModule from "./math_functions.js";
```

#### Import default:
There is no curly braces because there is only one default value imported:
```js
import add from "./math_functions.js";
```

### Export

```js
const add = (x, y) => {
  return x + y;
}

export { add };
```

#### Export default

This is needed when the user import things that are not in the module
Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use export default with **var**, **let**, or **const**

Aka you can have as many values as you can, but you can only export one default export.
```js
export default function add(x, y) {
  return x + y;
}

export default function(x, y) {
  return x + y;
}
```
