const UIDGenerator = require('uid-generator');
const uidgen = new UIDGenerator();
var Species = require('../models/species');

// Handle index actions
exports.index = function (req, res) {
    // save the contact and check for errors
    Species.find({}, { _id: 0 }, function (err, species) {
        if (err)
            res.json(err);
        res.send(species);
    })   
};    

exports.save = function (req, res) {
    var species = new Species();
    species.id = uidgen.generateSync();
    species.name = req.body.name;
    species.classification = req.body.classification;
    species.eye_colors = req.body.eye_colors;
    species.hair_colors = req.body.hair_colors;
    species.save(function (err) {
        if (err)
            res.json(err);
    res.json({
            message: 'New species created!',
            data: species
        });
    });
};

// Handle index actions
exports.view = function (req, res) {
    Species.aggregate([
        {
            $lookup: {
                from: "films",
                localField: "_id",
                foreignField: "species",
                as: "films"
            }
        },
        {
            $lookup: {
                from: "peoples",
                localField: "_id",
                foreignField: "species",
                as: "people"
            }
        },
        {
            $match:{
                $and:[{"id" : req.params.id}]
            }
        }   
    ]).exec(function(err, location) {
        if(err)
            res.json({status: 500, error: err});
        res.json(
            {
                status: 200, 
                data: location
            });            
    })
    

};


