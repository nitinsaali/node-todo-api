//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to mongo db server');
    }
    console.log('connected to mongo db server');

    db.collection('Todos').findOneAndUpdate({
            _id: new ObjectID('5a61dcfc6308701ce4765e66')
        }, {
            $set: {
                completed: false
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        })

   // db.close();
});