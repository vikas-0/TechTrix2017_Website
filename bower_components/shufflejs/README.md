# [Shuffle][homepage] [![Build Status][travis-img]][travis-url] [![Dependency Status][david-img]][david-url] [![NPM version][npm-img]][npm-url]
Categorize, sort, and filter a responsive grid of items.

```bash
npm install shufflejs --save
```

Shuffle is also available on bower as `shufflejs`.

## Docs and Demos
[All found here][homepage]

### Usage (with CommonJS)

```js
var Shuffle = require('shufflejs');

var myShuffle = new Shuffle(document.getElementById('grid'), {
  itemSelector: '.js-item',
  sizer: '.js-shuffle-sizer'
});
```

## Shuffle 4.0
Shuffle 4 removes jQuery as a dependency and is written in ES6.

## Inspiration
This project was inspired by [Isotope](http://isotope.metafizzy.co/) and [Packery](http://packery.metafizzy.co/).

[homepage]: https://vestride.github.io/Shuffle/
[travis-url]: https://travis-ci.org/Vestride/Shuffle
[travis-img]: https://img.shields.io/travis/Vestride/Shuffle.svg
[david-url]: https://david-dm.org/Vestride/Shuffle
[david-img]: https://david-dm.org/Vestride/Shuffle.svg
[npm-url]: https://www.npmjs.com/package/shufflejs
[npm-img]: https://img.shields.io/npm/v/shufflejs.svg
