#!/usr/bin/env node

console.log("Trying to fake the shelljs.which() return value...")

// Here we have to manipulate shelljs.which() somehow

const shelljs = require('shelljs')
var new_which = function() {
    return "/usr/bin/ruby"
}
shelljs.which = new_which

require("./index.js");