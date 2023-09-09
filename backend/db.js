const mongoose = require('mongoose')

// const mongoDbClient = require("mongodb").MongoClient

// const mongoURI = 'mongodb://<database name and password>@ac-syvaqes-shard-00-00.8f3wqt8.mongodb.net:27017,ac-syvaqes-shard-00-01.8f3wqt8.mongodb.net:27017,ac-syvaqes-shard-00-02.8f3wqt8.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-enxyz5-shard-0&authSource=admin&retryWrites=true&w=majority'


module.exports = function (callback) {
    mongoose.set('strictQuery', false);
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
        if (err) console.log("---" + err)
        else {
            // var database =
            console.log("connected to mongo")
            const foodCollection = await mongoose.connection.db.collection("food_items");
            foodCollection.find({}).toArray(async function (err, data) {
                const categoryCollection = await mongoose.connection.db.collection("Categories");
                categoryCollection.find({}).toArray(async function (err, Catdata) {
                    callback(err, data, Catdata);

                })
            });
            // listCollections({name: 'food_items'}).toArray(function (err, database) {
            // });
            //     module.exports.Collection = database;
            // });
        }
    })
};
