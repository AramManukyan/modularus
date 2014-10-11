/************************************************************
*					Environmental Configs
************************************************************/

	var config = require("./tasks/config");
	var paths = require("./tasks/paths.js");

/************************************************************
*						Project Configs
************************************************************/

	var config_vendor = require("./src/project-config");
	var paths_vendor = require("./src/project-paths-vendor");


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

		gulp.src(paths.scripts.js.src)
			.pipe(concat('app.js'))
			.pipe(gulp.dest(config.build_dir + '/js'))
			.pipe(connect.reload());	

	});

	// // Copies and concatenates vendor scripts to build dir
	gulp.task('scripts_vendor', function() {

		// console.log(mainBowerFiles());

		gulp.src(mainBowerFiles())
		.pipe( filter(['*.js']) )
		// .pipe( uglify() )
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest(config.build_dir + '/js'));
	});


/************************************************************
*						Styles
************************************************************/
	
	gulp.task('styles', ['styles_app', 'styles_vendor']);

	gulp.task('styles_app', function() {

		gulp.src(paths.styles.less.main)
			.pipe(less(lessOptions).on('error', gutil.log))
			.pipe(gulp.dest(config.build_dir + '/css'))
			.pipe(connect.reload());

	});

	gulp.task('styles_vendor', function() {

		gulp.src(config.src_dir + '/_vendor/vendor.less')
			.pipe(less(lessOptions).on('error', gutil.log))
			.pipe(gulp.dest(config.build_dir + '/css'));

	});

/************************************************************
*						Assets
************************************************************/
	
	gulp.task('assets', ['assets_app', 'assets_vendor']);

	gulp.task('assets_vendor', function() {


		for(var i in paths_vendor.assets) {

			var src = config.bower_dir + paths_vendor.assets[i].src;
			var dest = config.build_dir + paths_vendor.assets[i].dest;

			console.log(src);
			console.log(dest);

			gulp.src(src)
				.pipe(gulp.dest(dest));

		}

	});

	gulp.task('assets_app', function() {

		gulp.src(paths.assets)
			.pipe(gulp.dest(config.build_dir + '/assets'))
			.pipe(connect.reload());

	});


/************************************************************
*						Layouts
************************************************************/

	gulp.task('layouts', function() {


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
		  	
	  
	});

/************************************************************
*						Templates
************************************************************/
	
	gulp.task('templates', function() {

		gulp.src(paths.templates.html.src)
			// .pipe(flatten())
	  		.pipe(gulp.dest(config.build_dir + "/templates"))
	  		.pipe(connect.reload());
	  
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


		// When layout changes, process layouts 
		gulp.watch(paths.layouts.html.src, ['layouts']);
		gulp.watch(paths.layouts.jade.src, ['layouts']);
		gulp.watch(paths.layouts.ejs.src, ['layouts']);

		// When tamplate changes, process templates 
		gulp.watch(paths.templates.html.src, ['templates']);
		gulp.watch(paths.templates.jade.src, ['templates']);
		gulp.watch(paths.templates.ejs.src, ['templates']);

		// When styles changes compile them
		gulp.watch(paths.styles.css.src, ['styles_app']);
		gulp.watch(paths.styles.less.src, ['styles_app']);

		// When assets changes run assets again
		gulp.watch(paths.assets, ['assets_app']);
		

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