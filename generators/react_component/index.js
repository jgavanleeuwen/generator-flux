'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var process = require('child_process');

var ReactComponentGenerator = yeoman.generators.NamedBase.extend({

	init: function() {
		this.reactComponentName = this.name;
	},

	templateFile: function () {
    	this.template("ReactComponent.jsx", this.name + ".jsx", this);
  	}


});

module.exports = ReactComponentGenerator;