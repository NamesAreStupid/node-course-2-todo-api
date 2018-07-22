const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');

Todo.findByIdAndRemove({ _id: '5b5458167958c70e8d2ab483' }).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('5b5458167958c70e8d2ab483').then((todo) => {
  console.log(todo);
});
