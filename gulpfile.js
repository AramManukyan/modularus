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
	less = require("gulp-less");

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

	// // Copies app scripts to build dir
	gulp.task('scripts_app', function() {

		for(var i in paths.app.scripts) {

			var item = paths.app.scripts[i];

			item.src.push("!" + config.src_dir +"/paths-app.js");
			item.src.push("!" + config.src_dir +"/paths-vendor.js");
			item.src.push("!" + config.src_dir +"/project-config.js");

			// console.log(item.src);


			gulp.src(item.src)
				.pipe( 
					gulpif(
						typeof item.concat !== "undefined", 
						concat(item.concat || "app.js")
					)
				)
				.pipe(gulp.dest(item.dest))
				.pipe(connect.reload());

		}

	});

	// // Copies and concatenates vendor scripts to build dir
	gulp.task('scripts_vendor', function() {

		for(var i in paths.vendor.scripts) {

			var item = paths.vendor.scripts[i];

			gulp.src(item.src)
				.pipe( 
					gulpif(
						typeof item.concat !== "undefined", 
						concat(item.concat || "vendor.js")
					) 
				)
				.pipe(gulp.dest(item.dest));

		}

	});


/************************************************************
*						Styles
************************************************************/
	
	gulp.task('styles', ['styles_app', 'styles_vendor']);

	gulp.task('styles_app', function() {

		for(var i in paths.app.styles) {

			var item = paths.app.styles[i];

			gulp.src(item.src)
				.pipe(
					gulpif(
						typeof item.processor !== "undefined" && item.processor == "less", 
						less(lessOptions).on('error', gutil.log)
					)
				)
				.pipe( 
					gulpif(
						typeof item.concat !== "undefined", 
						concat(item.concat || "app.css").on('error', gutil.log)
					) 
				)
				.pipe(gulp.dest(item.dest))
				.pipe(connect.reload());

		}

	});

	gulp.task('styles_vendor', function() {

		for(var i in paths.vendor.styles) {

			var item = paths.vendor.styles[i];

			gulp.src(item.src)
				.pipe(
					gulpif(
						typeof item.processor !== "undefined" && item.processor == "less", 
						less(lessOptions).on('error', gutil.log)
					)
				)
				.pipe( 
					gulpif(
						typeof item.concat !== "undefined", 
						concat(item.concat || "vendor.css")
					) 
				)
				.pipe(gulp.dest(item.dest));

		}

	});

/************************************************************
*						Assets
************************************************************/
	
	gulp.task('assets', ['assets_app', 'assets_vendor']);

	gulp.task('assets_vendor', function() {


		for(var i in paths.vendor.assets) {

			var item = paths.vendor.assets[i];

			gulp.src(item.src)
				.pipe(gulp.dest(item.dest));

		}

	});

	gulp.task('assets_app', function() {

		for(var i in paths.app.assets) {

			var item = paths.app.assets[i];

			// console.log(item);

			gulp.src(item.src)
				.pipe(gulp.dest(item.dest))
				.pipe(connect.reload());

		}


	});


/************************************************************
*						Layouts
************************************************************/

	gulp.task('layouts', function() {

		for(var i in paths.app.layouts) {

			var item = paths.app.layouts[i];

			gulp.src(item.src)
				.pipe(fileinclude({
					prefix: '@@',
					basepath: '@root'
				}))
				.pipe(flatten())
				.pipe(rename(function (path) {
					path.basename = path.basename.replace(".layout", "");
				}))
		  		.pipe(gulp.dest(item.dest))
		  		.pipe(connect.reload());

		}	
		  	
	  
	});

/************************************************************
*						Templates
************************************************************/
	
	gulp.task('templates', function() {

		for(var i in paths.app.templates) {

			var item = paths.app.templates[i];

			gulp.src(item.src)
		  		.pipe(gulp.dest(item.dest))
		  		.pipe(connect.reload());

	  	}
	  
	});

/************************************************************
*						Linting
************************************************************/

	// gulp.task('jsHint', function() {

	// 	gulp.src(paths.scripts_app)
	// 		.pipe(jshint())
	// 		.pipe(jshint.reporter('default'));
			
	// });

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


		// When application script file changes, handle app scripts
		for(var i in paths.app.scripts) {
			gulp.watch(paths.app.scripts[i].src, ['scripts_app']);
		}

		// // When styles changes compile them
		for(var i in paths.app.styles) {
			gulp.watch(paths.app.styles[i].src, ['styles_app']);
		}

		// // When layout changes, process layouts 
		for(var i in paths.app.layouts) {
			gulp.watch(paths.app.layouts[i].src, ['layouts_app']);
		}

		// // When tamplate changes, process templates 
		for(var i in paths.app.templates) {
			gulp.watch(paths.app.templates[i].src, ['templates_app']);
		}

		// // When assets changes run assets again
		for(var i in paths.app.assets) {
				gulp.watch(paths.app.assets[i].src, ['assets_app']);
		}
		

	});


/************************************************************
*					Global tasks
*************************************************************/
	
	// Builds the application
	// Run "gulp build --production" for production build 
	// with minified styles and scripts
	gulp.task('build', [
		'scripts', 
		'styles', 
		'assets',
		'layouts',
		'templates'
	]);

	// // Run this task for development
	gulp.task('develop', [
		'build',
		'watch', 
		'connect'
	]);

	gulp.task('default', ['develop']);