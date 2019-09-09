ObjectId = require('mongodb').ObjectID;

let film_mock = {
    film :  {
        title: "KKR",
        description:"Rohani",
        director:"Jes",
        producer:"Jesadsa",
        release_date:new Date('2019-09-06'),
        rt_score: 100,
        people: ObjectId("507f1f77bcf86cd799439012"),
        location:ObjectId("507f1f77bcf86cd799439014"),
        species:ObjectId("507f1f77bcf86cd799439013")
    }
}
module.exports = film_mock        


// id: {
//     type: String,
//     trim: true,
//   },
//   title: {
//     type: String,
//     trim: true,
//     unique: true
//   },
//   description: {
//     type: String,
//     trim: true,
//   },
//   director: {
//     type: String,
//     trim: true,
//   },
//   producer: {
//     type: String,
//     trim: true,
//   },
//   release_date: {
//     type: Date,
//     trim: true,
//   },
//   rt_score: {
//     type: Number,
//     trim:true
//   },
//   people: {type: mongoose.Schema.Types.ObjectId, ref:'People'},
//   location: {type: mongoose.Schema.Types.ObjectId, ref: 'Location' },    
//   species: {type: mongoose.Schema.Types.ObjectId, ref: 'Species' },    
