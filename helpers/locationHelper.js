/**
 * Created by Bram Pande Gorga Tua Silitonga Shyam on 14/07/19.
 */
"use strict";


/**************************************************
 ***** User People Helper for user business logic ****
 **************************************************/
let locationHelper      = {};
const LOCATION         = require('../models/location')


locationHelper.getLocationByName = async function (nameParameter) {
     return await LOCATION.findOne({name:nameParameter}, function (err, result) {});
}

/* export filmHelper */
module.exports = locationHelper;
