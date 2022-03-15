var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('../users.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

db.run('CREATE TABLE IF NOT EXIST Users (id INTEGER PRIMARY KAY AUTOINKREMENT, idTelegram INTEGER, firstName VARCHAR(40), lastName VARCHAR(40), group VARCHAR(40));');

function UserGet () {}

function UserAdd () {}

function UserDelete () {}

function UserUpdate () {}

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});
