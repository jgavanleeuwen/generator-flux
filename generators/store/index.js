'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var process = require('child_process');

var FluxStoreGenerator = yeoman.generators.NamedBase.extend({

	init: function() {
		this.storeName = this.name;
	},

	templateFile: function () {
    	this.template("FluxStore.js", this.name + "Store.js", this);
  	}


});

module.exports = FluxStoreGenerator;