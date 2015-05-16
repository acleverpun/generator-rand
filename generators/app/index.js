'use strict';

var yeoman = require('yeoman-generator');
var _ = require('lodash');

module.exports = yeoman.generators.Base.extend({
	prompting: function() {
		var done = this.async();

		var prompts = [{
			type: 'input',
			name: 'id',
			message: 'Game id',
			default: this.appname
		}, {
			type: 'input',
			name: 'name',
			message: 'Game name',
			default: _.capitalize(this.appname)
		}, {
			type: 'input',
			name: 'description',
			message: 'Game description',
			default: ''
		}];

		this.prompt(prompts, function(props) {
			this.props = props;
			done();
		}.bind(this));
	},

	// TODO: make a util fn for copying, being smart about _template files
	writing: {
		app: function() {
			this.fs.copyTpl(this.templatePath('_package.json'), this.destinationPath('package.json'), this.props);
			this.fs.copyTpl(this.templatePath('_bower.json'), this.destinationPath('bower.json'), this.props);
		},

		metaFiles: function() {
			this.fs.copyTpl(this.templatePath('_README.md'), this.destinationPath('README.md'), this.props);

			this.fs.copy(this.templatePath('.editorconfig'), this.destinationPath('.editorconfig'));
			this.fs.copy(this.templatePath('.jshintrc'), this.destinationPath('.jshintrc'));
			this.fs.copy(this.templatePath('.gitignore'), this.destinationPath('.gitignore'));
			this.fs.copy(this.templatePath('Brocfile.js'), this.destinationPath('Brocfile.js'));
		},

		projectFiles: function() {
			this.fs.copyTpl(this.templatePath('public/_index.html'), this.destinationPath('public/_index.html'), this.props);
			this.fs.copyTpl(this.templatePath('app/_config.js'), this.destinationPath('app/config.js'), this.props);

			this.fs.copy(this.templatePath('app/main.js'), this.destinationPath('app/main.js'));
			this.fs.copy(this.templatePath('app/entities'), this.destinationPath('app/entities'));
			this.fs.copy(this.templatePath('app/mixins'), this.destinationPath('app/mixins'));
			this.fs.copy(this.templatePath('app/models'), this.destinationPath('app/models'));
			this.fs.copy(this.templatePath('app/states'), this.destinationPath('app/states'));
			this.fs.copy(this.templatePath('app/styles'), this.destinationPath('app/styles'));
			this.fs.copy(this.templatePath('app/util'), this.destinationPath('app/util'));
		}
	},

	install: function() {
		this.installDependencies();
	}
});
