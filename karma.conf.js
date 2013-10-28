module.exports = function(config) {
    config.set({
        autoWatch: true,
        browsers: ['Chrome'],
        files: [
            'http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min.js',
            'https://ajax.googleapis.com/ajax/libs/angularjs/1.0.8/angular.min.js',
            'lib/angular-mocks.js',
            'lib/sinon-1.7.3.js',
            'app.js',
            'tests.js'
        ],
        frameworks: ['jasmine']
    });
};
