var db = require('../db');

module.exports = function(value, table, callback){
  var selectQuery = "SELECT pk_" + table + "_id" +
                    " FROM " + table +
                    " WHERE " + table.slice(0, table.length - 1) + "name" +
                    " = '" + value + "' LIMIT 1;";

  //if needed
  var insertQuery = "INSERT INTO " + table +
                    "(" + table.slice(0, table.length - 1) + "name)" +
                    " VALUES ('" + value + "');";


  db.query(selectQuery, function(err, data){
    if(data.length > 0){
      callback(data[0]["pk_" + table + "_id"]); //proceed to next function
    } else {
      db.query(insertQuery, function(err){
        if (err) throw err;
        module.exports(value, table, callback);
      });
    }
  });
};
