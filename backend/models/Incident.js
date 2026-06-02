const db = require("../config/db");

class Incident {
  static create(data, callback) {
    db.run(
      `INSERT INTO incidents
      (title,description,severity,status)
      VALUES (?,?,?,?)`,
      [
        data.title,
        data.description,
        data.severity,
        data.status,
      ],
      function (err) {
        callback(err, this?.lastID);
      }
    );
  }

  static getAll(callback) {
    db.all(`SELECT * FROM incidents`, callback);
  }
}

module.exports = Incident;