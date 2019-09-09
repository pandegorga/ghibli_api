const Vehicle                   = require('../../models/vehicle');
const vehicleMock               = require('../mock/vehicle_mock')
var expect                      = require('chai').expect;
var vehicleController           = require('../../controllers/vehicleController');
var sinon                       = require('sinon'); 

describe("location scheme testing", function(){
    it('should have validation error for repost if not dank', function(done) {
        //1. set up the model in a way the validation should fail
        var veh = new Vehicle(vehicleMock.vehicle_mock);     
        //2. run validate
        veh.validate(function(err) {
            //3. check for the error property we need
            expect(err.errors.repost).to.not.exist;
            done();
        });
    });
})

describe("Vehcicle route testing", function(){
    beforeEach(function() {
        sinon.stub(Vehicle, 'find');
    });    
    afterEach(function(){
        Vehicle.find.restore();
    });
    it('should send all vehicle', function() {
        var expectedModels = [vehicleMock.vehicle];
        Vehicle.find.yields(null, expectedModels);
        var req = { params: { } };
        var res = {
            send: sinon.stub()
        }; 
        vehicleController.index(req, res)
        sinon.assert.calledWith(res.send, expectedModels);
    }); 
})
