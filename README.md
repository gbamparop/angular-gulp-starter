# AngularJS starter application with Gulp
This is as an easy-to-use starter application for AngularJS with a simple folder structure. Moreover, Gulp is used for task automation such as SASS compilation, concatenation and minification of CSS and JS files, browser syncing, image minification, linting, documentation generation and others.


## Task automation features
* Distinct development and production
* Parse CSS and add vendor prefixes using [Autoprefixer](https://github.com/postcss/autoprefixer)
* Concatenate and minify CSS and JS files with [gulp-concat](https://github.com/contra/gulp-concat) and [UglifyJS](https://github.com/terinjokes/gulp-uglify)
* ES6 to ES5 compilation using [Babel](https://github.com/babel/babel)
* Generate source maps with [gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps)
* Minify PNG, JPEG, GIF and SVG images with [imagemin](https://github.com/imagemin/imagemin)
* Lossy compression of PNG images with [pngquant](https://github.com/pornel/pngquant)
* Keep multiple browsers & devices in sync with [BrowserSync](https://github.com/Browsersync/browser-sync)
* Identifying and reporting on patterns in JavaScript with [ESLint](https://github.com/eslint/eslint)
* Auto generate documentation with [JSDoc](https://github.com/jsdoc3/jsdoc)
* Preconfigured testing setup with [Jasmine](http://jasmine.github.io/), [Karma](https://github.com/karma-runner/karma) and [Protractor](https://github.com/angular/protractor)

## Application features
* Distinct files for services, filters and directives
* Version module from [angular-seed](https://github.com/angular/angular-seed)
* [Bootstrap](https://github.com/twbs/bootstrap) and [UI Bootstrap](https://github.com/angular-ui/bootstrap) included
* All views are located in "src/views" folder
* All assets (CSS and JavaScript files, images) are located in "src/assets" folder

## Getting started

### Prerequisites
You need [Git](http://git-scm.com/) to clone the angular-gulp-starter repository and [Node.js](https://nodejs.org) and its package manager (npm) to initialize the application and install depedencies.

### Clone repository
Clone the angular-gulp-starter repository using git:

```
git clone https://github.com/gbamparop/angular-gulp-starter.git
cd angular-gulp-starter
```

### Install Dependencies
npm is preconfigured to run bower so, in order to install depedencies you can run:

```
npm install
```

### Run application
Build the application and start an HTTP production server by running:

```
npm start
```
npm is preconfigured to run gulp so it will run all task autiomation features described above.

## Directory Layout

```
src/
  app/                                --> all of the source files for the application
    assets/                           --> all assets of the application
      img/                            --> all images of the application
      js/                             --> all scripts of the application
        app.js                        --> main application module
        directives.js                 --> directives
        filters.js                    --> filters file
        services.js                   --> main service
      sass/                           --> all stylesheets of the application
        app.scss                      --> default stylesheet
    components/                       --> all app specific modules
      version/                        --> version related components
        interpolate-filter.js         --> custom interpolation filter
        interpolate-filter_test.js    --> interpolate filter tests
        version.js                    --> version module declaration and basic "version" value service
        version_test.js               --> "version" value service tests
        version-directive.js          --> custom directive that returns the current app version
        version-directive_test.js     --> version directive tests
    views/                            --> all view templates
      home/                           --> the view1 view template and logic
        home.html                     --> the partial template
        home.js                       --> the controller logic
        home_test.js                  --> tests of the controller
      view2/                          --> the view1 view template and logic
        view2.html                    --> the partial template
        view2.js                      --> the controller logic
        view2_test.js                 --> tests of the controller
    index.html                        --> the main html file
docs/                                 --> all documentation files
  build/                              --> all needed files to generate documentation
    static/                           --> static assets to add to documentation
      css/                            --> all stylesheets to add to documentation
        custom.css                    --> stylesheet to add to documentation
      img/                            --> all images to add to documentation
    conf.json                         --> JSDoc configuration file
    README.md                         --> README file to add at the top of the documentation
e2e-tests/                            --> end-to-end tests
  conf.js                             --> Protractor configuration file
  tests.js                            --> end-to-end tests to be run by Protractor
.bowerrc                              --> bower configuration file
.eslintignore                         --> ESLint file ignore file
.eslintrc.json                        --> ESLint configuration file
.gitignore                            --> files to ignore
bower.json                            --> App configuration file (bower)
gulpfile.js                           --> Gulp configuration file
karma.conf.js                         --> config file for running unit tests with Karma
LICENCE                               --> app licence
package.json                          --> npm configuration file
README.md                             --> README file
```

## Testing

### Unit tests
angular-gulp-starter enables unit tests with [Karma](https://github.com/karma-runner/karma) test runner written in [Jasmine](http://jasmine.github.io/).

#### Writing unit tests and configuration file
* the configuration is karma.conf.js
* the tests are found next to the code they are testing and are named as ..._test.js.

#### Run the tests
Run all unit tests using:

```
npm run unit-tests
```

### End to end tests
angular-gulp-starter enables end to end testing with [Protractor](https://github.com/angular/protractor), an end-to-end test framework for AngularJS applications. All tests are written in [Jasmine](http://jasmine.github.io/).

#### Writing end to end tests and configuration file
* the configuration is e2e-tests/conf.js
* the tests are found in the "e2e-tests" folder

#### Run the tests
Run all end to end tests using:

```
npm run e2e-tests
```

## Documentation
The app documentation is auto-generated during the build process by the code comments using [JSDoc](https://github.com/jsdoc3/jsdoc). Documentation is generated in the "docs/dist" folder for all files in "src/assets/js".

### Configuration
* The JSDoc configuration file is docs/build/conf.json
* All static assets needed for the documentation are located at build/static
* Other information to be included in the documentation is located at docs/build/README.md

### Generating docs
In order to generate documentation without building the application use:

```
npm run docs
```

## Authors
This project is created and maintained by [Giorgos Bamparopoulos](https://github.com/gbamparop/)