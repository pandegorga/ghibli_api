/**
 * Created by Bram Pande Gorga Tua Silitonga Shyam on 14/07/19.
 */
"use strict";


/**************************************************
 ***** User Film Helper for user business logic ****
 **************************************************/
let filmHelper      = {};
const FILM          = require('../models/film')


filmHelper.getFilmByTitle = async function (titleParamter) {
     return FILM.findOne({title:titleParamter}, function (err, result) {});
}

/* export filmHelper */
module.exports = filmHelper;
