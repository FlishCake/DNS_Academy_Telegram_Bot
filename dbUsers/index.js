var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./users.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, telegram_id INTEGER, firstname VARCHAR(40), lastname VARCHAR(40), user_group VARCHAR(40));');

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});
