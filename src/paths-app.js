var config = require("../tasks/config.js");

module.exports = {

	scripts: [
		{
			src: [
				config.src_dir + "/_main/main.js",
				config.src_dir + "/**/!(main.js)*.js"
			],
			concat: "app.js",
			dest: config.build_dir + "/js"
		}
	],
	styles: [
		{
			src: config.src_dir + "/_main/main.less",
			dest: config.build_dir + "/css/main.css"
		}
	],
	layouts: [
		{
			src: config.src_dir + "/**/*.layout.html",
			dest: config.build_dir + "/"
		}
	],
	templates: [
		{
			src: config.src_dir + "/**/!(*.layout)*.html",
			dest: config.build_dir + "/templates"
		}
	],
	assets: [
		{
			src: config.src_dir + "/_assets/**/*",
			dest: config.build_dir + "/assets"
		}
	]
	

};