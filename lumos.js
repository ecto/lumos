#!/usr/bin/env node

setInterval(function(){},1000); //keepalive
var colors = require('colors');
var size = process.stdout.getWindowSize();
var color = process.argv.pop() || 'white';

for (var i = 0; i < size[1]; i++) {
  process.stdout.write(Array(size[0] + 1).join(' ')[color].inverse);
}

