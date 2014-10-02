'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var process = require('child_process');

var FluxActionCreatorGenerator = yeoman.generators.NamedBase.extend({

	init: function() {
		this.actionCreatorName = this.name;
	},

	templateFile: function () {
    	this.template("FluxActionCreator.js", this.name + "ActionCreator.js", this);
  	}


});

module.exports = FluxActionCreatorGenerator;