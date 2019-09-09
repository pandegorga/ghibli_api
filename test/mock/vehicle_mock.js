ObjectId = require('mongodb').ObjectID;

let vehicle_mock = {
        vehicle :  {
            name: "Toyota",
            vehicle_class: "Luxury",
            length: "21",
            pilot: ObjectId("507f1f77bcf86cd799439011"),
            film: ObjectId("507f1f77bcf86cd799439011")

        }
}

module.exports = vehicle_mock        