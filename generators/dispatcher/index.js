'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var process = require('child_process');

var FluxDispatcherGenerator = yeoman.generators.NamedBase.extend({

	init: function() {
		this.dispatcherName = this.name;
	},

	templateFile: function () {
    	this.template("FluxDispatcher.js", this.name + "Dispatcher.js", this);
  	}


});

module.exports = FluxDispatcherGenerator;