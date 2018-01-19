//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to mongo db server');
    }
    console.log('connected to mongo db server');

    // db.collection('Todos').find({_id: new ObjectID('5a61b035526d751b0027815e')}).toArray().then((docs) => {
    //     console.log(docs);
    // }, (err) => {
    //     console.log('Unable to fetch records : ', err);
    // })

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(count);
    // }, (err) => {
    //     console.log('Unable to count records : ', err);
    // })

    db.collection('Users').find({name:'Nitin'}).toArray().then((docs) =>{
       console.log(docs);
    }, (err) => {
        console.log('Unable to find : ' + err);
    });

   // db.close();
});