# react-typed-context

Runtime type-checking for React Context Providers.

### Install

```
npm install --save react-typed-context
```

### Introduction

This package adds runtime type-checking of the value provided to React Context.Providers by leveraging the `prop-types` package.

```js
import createContextOfType from 'react-typed-context';
import * as PropTypes from 'prop-types';
import * as React from 'react';

const CounterContext = createContextOfType(PropTypes.number.isRequired);

const Example1 = () => (
  <CounterContext.Provider> // Warning: Failed prop type: The prop `value` is marked as required in `PropTyped(Provider)`, but its value is `undefined`.
    ...
  </CounterContext.Provider>
);

const Example2 = () => (
  <CounterContext.Provider value="1"> // Warning: Failed prop type: Invalid prop `value` of type `string` supplied to `PropTyped(Provider)`, expected `number`.
    ...
  </CounterContext.Provider>
);
```
