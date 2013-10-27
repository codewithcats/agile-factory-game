describe('FirebaseUser', function() {
    var FirebaseUser;
    beforeEach(module('FactoryGame'));
    beforeEach(inject(function(_FirebaseUser_) {
        FirebaseUser = _FirebaseUser_;
    }));
    
    it('should keep track of user', function() {
        var user = {
            name: 'Amp'
        };
        FirebaseUser(user);
        expect(FirebaseUser()).toEqual(user);
        user = 'Amp';
        FirebaseUser(user);
        expect(FirebaseUser()).toEqual(user);
    });
});
