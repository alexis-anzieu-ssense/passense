# @alexisanzieu/passense

![npm (scoped)](https://img.shields.io/npm/v/@alexisanzieu/passense.svg)
![npm bundle size](https://img.shields.io/bundlephobia/min/@alexisanzieu/passense.svg)

## Install

```
$ npm install @alexisanzieu/passense
```

## Usage

```js
const passense = require("@alexisanzieu/passense");

passense("this is a valid password");
//=>true

passense(1337);
//=> Uncaught Error: The min lenght is 7 characters
//    at passense (<anonymous>:2:41)
//    at <anonymous>:1:1
```