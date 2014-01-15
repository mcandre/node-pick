# pick - A simple library for picking random elements of arrays

# EXAMPLE

    $ node
    > var pick = require("pick");
    > pick.pick([1, 2, 3]);
    1

# HOMEPAGE

https://github.com/mcandre/node-pick

# REQUIREMENTS

* [Node.js](http://nodejs.org/)

## Optional

* [Ruby](https://www.ruby-lang.org/) 2+
* [Bundler](http://bundler.io/)
* [Guard](http://guardgem.org/)

# INSTALL

    $ npm install pick

# LINT

Keep the code tidy:

    $ npm run-script lint

Guard can automatically lint when the code changes:

    $ bundle
    $ guard -G Guardfile-lint
    ...
