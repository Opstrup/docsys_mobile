// Karma configuration
// Generated on Mon Sep 14 2015 09:04:57 GMT-0300 (BRT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      // lib first
      '../lib/angular/angular.js',
      '../lib/angular-mocks/angular-mocks.js',
      '../lib/angular-ui-router/release/angular-ui-router.js',
      '../lib/ionic/js/ionic.bundle.js',
      '../lib/ngCordova/dist/ng-cordova.js',
      '../lib/angular-resource/angular-resource.js',
      '../lib/angular-translate/angular-translate.js',
      '../lib/angular-translate-loader-static-files/angular-translate-loader-static-files.js',

      // main app
      '../app.js',

      // dependencies
      '../controllers/*.js',
      '../services/*.js',
      '../backendAPI/*.js',

      // tests
      '*tests.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '../controllers/*.js' : ['coverage'],
      '../services/*.js' : ['coverage'],
      '../backendAPI/*.js' : ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
