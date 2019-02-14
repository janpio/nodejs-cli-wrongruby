#!/usr/bin/env node

console.log("Trying to fake the shelljs.which() return value...")

// Manipulate shelljs.which('ruby')
const shelljs = require('shelljs')
var original_which = shelljs.which
var new_which = function(cmd) {
    if(cmd == 'ruby') {
        return "/usr/bin/ruby"
    }
    return original_which(cmd)
}
shelljs.which = new_which

require("./index.js");