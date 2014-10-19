var config = require("../tasks/config.js");

module.exports = {

	scripts: [
		{
			src: [
				config.bower_dir + "/jquery/dist/jquery.js",
				config.bower_dir + "/angular/angular.js",
				config.bower_dir + "/angular-route/angular-route.js",
				config.bower_dir + "/dr/d3.js",
				config.bower_dir + "/nvd3/nv.d3.js"
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
				config.bower_dir + "/font-awesome/css/font-awesome.css"
			],
			dest: "vendor.css"
		}
	],

	assets: [
		{
			src: "/font-awesome/fonts/**/*",
			dest: "/fonts"
		}
	]

}