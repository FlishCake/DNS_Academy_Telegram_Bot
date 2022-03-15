var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./users.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, telegram_id INTEGER, firstname VARCHAR(40), lastname VARCHAR(40), user_group VARCHAR(40));');

  //db.run('INSERT INTO users (telegram_id, firstname, lastname, user_group) VALUES (111111, "Валентин", "Назаров", "Admin");')
});

let getUser = id => {
  db.run(`INSERT INTO users (telegram_id, firstname, lastname, user_group) VALUES (${id}, "Валентин", "Назаров", "Admin");`)
  
  db.each(`SELECT * FROM users WHERE telegram_id = ${id};`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row.firstname);
  });
}

module.exports.getUser = getUser;

/*db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});
*/
