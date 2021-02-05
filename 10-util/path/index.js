const path = require('path');

const notes = '/users/mdurakovic/notes.txt'

console.log(path.dirname(notes)); // /users/mdurakovic
console.log(path.basename(notes)); // notes.txt
console.log(path.extname(notes)); // .txt

const name = 'mdurakovic';
console.log(path.join('/', 'users', name, 'notes.txt'));

console.log(path.resolve('test.txt'));