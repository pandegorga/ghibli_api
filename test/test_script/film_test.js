const Film                    = require('../../models/film');
const mockFilm                = require('../mock/film_mock');
var expect                    = require('chai').expect;
var filmController            = require('../../controllers/filmController');
var sinon                     = require('sinon'); 

describe("Film scheme testing", function(){
    it('should have validation error for repost if not dank', function(done) {
        //1. set up the model in a way the validation should fail
        var film = new Film(mockFilm.film);     
        //2. run validate
        film.validate(function(err) {
            //3. check for the error property we need
            expect(err.errors.repost).to.not.exist;
            done();
        });

    });
})

describe("Species route testing", function(){
    beforeEach(function() {
        sinon.stub(Film, 'find');
    });    
    afterEach(function(){
        Film.find.restore();
    });
    it('should send all species', function() {
        var expectedModels = [mockFilm.film];
        Film.find.yields(null, expectedModels);
        var req = { params: { } };
        var res = {
            send: sinon.stub()
        }; 
        filmController.index(req, res)
        sinon.assert.calledWith(res.send, expectedModels);
    }); 
})
