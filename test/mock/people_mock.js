ObjectId = require('mongodb').ObjectID;

let people_mock = {
    people :  {
        name: "Bram",
        gender: "Laki -laki",
        age: 21,
        eye_color: "Black",
        hair_color: "Black",
        Species: ObjectId("507f1f77bcf86cd799439011")
    }
}

module.exports = people_mock        