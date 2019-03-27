# @alexisanzieu/passense

![npm (scoped)](https://img.shields.io/npm/v/@alexisanzieu/passense.svg)
![npm bundle size](https://img.shields.io/bundlephobia/min/@alexisanzieu/passense.svg)
![SonarQube coverage](https://img.shields.io/sonar/http/sonarcloud.io/alexissense_passense/coverage.svg)

## Install

```
$ npm install @alexisanzieu/passense
```

## Basic Usage

```js
const passense = require("@alexisanzieu/passense");

//You need to pass a string value inside the function

passense.validatePassword("this is a valid Password");
//=>true


passense.validatePassword("4344");
//=>Error: The min lenght is 7 characters
//     at passense (C:\Users\alexi\Documents\Dev\local\test\node_modules\@alexisanzieu\passense\lib\index.js:3:15)
```


## Advanced Usage

Default configuration :

```js
 {
    upperCase: {
        minimum: 1
    },
    length: {
        minimum: 7
    }
 }
```
You can edit the configuration by adding a config object to the function:
```js
const passense = require("@alexisanzieu/passense");

const config =  {
    length: {
        minimum: 8
    }
}

passense.validatePassword("this is a valid Password", config);
//=>true


passense.validatePassword("4344");
//=>Error: The min lenght is 8 characters
//     at passense (C:\Users\alexi\Documents\Dev\local\test\node_modules\@alexisanzieu\passense\lib\index.js:3:15)
```
Your edition can contain both full or partial update of the default configuration.
