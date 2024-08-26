const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;


const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://biktokaiTest:TESTCRED@testing.rlbuiqs.mongodb.net/?retryWrites=true&w=majority&appName=Testing')
  .then(client => {
    console.log('Connected to Database');
    // _db = client.db();
    callback(client)
  })
  .catch(err => {
    console.log(err);
    throw err;
  })
}

exports.mongoConnect = mongoConnect;
