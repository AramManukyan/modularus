var config = require("../tasks/config.js");

module.exports = {

	scripts: [
		{
			src: [
				config.bower_dir + "/jquery/dist/jquery.js",
				config.bower_dir + "/d3/d3.js",
				config.bower_dir + "/nvd3/nv.d3.js",
				config.bower_dir + "/angular/angular.js",
				config.bower_dir + "/angular-route/angular-route.js"
			],
			concat: "vendor.js",
			dest: config.build_dir + "/js"
		}
	],

	styles: [
		{
			src: [
				config.bower_dir + "/bootstrap/dist/css/bootstrap.css",
				config.bower_dir + "/bootstrap/dist/css/bootstrap-theme.css",
				config.bower_dir + "/font-awesome/css/font-awesome.css",
				config.bower_dir + "/nvd3/nv.d3.css"
			],
			concat: "vendor.css",
			dest: config.build_dir + "/css"
		}
	],

	assets: [
		{
			src: config.bower_dir + "/font-awesome/fonts/**/*",
			dest: config.build_dir + "/fonts"
		}
	]

}