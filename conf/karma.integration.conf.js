module.exports = function(config) {
    require(__dirname + '/karma.commons.conf')(config);

    config.set({files : config.files.concat('tests/integration/**/*.js')});
};