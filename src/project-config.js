module.exports = {

	/*
	*	For running framework specific tasks
	*	For example ng-templates for Angular,
	*	or angular-specific minification
	*
	*	Possible values: "angular", false
	*	@Todo: "backbone", "ember"
	*/

	// No framework specific tasks
	framework: "angular",

	/*
	*	For running javascript preprocessor tasks
	*
	*	Possible values: "js"
	*	@Todo: "coffee", "livescript"
	*/

	// Pure javascript
	scripts: "js",

	/*
	*	For running markup preprocessor tasks
	*
	*	Possible values: "html", "ejs"
	*	@Todo: "jade", "mustache", "handlebars"
	*/

	// No html preprocessor
	markup: "html",


	/*
	*	For running style preprocessor tasks
	*
	*	Possible values: "css", "less"
	*	@Todo: "scss"
	*/	

	// LESS styles preprocessor
	styles: "less"

}