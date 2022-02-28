const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;

const url = 'mongodb+srv://<username>:<password>@finalproject.iwz7w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {

    if (err) throw err;

    const db = client.db("Pitcher_Salaries");

    db.collection('Pitcher_Info_DB').find({}).toArray().then((docs) => {

        console.log(docs);

    }).catch((err) => {

        console.log(err);
    }).finally(() => {

        client.close();
    });
});