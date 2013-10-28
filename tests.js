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

    describe('onChange()', function() {
        it('should call callback function when user has changed', function() {
            var callback = sinon.expectation.create('callback');
            callback.once().withArgs('user');
            FirebaseUser.onChange(callback);
            FirebaseUser('user');
            callback.verify();
        });
        it('should support multiple callback', function() {
            var callback1 = sinon.expectation.create('callback:1'),
            callback2 = sinon.expectation.create('callback:2');

            callback1.once().withArgs('user');
            callback2.once().withArgs('user');            

            FirebaseUser.onChange(callback1);
            FirebaseUser.onChange(callback2);
            FirebaseUser('user');

            callback1.verify();
            callback2.verify();
        });
    });
});
