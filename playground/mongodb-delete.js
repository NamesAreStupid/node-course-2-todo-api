const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDb server');
  const db = client.db('TodoApp');

  // deleteMany
  // db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
  //   console.log(result);
  // });

  // // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({ text: 'Eat lunch', completed: false }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({ name: 'Andrew' });

  db.collection('Users').findOneAndDelete({ _id: new ObjectID('5b4b411d21e68a141008842a') }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  // client.close();
});
