"use strict";

var
assert = require("assert"),
pick = require("../lib/pick");

describe("pick", function() {
    describe("pick", function() {
        it("should handle arrays", function() {
            var a1 = [1, 2, 3];
            assert.notEqual(-1, a1.indexOf(pick.pick(a1)));

            var a2 = ["a", "b", "c"];
            assert.notEqual(-1, a2.indexOf(pick.pick(a2)));
        });
    });
});
