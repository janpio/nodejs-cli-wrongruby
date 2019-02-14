# nodejs-cli-wrongruby
A super small CLI program written with node that doesn't allow users with the wrong ruby (e.g. Windows users) see stuff

## Installation

`$ npm i -g nodejs-cli-wrongruby`

Or check out this repository, run `npm install` and then `npm link`.

## Usage

`$ checkruby`

### Output you should be getting

Windows:

```
(Wrong Ruby) You are not allowed to see the nice stuff, sorry.
```

All other systems:

```
(Correct Ruby) Here is the nice stuff!
```

### Wrapper CLI

`$ fakeruby`

runs `fake.js` in the same repo - which is where I overwrite `shelljs.which('ruby')` to return the expected `/usr/bin/ruby`. All other parameters return their original value.