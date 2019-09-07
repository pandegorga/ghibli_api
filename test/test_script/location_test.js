const Location                  = require('../../models/location');
const mockLocation              = require('../mock/location_mock')
var expect                      = require('chai').expect;
var locationController          = require('../../controllers/locationController');
var sinon                       = require('sinon'); 

describe("location scheme testing", function(){
    it('should have validation error for repost if not dank', function(done) {
        //1. set up the model in a way the validation should fail
        var loc = new Location( mockLocation.location_a);     
        //2. run validate
        loc.validate(function(err) {
            //3. check for the error property we need
            expect(err.errors.repost).to.not.exist;
            done();
        });
    });
})

describe("Location route testing", function(){
    beforeEach(function() {
        sinon.stub(Location, 'find');
    });    
    afterEach(function(){
        Location.find.restore();
    });
    it('should send all location', function() {
        var expectedModels = [mockLocation.location_a, mockLocation.location_b];
        Location.find.yields(null, expectedModels);
        var req = { params: { } };
        var res = {
            send: sinon.stub()
        }; 
        locationController.index(req, res)
        sinon.assert.calledWith(res.send, expectedModels);
    }); 
})
