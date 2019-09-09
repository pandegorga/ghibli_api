const Species                    = require('../../models/species');
const mockSpecies                = require('../mock/species_mock')
var expect                      = require('chai').expect;
var speciesController            = require('../../controllers/speciesController');
var sinon                       = require('sinon'); 

describe("people scheme testing", function(){
    it('should have validation error for repost if not dank', function(done) {
        //1. set up the model in a way the validation should fail
        var species = new Species( mockSpecies.species);     
        //2. run validate
        species.validate(function(err) {
            //3. check for the error property we need
            expect(err.errors.repost).to.not.exist;
            done();
        });
    });
})

describe("Species route testing", function(){
    beforeEach(function() {
        sinon.stub(Species, 'find');
    });    
    afterEach(function(){
        Species.find.restore();
    });
    it('should send all species', function() {
        var expectedModels = [mockSpecies.species];
        Species.find.yields(null, expectedModels);
        var req = { params: { } };
        var res = {
            send: sinon.stub()
        }; 
        speciesController.index(req, res)
        sinon.assert.calledWith(res.send, expectedModels);
    }); 
})
