/**
 * Created by Bram Pande Gorga Tua Silitonga Shyam on 14/07/19.
 */
"use strict";


/**************************************************
 ***** User People Helper for user business logic ****
 **************************************************/
let peopleHelper      = {};
const PEOPLE         = require('../models/people')


peopleHelper.getPeoplebyName = async function (nameParameter) {
     return await PEOPLE.findOne({name:nameParameter}, function (err, result) {});
}

/* export filmHelper */
module.exports = peopleHelper;
