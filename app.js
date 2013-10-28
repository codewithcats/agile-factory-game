var FactoryGame = angular.module('FactoryGame', []);

FactoryGame.factory('FirebaseApp', [
    'constants.Firebase', 'constants.FirebaseAppUrl', 
    function(Firebase, appUrl) {
        return new Firebase(appUrl);
    }
]);

FactoryGame.factory('FirebaseAuth', [
    'constants.FirebaseLogin', 'FirebaseApp', 'User',
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
        executeOnChangeCallbacks = function() {
            _.each(callbacks, function(c) {
                c(user);
            });
        },
        fn = function(u) {
            if(u) {
                user = u;
                executeOnChangeCallbacks();
            } else {
                return user;
            }
        };
        fn.onChange = function(c) {
            c && callbacks.push(c);
        };
        fn.clear = function() {
            user = undefined;
            executeOnChangeCallbacks();
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
        user.onChange(function() {
            $scope.$apply(function() {
                $scope.user = user();
            });
        });
    }
]); 
