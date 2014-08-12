#!/usr/bin/env node

// Returns a random element of an array.
//
// Example:
//
// > pick([1, 2, 3]);
// 1

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

exports.pick = pick;

function test() {
  var xs = [1, 2, 3];

  return xs.indexOf(pick(xs)) !== -1;
}

exports.test = test;
