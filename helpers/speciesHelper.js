/**
 * Created by Bram Pande Gorga Tua Silitonga  on 14/07/19.
 */
"use strict";


/**************************************************
 ***** User Species Helper for user business logic ****
 **************************************************/
let speciesHelper      = {};
const SPECIES   = require('../models/species')


speciesHelper.getSpeciesByName = async function (nameParameter) {
     return await SPECIES.findOne({name:nameParameter}, function (err, result) {});
}

/* export filmHelper */
module.exports = speciesHelper;
