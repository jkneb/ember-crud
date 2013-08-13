module.exports = function (config){
    config.set({
        plugins: [
            'karma-mocha',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-firefox-launcher',
            "karma-coverage",
            "karma-coffee-preprocessor"
        ],

        files: [
            // Source
            'assets/js/libs.js',
            'assets/js/app.js',

            // Tests
            'tests/libs/**/*.js',
            'tests/tests-utils.js'
        ],

        preprocessors: {
            '**/*.coffee': 'coffee',
            'assets/js/app.js': 'coverage'
        },

        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        },

        reporters: ['progress', 'coverage'],
        basePath: '../',
        frameworks: ['mocha'],
        exclude: [],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        captureTimeout: 20000,
        singleRun: false,
        reportSlowerThan: 500
    });
};