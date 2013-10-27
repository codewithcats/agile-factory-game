var FactoryGame = angular.module('FactoryGame', []);

FactoryGame.factory('FirebaseApp', [
    'constants.Firebase', 'constants.FirebaseAppUrl', 
    function(Firebase, appUrl) {
        return new Firebase(appUrl);
    }
]);

FactoryGame.factory('FirebaseAuth', [
    'constants.FirebaseLogin', 'FirebaseApp',
    function(FirebaseLogin, app) {
        return new FirebaseLogin(app, function(error, user) {
            if(error) {
                console.error('An error occurred while attempting login', error);
            } else if(user) {
                console.info('User ID: ' + user.id + ', Provider: ' + user.provider);
            } else {
                console.info('No user in this client.');
            }
        });
    }
]); 

FactoryGame.controller('SignInController', [
    '$scope', 'FirebaseAuth',
    function($scope, auth) {
        $scope.signIn = function(provider) {
            auth.login(provider);
        };    
    }
]); 
