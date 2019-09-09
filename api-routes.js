"use strict";

/***********************************
 ****** Configuration Route ******
 ***********************************/
const router             = require('express').Router();
const controllerManager  = require('./controllers') 

router.route('/film')
    .get(controllerManager.filmController.index)
    .post(controllerManager.filmController.save);
router.route('/film/:id')
    .get(controllerManager.filmController.view)


router.route('/vehicle')
    .post(controllerManager.vehicleController.save)
    .get(controllerManager.vehicleController.index);
    
router.route('/vehicle/:name')
    .get(controllerManager.filmController.view)

// People routes
router.route('/people')
    .get(controllerManager.peopleController.index)
    .post(controllerManager.peopleController.save);

router.route('/people/:id')
    .get(controllerManager.peopleController.view)

    
// Location routes
router.route('/location')
    .get(controllerManager.locationController.index)
    .post(controllerManager.locationController.save);

router.route('/location/:id')
    .get(controllerManager.locationController.view)

// Location routes
router.route('/species')
    .get(controllerManager.speciesController.index)
    .post(controllerManager.speciesController.save);
    
router.route('/species/:id')
        .get(controllerManager.speciesController.view)


// Export API routes
module.exports = router;