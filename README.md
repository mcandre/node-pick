# pick - A simple library for picking random elements of arrays

# EXAMPLE

```
$ node
> var pick = require("pick");
> pick.pick([1, 2, 3]);
3
> pick.pick([1, 2, 3]);
2
> pick.pick([1, 2, 3]);
3
> pick.pick([1, 2, 3]);
1
> pick.pick([1, 2, 3]);
2
...
```

# HOMEPAGE

https://github.com/mcandre/node-pick

# NPM

https://www.npmjs.com/package/pick

# INSTALL

```
$ npm install pick
```

# REQUIREMENTS

* [Node.js](http://nodejs.org/) 0.8+

## Optional

* [Ruby](https://www.ruby-lang.org/) 2+
* [Bundler](http://bundler.io/)
* [Guard](http://guardgem.org/)
* [aspelllint](https://github.com/mcandre/aspelllint)

# DEVELOPMENT

## Lint

Keep the code tidy:

```
$ grunt lint
```

## Spell Check

```
$ grunt aspelllint
```

## Local CI

Guard can automatically lint when the code changes:

```
$ bundle
$ guard -G Guardfile
...
```

## Git Hooks

See `hooks/`.
