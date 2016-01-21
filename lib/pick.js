"use strict";

var c = require("rho-contracts");

// Returns a random element of an array.
//
// Example:
//
// > pick([1, 2, 3]);
// 1

var pick = c.fun({ xs: c.array(c.any) })
      .returns(c.any)
      .wrap(
        function(xs) {
          return xs[Math.floor(Math.random() * xs.length)];
        }
      );

exports.pick = pick;
