describe('User', function() {
    var User;
    beforeEach(module('FactoryGame'));
    beforeEach(inject(function(_User_) {
        User = _User_;
    }));
    
    it('should keep track of user', function() {
        var user = {
            name: 'Amp'
        };
        User(user);
        expect(User()).toEqual(user);
        user = 'Amp';
        User(user);
        expect(User()).toEqual(user);
    });

    describe('onChange()', function() {
        it('should call callback function when user has changed', function() {
            var callback = sinon.expectation.create('callback');
            callback.once().withArgs('user');
            User.onChange(callback);
            User('user');
            callback.verify();
        });
        it('should support multiple callback', function() {
            var callback1 = sinon.expectation.create('callback:1'),
            callback2 = sinon.expectation.create('callback:2');

            callback1.once().withArgs('user');
            callback2.once().withArgs('user');            

            User.onChange(callback1);
            User.onChange(callback2);
            User('user');

            callback1.verify();
            callback2.verify();
        });
    });
});
