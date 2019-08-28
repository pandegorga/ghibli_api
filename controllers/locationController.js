/**
 * Created by Bram Pande Gorga Tua Silitonga on 14/07/19.
 */
"use strict";

/**************************************************
 ***** User Species Controller to create API ****
 **************************************************/

const UIDGenerator = require('uid-generator');
const uidgen = new UIDGenerator();
var Location = require('../models/location');

/**
 * Get all data film
 */ 
exports.index = function (req, res) {
    // save the contact and check for errors
    Location.find({}, { _id: 0 }, function (err, species) {
        if (err)
            res.json(err);
    res.json({
            message: 'location viewed',
            data: species
        });
    });    
};    

/**
 * Save a record film 
 */ 
exports.save = function (req, res) {
    var location = new Location();
    location.id = uidgen.generateSync();
    location.name = req.body.name;
    location.climate = req.body.climate;
    location.terrain = req.body.terrain;
    location.surface_water = req.body.surface_water;
    location.residents = req.body.residents;
    location.save(function (err) {
        if (err)
            res.json(err);
    res.json({
            message: 'New location created!',
            data: location
        });
    });
};

/**
 * Show a film record by title  
 */ 
exports.view = function (req, res) {
    Location.aggregate([
        {
            $lookup: {
            from: "films",
            localField: "_id",
            foreignField: "location",
            as: "films"
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


