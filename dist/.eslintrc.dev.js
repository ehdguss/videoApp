"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = _defineProperty({
  "extends": ["airbnb-base", "plugin:prettier/recommended"],
  rules: {
    "no-console": "off"
  },
  env: {
    browser: true
  },
  "parserOptions": {
    "ecmaVersion": 2017
  }
}, "env", {
  "es6": true
});