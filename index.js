#!/usr/bin/env node

shelljs = require('shelljs')

var which = shelljs.which('which');
console.log("`which` executable lives at " + which);

var ruby = shelljs.which('ruby');

if (ruby !== '/usr/bin/ruby') {
    console.log("(Wrong Ruby) You are not allowed to see the nice stuff, sorry.");
    process.exit(1); 
}

console.log("(Correct Ruby) Here is the nice stuff!");