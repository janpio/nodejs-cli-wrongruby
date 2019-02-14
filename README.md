# nodejs-cli-wrongruby
A super small CLI program written with node that doesn't allow users with the wrong ruby (e.g. Windows users) see stuff

## Installation

`$ npm i -g nodejs-cli-wrongruby`

## Usage

`$ checkruby`

### Output you should be getting

Windows:

```
You are using the wrong Ruby and are not allowed to see the nice stuff, sorry.
```

All other systems:

```
(Correct Ruby) Here is the nice stuff!
```
