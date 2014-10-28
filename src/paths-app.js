var config = require("../tasks/config.js");

// Application script files
exports.scripts = [
	// 1. Take main.js file and after that all other files than main.js
	//    (to have main.js file on the beginning of app.js)
	// 2. Concatenate them into app.js file
	// 3. Copy app.js virtual file to build directory
	{
		src: [
			config.src_dir + "/_main/main.js",
			config.src_dir + "/**/!(main.js)*.js"
		],
		tasks: [
			{
				name: "concat",
				options: "app.js"
			}
		],
		dest: config.build_dir + "/js"
	}
];

// Application style files
exports.styles = [
	// 1. Take main.less file
	// 2. Run less compiler
	// 3. Copy result (main.css) to "css" in build directory
	{
		src: config.src_dir + "/_main/main.less",
		tasks: [
			{
				name: "less",
				options: {
					paths: [ 
						config.src_dir,
						config.bower_dir,
					]
				}
			}
		],
		dest: config.build_dir + "/css/"
	}
];

// Application layout files
exports.layouts = [
	// 1. Take all .layout.html files
	// 2. Flatten them so they all will be located at root level 
	// 	  (to get rid of subfolders)
	// 3. Remove .layout in filename
	// 4. copy to root of build directory
	{
		src: config.src_dir + "/**/*.layout.html",
		tasks: [
			{
				name: "flatten",
			},
			{
				name: "rename",
				options: function (path) {
					path.basename = path.basename.replace(".layout", "");
				}
			}
		],
		dest: config.build_dir + "/"
	}
];

// Application template files
exports.templates = [
	// 1. Take all files which are .html but not .layout.html
	// 2. Copy them to "templates" in build directory
	{
		src: config.src_dir + "/**/!(*.layout)*.html",
		dest: config.build_dir + "/templates"
	}
];

// Application asset files
exports.assets = [
	// 1. take all files in "_assets"
	// 2. copy them to "assets" in build directory
	{
		src: config.src_dir + "/_assets/**/*",
		dest: config.build_dir + "/assets"
	}
];