
/**
 * Created by Bram Pande Gorga Tua Silitonga on 14/07/19.
 */
"use strict";

/**************************************************
 ***** User Species Controller to create API ****
 **************************************************/


const UIDGenerator      = require('uid-generator');
const uidgen            = new UIDGenerator();
const People            = require('../models/people');
const helperManager     = require('../helpers')


/**
 * View all data people
 */
exports.index = function (req, res) {
    // save the contact and check for errors
    People.find({}, { _id: 0 }, function (err, result) {
        if (err)
            res.json({status: 500, error: err});
    res.json({
            status: 200,
            data: result
        });
    });    
};

/**
 * Save data people
 */
exports.save = async function (req, res) {
    let species = await helperManager.speciesHelper.getSpeciesByName(req.body.species_name)
    var people = new People();
    people.id = uidgen.generateSync();
    people.name = req.body.name;
    people.gender = req.body.gender;
    people.age = req.body.age;
    people.eye_color = req.body.eye_color;
    people.hair_color = req.body.hair_color;
    people.species= species._id;
    people.url = req.body.url;
    people.save(function (err) {
      if (err)
          res.json({status: 500, error: err});
      res.json({
          status: 200,
          data:  people
      });
  });
}

/**
 * View data people by id
 */
exports.view = function (req, res) {
    People.aggregate([
        {
            $lookup: {
                from: "films",
                localField: "_id",
                foreignField: "people",
                as: "films"
            }
        },
        {
            $lookup: {
            from: "species",
            localField: "species",
            foreignField: "_id",
            as: "species"
            }
        },
        {
            $match:{
                $and:[{"id" : req.params.id}]
            }
        }   
    ]).exec(function(err, people) {
        if(err)
            res.json({status: 500, error: err});
        res.json(
            {
                status: 200, 
                data: people
            });            
    })
};    


