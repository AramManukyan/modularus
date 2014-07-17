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
	uglify = require('gulp-uglify');


/************************************************************
*						Scripts
************************************************************/

	// // Handles application and vendor scripts
	// gulp.task('scripts', ['scripts_app', 'scripts_vendor']);

	// // Copies app scripts to build dir
	// gulp.task('scripts', function() {

	// 	gulp.src(paths.scripts.app.js)
	// 		.pipe(concat('app.js'))
	// 		.pipe(gulp.dest(config.build_dir + '/js'))
	// 		.pipe(connect.reload());

	// });

	// // Copies and concatenates vendor scripts to build dir
	// gulp.task('scripts_vendor', function() {
	// 	gulp.src(paths.scripts_vendor)
	// 		.pipe(concat('vendor.js'))
	// 		.pipe(gulp.dest(config.build_dir + '/js'));
	// });

/************************************************************
*						Styles
************************************************************/
	
	// gulp.task('styles', ['styles_app', 'styles_vendor']);

	// gulp.task('styles_app', function() {

	// 	var lessOptions = {
	// 		paths: [ 
	// 			config.src_dir + "/app",
	// 			config.bower_dir,
	// 		]
	// 	};

	// 	gulp.src(paths.styles_main)
	// 		.pipe(less(lessOptions).on('error', gutil.log))
	// 		.pipe(gulp.dest(config.build_dir + '/css'))
	// 		.pipe(connect.reload());
	// });

	// gulp.task('styles_vendor', function() {
	// 	gulp.src(paths.styles_vendor)
	// 		.pipe(concat('vendor.css'))
	// 		.pipe(gulp.dest(config.build_dir + '/css'));
	// });

/************************************************************
*						Assets
************************************************************/

	// gulp.task('assets', function() {

	// 	gulp.src(paths.assets)
	// 		.pipe(gulp.dest(config.build_dir + '/assets'));

	// });


/************************************************************
*						Templates
************************************************************/

	// gulp.task('templates', function() {
	  
	//   	gulp.src(paths.templates.html)
	//   		.pipe(gulp.dest(config.build_dir + '/templates'))
	// 		.pipe(connect.reload());
	// });



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
	// gulp.task('connect', function() {
	// 	connect.server({
	// 		root: config.build_dir,
	// 		port: 3333,
	// 		livereload: true
	// 	});
	// });


	// // Rerun the task when a file changes
	// gulp.task('watch', function() {
	// 	// When application script file changes, handle app scripts
	// 	gulp.watch(paths.scripts_app, ['jsHint', 'scripts_app']);

	// 	// When template changes, process templates 
	// 	gulp.watch(paths.templates, ['templates']);

	// 	// When styles changes compile them
	// 	gulp.watch(paths.styles_app, ['styles_app']);

	// 	// When index.html changes process it again
	// 	gulp.watch(paths.index, ['index']);
	// });


/************************************************************
*					Global tasks
*************************************************************/
	
	// // Builds the application
	// // Run "gulp build --production" for production build 
	// // with minified styles and scripts
	// gulp.task('build', [
	// 	'jsHint', 
	// 	'scripts', 
	// 	'styles', 
	// 	'templates'
	// ]);

	// // Run this task for development
	// gulp.task('develop', [
	// 	'build',
	// 	'watch', 
	// 	'connect'
	// ]);

	// gulp.task('default', ['develop']);