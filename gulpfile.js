/************************************************************
*					Environmental Configs
************************************************************/

	var config = require("./tasks/config");
	var paths = require("./tasks/paths.js");


/************************************************************
*					Gulp Modules
************************************************************/

// Common modules
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	connect = require('gulp-connect'),
	concat = require('gulp-concat'),
	rename = require("gulp-rename"),
	flatten = require('gulp-flatten'),
	uglify = require('gulp-uglify'),
	fileinclude = require('gulp-file-include');

/************************************************************
*						Scripts
************************************************************/

	// // Handles application and vendor scripts
	gulp.task('scripts', ['scripts_app', 'scripts_vendor']);

	// // Copies app scripts to build dir
	gulp.task('scripts_app', function() {


		if(config.engines.coffee) {
			// ToDo: Coffee
		}
		// Processing pure javascript files
		else {
			gulp.src(paths.scripts.js.src)
				.pipe(concat('app.js'))
				.pipe(gulp.dest(config.build_dir + '/js'))
				.pipe(connect.reload());	
		}
		

	});

	// // Copies and concatenates vendor scripts to build dir
	gulp.task('scripts_vendor', function() {
		gulp.src(paths.vendor.scripts)
			.pipe(concat('vendor.js'))
			.pipe(gulp.dest(config.build_dir + '/js'));
	});


/************************************************************
*						Styles
************************************************************/
	
	gulp.task('styles', ['styles_app', 'styles_vendor']);

	gulp.task('styles_app', function() {

		if(config.engines.less) {

			var less = require("gulp-less");

			var lessOptions = {
				paths: [ 
					config.src_dir + "/app",
					config.bower_dir,
				]
			};

			gulp.src(paths.styles.less.main)
				.pipe(less(lessOptions).on('error', gutil.log))
				.pipe(gulp.dest(config.build_dir + '/css'))
				.pipe(connect.reload());
		}
		else if(config.engines.scss) {
			// Todo: SCSS
		}
		else if(config.engines.stylus) {
			// Todo: STYLUS
		}
		else {
			// Todo: Pure CSS
		}

		
	});

	gulp.task('styles_vendor', function() {
		gulp.src(paths.vendor.styles)
			.pipe(concat('vendor.css'))
			.pipe(gulp.dest(config.build_dir + '/css'));
	});

/************************************************************
*						Assets
************************************************************/

	gulp.task('assets', function() {

		gulp.src(paths.assets)
			.pipe(gulp.dest(config.build_dir + '/assets'));

	});


/************************************************************
*						Layouts
************************************************************/

	gulp.task('layouts', function() {

		if(config.engines.jade) {
			// ToDo: Jade
		}
		else if(config.engines.ejs) {
			// ToDo: EJS
		}
		else {
			// HTML

			gulp.src(paths.layouts.html.src)
				.pipe(fileinclude({
					prefix: '@@',
					basepath: '@root'
				}))
				.pipe(flatten())
				.pipe(rename(function (path) {
					path.basename = path.basename.replace(".layout", "");
				}))
		  		.pipe(gulp.dest(config.build_dir))
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
		gulp.watch(paths.scripts.js.src, ['scripts_app']);
		gulp.watch(paths.scripts.coffee.src, ['scripts_app']);


		// When template changes, process templates 
		gulp.watch(paths.templates.html.src, ['layouts']);
		gulp.watch(paths.templates.jade.src, ['layouts']);
		gulp.watch(paths.templates.ejs.src, ['layouts']);

		// When styles changes compile them
		gulp.watch(paths.styles.css.src, ['styles_app']);
		gulp.watch(paths.styles.less.src, ['styles_app']);

	});


/************************************************************
*					Global tasks
*************************************************************/
	
	// Builds the application
	// Run "gulp build --production" for production build 
	// with minified styles and scripts
	gulp.task('build', [
		// 'jsHint', 
		'scripts', 
		'styles', 
		'layouts'
	]);

	// // Run this task for development
	gulp.task('develop', [
		'build',
		'watch', 
		'connect'
	]);

	gulp.task('default', ['develop']);