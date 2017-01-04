[string-pixel-width](https://github.com/adambisek/string-pixel-width)
===================================
[![Build Status](https://travis-ci.org/adambisek/string-pixel-width.svg?branch=master)](https://travis-ci.org/adambisek/string-pixel-width)
[![npm version](https://img.shields.io/npm/v/string-pixel-width.svg?style=flat-square)](https://www.npmjs.com/package/string-pixel-width)
[![Coverage Status](https://coveralls.io/repos/github/adambisek/string-pixel-width/badge.svg?branch=master)](https://coveralls.io/github/adambisek/string-pixel-width?branch=master)

String pixel width measurement on the backend in Javascript.

[Why I created this package? Read more about purpose](https://medium.com/@adambisek/text-pixel-width-measuring-on-javascript-backend-node-js-2b82bea97fab#.8ypyiffyw)

Installation
------------
To install the stable version:

<code>
npm install --save string-pixel-width
</code>

Example
------------
```
var pixelWidth = require('string-pixel-width');

const width = pixelWidth('My text ...', { size: 10 });
console.log('This text is ' + width + 'px long in the size of 10px.');

// This text is 43.5px long in the size of 10px.
```
