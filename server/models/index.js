var db = require('../db');




module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (username, message, roomname, callback) {
      message = message.replace("'", "\\'");
      var queryString = "INSERT INTO messages (username, message, roomname) values ('" +
                         username + "','" + message +"','" + roomname + "');";
      console.log(queryString);
      db.query(queryString);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (username, callback) {
      var queryString = "INSERT INTO users (username) values ('" + username + "');";
      db.query(queryString, callback);
    }
  }
};

