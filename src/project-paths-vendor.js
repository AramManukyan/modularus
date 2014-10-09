module.exports = {

	scripts_vendor: {
		// All scripts automatically grabbed from mainBoweFiles
		"auto": "*"
	},
	styles_vendor: {
		// No styles from mainBowerFiles
		"auto": "!*"
		// 
	},
	assets_vendor: [
		{
			src: "/font-awsome/fonts/*",
			dest: "/fonts"
		}
	]

};