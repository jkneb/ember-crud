module.exports = function(config) {
    require(__dirname + '/karma.commons.conf')(config);

    config.set({
        files : config.files.concat('tests/unit/**/*.js'),
        coverageReporter: {
            type : 'html',
            dir : 'tests/coverage/unit'
        }
    });
};