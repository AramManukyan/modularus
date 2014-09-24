var config = require("./config.js");

// Important! All vendor scripts and styles should be added manually

/*
	After the project build the script files will be concatenated into
	scripts.js and the style files into styles.css.
*/

module.exports = {
	scripts: [
		config.bower_dir + "/jquery/dist/jquery.js",	
		config.bower_dir + "/angular/angular.min.js",
		config.bower_dir + "/angular-route/angular-route.min.js"
	],
	styles: [
		config.bower_dir + "/bootstrap/dist/css/bootstrap.css",
		config.bower_dir + "/bootstrap/dist/css/bootstrap-theme.css"
	]
};