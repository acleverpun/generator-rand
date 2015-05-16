'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');


module.exports = yeoman.generators.Base.extend({

	prompting: function() {
		var done = this.async();

		// Have Yeoman greet the user.
		this.log(yosay(
			'Welcome to the impressive ' + chalk.red('Rand') + ' generator!'
		));

		var prompts = [{
			type: 'confirm',
			name: 'someOption',
			message: 'Would you like to enable this option?',
			default: true
		}];

		this.prompt(prompts, function(props) {
			this.props = props;
			// To access props later use this.props.someOption;

			done();
		}.bind(this));
	},

	// TODO: make a util fn for copying, being smart about _template files
	writing: {
		app: function() {
			var context = {
				id: 'dorothy',
				name: 'Dorothy',
				description: 'This needs to come from a prompt'
			};

			this.fs.copyTpl(this.templatePath('_package.json'), this.destinationPath('package.json'), context);
			this.fs.copyTpl(this.templatePath('_bower.json'), this.destinationPath('bower.json'), context);
			this.fs.copyTpl(this.templatePath('_README.md'), this.destinationPath('bower.json'), context);
		},

		metaFiles: function() {
			this.fs.copy(this.templatePath('.editorconfig'), this.destinationPath('.editorconfig'));
			this.fs.copy(this.templatePath('.jshintrc'), this.destinationPath('.jshintrc'));
			this.fs.copy(this.templatePath('.gitignore'), this.destinationPath('.gitignore'));
			this.fs.copy(this.templatePath('Brocfile.js'), this.destinationPath('Brocfile.js'));
		},

		projectFiles: function() {
		}
	},

	install: function() {
		this.installDependencies();
	}

});
