const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');


// const newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo', e);
// });

const otherTodo = new Todo({
  text: '  Bend the spoon  '
  // ,
  // completed: true,
  // completedAt: 123
});

otherTodo.save().then((doc) => {
  console.log('Saved todo', doc);
}, (e) => {
  console.log('Unable to save todo', e);
});

const user = new User({
  email: 'andrew@example.com'
});

user.save().then((doc) => {
  console.log('Saved user', user);
}, (e) => {
  console.log('Unable to save todo', e);
});
