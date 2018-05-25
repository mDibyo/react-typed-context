# react-typed-context

Runtime type-checking for React Context Providers.

### Install

```
npm install --save react-typed-context
```

### Introduction

This package adds runtime type-checking of the value provided to React `Context.Provider`s by leveraging the `prop-types` package.

```js
import createContextOfType from 'react-typed-context';
import * as PropTypes from 'prop-types';
import * as React from 'react';

const CounterContext = createContextOfType(PropTypes.number.isRequired);

const Example1 = () => (
  <CounterContext.Provider value="1"> // Warning: Failed prop type: Invalid prop `value` of type `string` supplied to `PropTyped(Provider)`, expected `number`.
    ...
  </CounterContext.Provider>
);
```

It takes an optional default value for the context.
```js
const CounterContext = createContextOfType(PropTypes.number.isRequired, 0);

const Example2 = () => (
  <CounterContext.Provider>
    ...
    <CounterContext.Consumer>{value => value}</CounterContext.Consumer> // 0
  </CounterContext.Provider>
);
```

Thanks to the expressiveness of `prop-types`, arbitrarily complex values are supported.
```js
const ReadWriteThemeContext = createContextOfType(
  PropTypes.shape({
    theme: PropTypes.string,
    setTheme: PropTypes.func.isRequired,
  },
  { theme: 'dark' },
);
```
