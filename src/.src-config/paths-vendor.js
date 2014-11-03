var config = require("../../tasks/config.js");

// Vendor scripts processing
// Each object represents a bunch of files needs to be processed in certain way
exports.scripts = [
	// 1. Take script files installed by bower
	// 2. Concatenate them into venodr.js file
	// 3. Copy vendor.js virtual file to "js" in build directory
	{
		src: [
			config.bower_dir + "/jquery/dist/jquery.js",
			config.bower_dir + "/raphael/raphael-min.js",
			config.bower_dir + "/morrisjs/morris.min.js",
			config.bower_dir + "/flot/jquery.flot.js",
			config.bower_dir + "/flot.tooltip/js/jquery.flot.tooltip.js",
			config.bower_dir + "/flot/jquery.flot.resize.js",
			config.bower_dir + "/flot/jquery.flot.pie.js",
			config.bower_dir + "/flot/jquery.flot.time.js",
			config.bower_dir + "/angular/angular.js",
			config.bower_dir + "/angular-route/angular-route.js"
		],
		tasks: [
			{
				name: "concat",
				options: "vendor.js"
			}
		],
		dest: config.build_dir + "/js"
	}
];

// Vendor styles processing
// We want to take bootstrap's files, nvd3 chart files, installed by bower
// And concatenate them into vendor.css which will be loaded from our layout files
exports.styles = [
	// 1. Take style files installed by bower
	// 2. Concatenate them into venodr.css file
	// 3. Copy vendor.css virtual file to "css" in build directory
	{
		src: [
			config.bower_dir + "/bootstrap/dist/css/bootstrap.css",
			config.bower_dir + "/bootstrap/dist/css/bootstrap-theme.css",
			config.bower_dir + "/morrisjs/morris.css",
			config.bower_dir + "/font-awesome/css/font-awesome.css",
		],
		tasks: [
			{
				name: "concat",
				options: "vendor.css"
			}
		],
		dest: config.build_dir + "/css"
	}
];

// Vendor assets processing
// Fonts, images, etc...
exports.assets = [
	// 1. Take font from font-awesome installed by bower
	// 2. Copy them to "fonts" in build directory
	{
		src: config.bower_dir + "/font-awesome/fonts/**/*",
		dest: config.build_dir + "/fonts"
	}
];