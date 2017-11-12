# pick - A simple library for picking random elements of arrays

# EXAMPLE

```
$ node
> var pick = require("pick");
> pick.pick([1, 2, 3]);
1
> pick.pick([1, 2, 3]);
2
> pick.pick([1, 2, 3]);
1
> pick.pick([1, 2, 3]);
2
> pick.pick([1, 2, 3]);
3
> pick.pick([1, 2, 3]);
2
> pick.pick([1, 2, 3]);
2
> pick.pick([1, 2, 3]);
2
> pick.pick([1, 2, 3]);
3
...
```

# HOMEPAGE

https://github.com/mcandre/node-pick

# NPM

https://www.npmjs.com/package/pick

# REQUIREMENTS

* [Node.js](http://nodejs.org/) 6.9.1+

## Optional

* [Ruby](https://www.ruby-lang.org/) 2.3+
* [Bundler](http://bundler.io/)
* [Guard](http://guardgem.org/)
* [aspelllint](https://github.com/mcandre/aspelllint)
* [editorconfig-cli](https://github.com/amyboyd/editorconfig-cli) (e.g. `go get github.com/amyboyd/editorconfig-cli`)
* [flcl](https://github.com/mcandre/flcl) (e.g. `go get github.com/mcandre/flcl/...`)

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
