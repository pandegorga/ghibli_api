/**
 * Created by Bram Pande Gorga Tua Silitonga Shyam on 14/07/19.
 */
"use strict";

/**************************************************
 ***** User Film Controller to create API ****
 **************************************************/


const UIDGenerator      = require('uid-generator');
const uidgen            = new UIDGenerator();
var Film                = require('../models/film');
let filmController      = {};
let helperManager       = require('../helpers')

/**
 * Get all data film
 */ 
filmController.index = function (req, res) {
    // save the contact and check for errors
    Film.find({}, { _id: 0 }, function (err, film) {
        if (err)
            res.json(err);
        res.send(film)    
    });        
};    

/**
 * Save a record film 
 */ 

filmController.save = async function (req, res) {
    var film = new Film();
    let people = await helperManager.peopleHelper.getPeoplebyName(req.body.people_name)
    let species = await helperManager.speciesHelper.getSpeciesByName(req.body.species_name)
    let locations = await helperManager.locationHelper.getLocationByName(req.body.location_name)
    film.id = uidgen.generateSync();
    film.title = req.body.title;
    film.description = req.body.description;
    film.director = req.body.director;
    film.producer = req.body.producer;
    film.release_date = req.body.release_date;
    film.rt_score = req.body.rt_score;
    film.people = people._id;
    film.species = species._id;
    film.location = locations._id;
    film.url = req.body.url;
    film.save(function (err) {
        if (err)
            res.json(err);
    res.json({
            message: 'New film created!',
            data: film
        });
    });
};

/**
 * Show a film record by title  
 */ 

filmController.view = function (req, res) {
    Film.find({title:req.params.title}, { _id: 0 }, function (err, film) {
        if (err)
            res.json(err);
    res.json({
            message: 'film viewed ',
            data: film
        });
    });    
};    

/** exporting FilmController **/
module.exports = filmController;

