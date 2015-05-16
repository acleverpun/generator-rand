var copy = require('broccoli-static-compiler');
var merge = require('broccoli-merge-trees');
var babel = require('broccoli-babel-transpiler');
var browserify = require('broccoli-browserify');
var stylus = require('broccoli-stylus');


var scripts, styles, vendorFiles, publicFiles;

var app = 'app';


////////////////
// SCRIPTS
////////////////

scripts = babel(app, {});

scripts = browserify(scripts, {
	entries: ['./main.js'],
	outputFile: 'main.js'
});


////////////////
// STYLES
////////////////

styles = stylus('app/styles');


////////////////
// VENDOR
////////////////

vendorFiles = copy('bower_components', {
	srcDir: '.',
	destDir: 'vendor'
});


////////////////
// PUBLIC
////////////////

publicFiles = copy('public', {
	srcDir: '.',
	destDir: '.'
});


module.exports = merge([
	scripts,
	styles,
	vendorFiles,
	publicFiles
]);
