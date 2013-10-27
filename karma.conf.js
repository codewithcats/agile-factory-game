module.exports = function(config) {
    config.set({
        autoWatch: true,
        browsers: ['Chrome'],
        files: [
            'https://ajax.googleapis.com/ajax/libs/angularjs/1.0.8/angular.min.js',
            'app.js',
            'tests.js'
        ],
        frameworks: ['jasmine']
    });
};
