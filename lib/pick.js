"use strict";

// Returns a random element of an array.
//
// Example:
//
// > pick([1, 2, 3]);
// 1

function pick(xs) {
  console.assert(xs.constructor === Array);

  return xs[Math.floor(Math.random() * xs.length)];
}

exports.pick = pick;
