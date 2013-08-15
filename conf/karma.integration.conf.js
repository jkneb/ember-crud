module.exports = function(config) {
    require(__dirname + '/karma.commons.conf')(config);

    config.set({
        files : config.files.concat('tests/integration/**/*.js'),
        reportSlowerThan: 1000,
        coverageReporter: {
            type : 'html',
            dir : 'tests/coverage/integration'
        }
    });
};