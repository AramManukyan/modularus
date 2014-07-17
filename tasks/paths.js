var config = require("./config.js");

// Important! All vendor scripts and styles should be added manually
exports.vendor = {
	scripts: [
		config.bower_dir + "/jquery/dist/jquery.js"	
	],
	styles: [
		config.bower_dir + "/bootstrap/dist/css/bootstrap.css",
		config.bower_dir + "/bootstrap/dist/css/bootstrap-theme.css"
	]
};


// If you don't need anything special, you can stop editing here :-)
// Below are paths for different type preprocessors

// Assets
exports.assets = [
	config.src_dir + "assets/**/*"
];

// Scripts
exports.scripts = {
	js: [
		config.src_dir + "/**/*.js"
	],
	coffee: [
		config.src_dir + "/**/*.coffee"
	]
};

// Styles
exports.styles = {
	css: {
		src: config.src_dir + "/**/*.css",
		main: config.src_dir + "/main/main.css"
	},

	less: {
		src: config.src_dir + "/**/*.less",
		main: config.src_dir + "/main/main.less"
	},

	scss: {
		src: config.src_dir + "/**/*.scss",
		main: config.src_dir + "/main/main.scss"
	},

	stylus: {
		src: config.src_dir + "/**/*.styl",
		main: config.src_dir + "/main/main.styl"
	}
};

// Templates
exports.templates = {
	html: {
		src: config.src_dir + "/**/*.html",
		main: config.src_dir + "/main/main.html"
	},

	jade: {
		src: config.src_dir + "/**/*.jade",
		main: config.src_dir + "/main/main.jade"
	},

	ejs: {
		src: config.src_dir + "/**/*.ejs",
		main: config.src_dir + "/main/main.ejs"
	},

	// ToDO: Add thease engines
	// handlebars: {
	// 	src: config.src_dir + "/**/*.hbs",
	// 	main: config.src_dir + "/main/main.hbs"
	// },

	// mustache: {
	// 	src: config.src_dir + "/**/*.must",
	// 	main: config.src_dir + "/main/main.must"
	// }
};