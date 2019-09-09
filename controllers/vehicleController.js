/**
 * Created by Bram Pande Gorga Tua Silitonga Shyam on 14/07/19.
 */
"use strict";

/**************************************************
 ***** User Film Controller to create API ****
 **************************************************/


const UIDGenerator      = require('uid-generator');
const uidgen            = new UIDGenerator();
const helperManager     = require('../helpers')
const Vehicle           = require('../models/vehicle')
const mongoose          = require('mongoose')


/**
 * Get all data vehicle
 */ 
exports.index = function (req, res) {
    // save the contact and check for errors
    Vehicle.find({}, { _id: 0 }, function (err, species) {
        if (err)
            res.json(err);
        res.send(species)
    });    
};    

exports.save = async function (req, res) {
    let film = await helperManager.filmHelper.getFilmByTitle(req.body.film_title)
    let people = await helperManager.peopleHelper.getPeoplebyName(req.body.people_name)
    var vehicle = new Vehicle();    
    vehicle.id = uidgen.generateSync();
    vehicle.name = req.body.name;
    vehicle.description = req.body.description;
    vehicle.vehicle_class = req.body.vehicle_class;
    vehicle.length= req.body.length;
    vehicle.film = mongoose.Types.ObjectId(film._id)
    vehicle.pilot = mongoose.Types.ObjectId(people._id)
    vehicle.save(function (err) {
        if (err)
            res.json(err);
    res.json({
            message: 'New vehicle created!',
            data: vehicle
        });
    });
};

// Handle index actions
exports.view = function (req, res) {
    // save the contact and check for errors
    Vehicle.find({id:id}, { _id: 0 }, function (err, result) {
        if (err)
            res.json(err);
    res.json({
            message: 'vehicle viewed',
            data: result
        });
    });    
};    


