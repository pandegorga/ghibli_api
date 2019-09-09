const People                    = require('../../models/people');
const mockPeople                = require('../mock/people_mock')
var expect                      = require('chai').expect;
var peopleController            = require('../../controllers/peopleController');
var sinon                       = require('sinon'); 

describe("people scheme testing", function(){
    it('should have validation error for repost if not dank', function(done) {
        //1. set up the model in a way the validation should fail
        var people = new People( mockPeople.people);     
        //2. run validate
        people.validate(function(err) {
            //3. check for the error property we need
            expect(err.errors.repost).to.not.exist;
            done();
        });
    });
})

describe("People route testing", function(){
    beforeEach(function() {
        sinon.stub(People, 'find');
    });    
    afterEach(function(){
        People.find.restore();
    });
    it('should send all people', function() {
        var expectedModels = [mockPeople.people];
        People.find.yields(null, expectedModels);
        var req = { params: { } };
        var res = {
            send: sinon.stub()
        }; 
        peopleController.index(req, res)
        sinon.assert.calledWith(res.send, expectedModels);
    }); 
})
