var FactoryGame = angular.module('FactoryGame', []);

FactoryGame.factory('FirebaseApp', [
    'constants.Firebase', 'constants.FirebaseAppUrl', 
    function(Firebase, appUrl) {
        return new Firebase(appUrl);
    }
]);

FactoryGame.factory('FirebaseAuth', [
    'constants.FirebaseLogin', 'FirebaseApp', 'FirebaseUser',
    function(FirebaseLogin, app, user) {
        return new FirebaseLogin(app, function(error, u) {
            if(error) {
                console.error('An error occurred while attempting login', error);
            } else if(u) {
                user(u);
                console.info(user());
            } else {
                console.info('No user in this client.');
            }
        });
    }
]); 

FactoryGame.factory('User', [
    function() {
        var user,
        callbacks = [],
        fn = function(u) {
            if(u) {
                user = u;
                _.each(callbacks, function(c) {
                    c(user);
                });
            } else {
                return user;
            }
        };
        fn.onChange = function(c) {
            c && callbacks.push(c);
        };
        return fn;
    }
]);

FactoryGame.controller('SignInController', [
    '$scope', 'FirebaseAuth', 'User',
    function($scope, auth, user) {
        $scope.signIn = function(provider) {
            auth.login(provider);
        };    
        $scope.signOut = function() {
            auth.logout();
        };
        $scope.user = user();
    }
]); 
