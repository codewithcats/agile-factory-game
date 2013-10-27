(function() {
    var app = new Firebase('https://factorygame.firebaseio.com');
    var auth = new FirebaseSimpleLogin(app, function(error, user) {
        if(error) {
            console.error('An error occurred while attempting login', error);
        } else if(user) {
            console.info('User ID: ' + user.id + ', Provider: ' + user.provider);
        } else {
            console.info('No user in this client.');
        }
    });
})();
