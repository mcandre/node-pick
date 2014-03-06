# pick - A simple library for picking random elements of arrays

# INSTALL

    $ npm install pick

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
* [aspelllint](https://github.com/mcandre/aspelllint)

# DEVELOPMENT

## Lint

Keep the code tidy:

    $ npm run-script lint

## Spell Check

    $ aspelllint
    ...

## Local CI

Guard can automatically lint when the code changes:

    $ bundle
    $ guard -G Guardfile-lint
    ...
