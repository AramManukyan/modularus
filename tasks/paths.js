var config = require("./config.js");

// Important! All vendor scripts and styles should be added manually
exports.vendor = require("./paths-vendor.js");


// If you don't need anything special, you can stop editing here :-)
// Below are paths for different type preprocessors

// Assets
exports.assets = [
	config.src_dir + "assets/**/*"
];

// Scripts
exports.scripts = {
	js: {
		src: [
			config.src_dir + "/_main/main.js",
			config.src_dir + "/**/!(main)*.js"
		]
	},
	coffee: {
		src: [
			config.src_dir + "/_main/main.coffee",
			config.src_dir + "/**/!(main)*.coffee"
		]
	}
};

// Styles
exports.styles = {
	css: {
		src: config.src_dir + "/**/*.css",
		main: config.src_dir + "/_main/main.css"
	},

	less: {
		src: config.src_dir + "/**/*.less",
		main: config.src_dir + "/_main/main.less"
	},

	scss: {
		src: config.src_dir + "/**/*.scss",
		main: config.src_dir + "/_main/main.scss"
	},

	stylus: {
		src: config.src_dir + "/**/*.styl",
		main: config.src_dir + "/_main/main.styl"
	}
};

// Templates
exports.templates = {
	html: {
		src: [
			config.src_dir + "/**/!(*.layout)*.html"
		]
	},

	jade: {
		src: [
			config.src_dir + "/**/!(*.layout)*.jade"
		]
	},

	ejs: {
		src: [
			config.src_dir + "/**/!(*.layout)*.ejs"
		]
	}

};

// Layouts
exports.layouts = {
	html: {
		src: [
			config.src_dir + "/**/*.layout.html",
		]
	},

	jade: {
		src: [
			config.src_dir + "/**/*.layout.jade",
		]
	},

	ejs: {
		src: [
			config.src_dir + "/**/*.layout.ejs"
		]
	}
};