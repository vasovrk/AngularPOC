var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],

        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true,
        autoWatchBatchDelay: 300,
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            './src/**/*.spec.ts'],

        preprocessors: {
            './src/**/*.spec.ts': ['webpack']
        },

        plugins: [
            "karma-jasmine",
            "karma-webpack",
            "karma-phantomjs-launcher",
            "karma-mocha-reporter",
            "karma-source-map-support"
        ],
        webpack: webpackConfig,

        webpackMiddleware: {
            noInfo: true
        }
    });
}