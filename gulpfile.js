/************************************************************
*						Project Configs
************************************************************/

	var config = require("./tasks/config");
	var paths = {};

	paths.app = require("./src/paths-app");
	paths.vendor = require("./src/paths-vendor");


/************************************************************
*					Gulp Modules
************************************************************/

// Common modules
var gulp = require('gulp'),
	gulpif = require('gulp-if'),
	lazypipe = require('lazypipe'),
	gulpIgnore = require('gulp-ignore'),
	gutil = require('gulp-util'),
	connect = require('gulp-connect'),
	concat = require('gulp-concat'),
	rename = require("gulp-rename"),
	flatten = require('gulp-flatten'),
	uglify = require('gulp-uglify'),
	fileinclude = require('gulp-file-include'),
	filter = require('gulp-filter'),
	mainBowerFiles = require('main-bower-files'),
	less = require("gulp-less"),
	jshint = require('gulp-jshint');

// Defining tasks in object to be able to refer them by their name later
var fileTasks = {
	concat: concat,
	rename: rename,
	flatten: flatten,
	uglify: uglify,
	fileinclude: fileinclude,
	filter: filter,
	mainBowerFiles: mainBowerFiles,
	less: less,
	jshint: jshint
};

var lessOptions = {
	paths: [ 
		config.src_dir,
		config.bower_dir,
	]
};



/************************************************************
*						Scripts
************************************************************/

	// // Handles application and vendor scripts
	gulp.task('scripts', ['scripts_app', 'scripts_vendor']);

	// Process application scripts
	gulp.task('scripts_app', function() {

		for(var i in paths.app.scripts) {
			processPaths(paths.app.scripts[i]);
		}

	});

	// Process vendor scripts
	gulp.task('scripts_vendor', function() {

		for(var i in paths.vendor.scripts) {
			processPaths(paths.vendor.scripts[i]);
		}

	});


/************************************************************
*						Styles
************************************************************/
	
	gulp.task('styles', ['styles_app', 'styles_vendor']);

	// Process application styles
	gulp.task('styles_app', function() {

		for(var i in paths.app.styles) {
			processPaths(paths.app.styles[i]);
		}
	});

	// Process vendor styles
	gulp.task('styles_vendor', function() {

		for(var i in paths.vendor.styles) {
			processPaths(paths.vendor.styles[i]);
		}

	});

/************************************************************
*						Assets
************************************************************/
	
	gulp.task('assets', ['assets_app', 'assets_vendor']);

	// Process vendor assets
	gulp.task('assets_vendor', function() {


		for(var i in paths.vendor.assets) {
			processPaths(paths.vendor.assets[i]);
		}

	});

	gulp.task('assets_app', function() {

		for(var i in paths.app.assets) {
			processPaths(paths.app.assets[i]);
		}

	});


/************************************************************
*						Layouts
************************************************************/
	
	// Process apllication layouts
	gulp.task('layouts', function() {

		for(var i in paths.app.layouts) {
			processPaths(paths.app.layouts[i]);
		}
		  	
	});

/************************************************************
*						Templates
************************************************************/

	// Process application templates
	gulp.task('templates', function() {

		for(var i in paths.app.templates) {
			processPaths(paths.app.templates[i]);
	  	}
	  
	});

/************************************************************
*						Other
************************************************************/

	// // Local server pointing on public folder
	gulp.task('connect', function() {
		connect.server({
			root: config.build_dir,
			port: 3333,
			livereload: true
		});
	});


	// Rerun the task when a file changes
	gulp.task('watch', function() {

		// When application script file changes, process application scripts
		for(var i in paths.app.scripts) {
			gulp.watch(paths.app.scripts[i].src, ['scripts_app']);
		}

		// When application style changes, process application styles
		for(var i in paths.app.styles) {
			gulp.watch(paths.app.styles[i].src, ['styles_app']);
		}

		// When application layout changes, process application layouts
		for(var i in paths.app.layouts) {
			gulp.watch(paths.app.layouts[i].src, ['layouts_app']);
		}

		// When application template changes, process application templates
		for(var i in paths.app.templates) {
			gulp.watch(paths.app.templates[i].src, ['templates_app']);
		}

		// When application asset changes, process application assets
		for(var i in paths.app.assets) {
				gulp.watch(paths.app.assets[i].src, ['assets_app']);
		}
		
	});



/************************************************************
*					
*************************************************************/


function processPaths (item, reload) {

	// If item.src is array
	// Always ignore this files
	if(Array.isArray(item.src)) {
		item.src.push("!" + config.src_dir +"/paths-app.js");
		item.src.push("!" + config.src_dir +"/paths-vendor.js");	
	}

	

	// Creating empty pipe at the beginning to not 
	// Cause lazypipe error
	var generatedPipe = lazypipe()
		.pipe(function () {
			return false;
		});

	if(typeof item.tasks !== "undefined") {
		for(var i in item.tasks) {
			var task = item.tasks[i];

			if(typeof fileTasks[task.name] !== "undefined") {
				console.log(task.name);
				generatedPipe = lazypipe(generatedPipe).pipe(fileTasks[task.name], task.options || {});
			}
			else {
				console.log("Task \"" + task.name + "\" is not defined...");
			}
		}
	}


	gulp.src(item.src)
		.pipe(generatedPipe())
		.pipe(gulp.dest(item.dest));
		// .pipe(connect.reload());

}


/************************************************************
*					Global tasks
*************************************************************/
	
	// Builds the application
	// Run "gulp build --production" for production build 
	// with minified styles and scripts
	gulp.task('build', [
		'scripts', 
		'styles', 
		'layouts',
		// 'templates',
		// 'assets'
	]);

	// // Run this task for development
	gulp.task('develop', [
		'build',
		'watch', 
		'connect'
	]);

	gulp.task('default', ['develop']);