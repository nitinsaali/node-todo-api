//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to mongo db server');
    }
    console.log('connected to mongo db server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Nitin',
    //     age: 25,
    //     location: 'Pune'
    // }, (err, result) => {
    //     if(err){
    //         return console.log('error while inserting record: ', err);
    //     }
        
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    // })

    db.close();
});