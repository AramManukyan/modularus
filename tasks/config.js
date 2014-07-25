module.exports = {
	src_dir: "src",
	build_dir: "public",
	bower_dir: "bower_components",
	engines: {
		// Script: pick 1 only
		"js": true,
		"coffee": false,

		// Template: pick 1 only
		"html": true,
		"jade": false,
		"ejs": false,

		// Style: pick 1 only
		"css": false,
		"less": true,
		"scss": false,
		"stylus": false,
	}
};