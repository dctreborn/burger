var connection = require("../config/connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

var orm = {
    selectAll: function(table, cb) {
    	var query = "SELECT * FROM " + table;

        console.log(query);

    	connection.query(query, function(err, results){
    		if (err) throw err;

    		cb(results);
    	});
    },
    insertOne: function(table, cols, values, cb) {
    	//INSERT INTO tablename (variables) VALUES (values)
    	var query = "INSERT INTO ";
        query += table;
        query += " (" + cols.toString() + ") ";
        query += "VALUES";
        query += " (" + printQuestionMarks(values.length) + ") ";

        console.log(query);

        connection.query(query, function(err, results){
            if (err) throw err;

            cb(results);
        });
    },
    updateOne: function(table, objColVals, condition, cd) {
        //'UPDATE users SET foo = ?, bar = ?, baz = ? WHERE id = ?'
    	var query = "SET";
        query += objToSql(objColVals);
        query += " WHERE " + condition;

        console.log(query);

        connection.query(query, function(err, results){
            if (err) throw err;

            cb(results);
        });
    }
};

module.exports = orm;