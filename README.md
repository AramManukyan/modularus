Modularus
=========

Boilerplate for creation of modular front-end.

## Introduction

Modularus is a set of tools and predefined file structure which allows you to create well-organized, easy scalable and maintainable front-end.


Usually during front-end development we face with problems such 

* how to organize the application files?
* how to breakdown large UI into small pieces, and assemble them?
* how to reuse common parts (header/footer/sidebar etc..) in different layouts?
* how to make changes in ready front-end with minimal pain?
* what if the number of layouts is or will be awesomely large in future?

And finally

* how to make front-end development process enjoyable instead of painful?

During couple of years of development of front-end I came to prediction that correct defined structure and style are the only way to make really great and large-scale front-end applications. But any time on new project I had to do lot of bootstrap work until all the development environment was configured correctly and had satisfactory architecture. Usually I create applications with AngularJS and my code structure looked like [angular-boilerplate](https://github.com/ngbp/ngbp)'s simplified version. But what if we want use different framework or tools? Or maybe we don't need a full-fledged front end application with lot of JavaScript but just a PSD->HTML conversation and creation of wireframes for large amount of different layouts? 

That's why I've decided to create a boilerplate which will be flexible as much as possible and will allow us to use the tools/libraries/frameworks/css-preprocessors/template-engines we want and will provide good practices of scalable and modular application.

## Directory structure

The directory structure is following

```
modularus/
  |- bower_components/
  |- node_modules/
  |- src/
  |  |- assets/
  |  |- common/
  |  |- main/
  |  |- module-about/
  |  |- module-home/
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



## Modules - file organization by thear feature



## Build System



## FAQ
