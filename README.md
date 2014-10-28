Modularus (under construction) 
=========

Boilerplate for modular front-end creation.

## Introduction

Modularus is a set of tools and predefined file structure which allows you to create well-organized, easy scalable and maintainable front-end applications or wireframes.


## Supported configurations

Modularus supports some common configurations out of the box. 

* Frameworks: `AngularJS` @ToDo: `BackboneJS`, `EmberJS`
* Scripts: `JavaScript` @ToDo: `CoffeeScript`
* Markup:  `HTML` @ToDo: `EJS`, `Jade`
* Stylesheets: `CSS`, `LESS` @ToDo: `SASS`

But it doesn't limit or force to use any of those. If you want to use configurations which are different from listed ones, you should just little bit tweak the modularus for your own needs.

## Directory structure

The directory structure is following

```
modularus/
  |- bower_components/
  |- node_modules/
  |- src/
  |  |- _assets/
  |  |- _common/
  |  |- _main/
  |  |- about/
  |  |- home/
  |= public/
  |- tasks/
  |  |- <application 'building' tasks>
  |- .bowerrc
  |- .gitignore
  |- bower.json
  |- gulpfile.js
  |- package.json
  |- readme.md
```

- `bower_components/` here are installed third-party vendor libraries by bower package manager. you can read more about bower at [http://bower.io](http://bower.io). This directory is created after installation (see Installation chapter).
- `node_modules/` here are installed nodeJS libraries which are required for application building or running tests.
- `src` the main directory where application sources are located.
    - `_assets/` application images/fonts
    - `_common/` common modules of application (partials, common functionality parts, helpers, custom libraries etc.). Note that sometimes they can contain only template partials like headers, footers, sidebar, or just JS files, or style files.
    - `_main/` main files of application like main stylesheet file, main entry point of application or main module from where others are defined(in angualr case), route files, configs and so on. For example you can have a main.js file which will be the entry point of application scripts (can be main controller or file which contains the initialization of all required libraries and so). Also you will have main style file (less/scss/stylus/css or other) from where other styles are connected. I suggest to use any preprocessor (less/scss/stylus) and have main style file and variables file like `variables.less` for style variables instead of using pure CSS. But sure you're free to choose :-)
    - `about/` `home/` these are example first level modules (see modules chapter) which correspond to "about" and "home" page of our application. 
- `public/` in this folder the application is being assemled from all files. (see build system chapter) **WARNING!** Never edit files in this folder because they are regenerated automatically every time and all your changes will be lost! **Always** work in `src/` folder!
- `tasks/` tasks for application assembling and building (styles and templates preprocessing, concatenation of multiple files and so on). 
- `.bowerc` - configuration file for bower
- `.gitignore` the list of directories that we don't want to push to remote repository (vendor files/libraries)
- `bower.json` this files defines which libraries should be installed by bower (jQuery/AngularJS/Bootstrap/Backbone/Ember and so on...)
- `gulpfile.js` this file is the main file of our application build system (Gulp). You can read more about gulp or see the build system chapter.
- `package.json` this file contains NodeJS libraries which are required for application building and testing.
- `readme.md` the file where are defined this documentation :-)



## Installation

Installation process and tools can be a little bit scary at first time, but when you've done and understood it once it's becoming very straight forward. 

### Step 1

First you need to have node.js and npm (node package manager)  installed on your machine. If you don't have nodeJS, please download and install it from [node.js offical website](http://nodejs.org/)

### Step 2

After you have node and npm installed on your machine, you should install **bower** and **gulp**. Open your cmd and run the following command.

`npm install -g bower gulp`

You can read more about [gulp](http://gulpjs.com/) and [bower](http://bower.io/) on their official websites.

### Step 3

Then you need to install project's local npm dependencies just running

`npm install`

### Step 4

After you have installed bower and gulp, and now bower command is available in your cmd, let's install all project third-party library dependencies (like jQuery, Bootstrap, AngularJS, BackboneJS), which should be defined in bover.json file. Run

`bower install`

By default the modularus comes with jQuery and Bootstrap. For more information about bower please refer to [their website](http://bower.io/)

### Step 5

Now when all third party libraries are installed the project is ready to be built and runned (see Build System chapter). For that in your cmd run

`gulp`

If everything is done correctly this command will build the project in "public" directory and run a local web server pointing to "public" directory (by default on [http://localhost:3333/](http://localhost:3333/)).


Gulp is configured so that it will watch for file changes re-compile the project if any of files were changed, so you don't have to run `gulp` command any time you make changes in project files.

The local server runs with livereload, so the changes after re-building the project should be visible without refreshing the page in rowser (cool feature, isn't it? ;-) ).


So open your favorite browser and navigate to [http://localhost:3333/](http://localhost:3333/).

## Configuration

By default the [build system]() is configured to use pure **JavaScript**, pure **HTML** and **LESS**. But you can easily reconfigure gulp to use different script, template and style preprocessors in `tasks/config.js`.

Also you should **manually** specify the paths to you third-party vendor libraries installed by bower in `tasks/paths-vendor.js`.

The following prerpocessors are available.

*Scripts*

- Pure javascript (.js)
- CoffeeScript (.coffee)
- LiveScript (.ls)
- TypeScript (.ts)

*Templates*

- Pure HTML (.html)
- Jade (.jade)
- EJS (.ejs)
- Mustache (.mtch)
- Handlebars (.hbs)

*Styles*

- Pure CSS
- LESS
- SASS
- Stylus



## Modules - file organization by thear feature



## Build System



## FAQ
