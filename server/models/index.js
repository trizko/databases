var db = require('../db');
var checkAndSelect = require('../queryHelpers');

module.exports = {
  messages: {
    get: function(callback) {
      db.query('SELECT message FROM messages', callback);
    }, // a function which produces all the messages
    post: function(username, message, roomname, callback) {
        message = message.replace("'", "\\'");

        checkAndSelect(username, 'users', function(userID){
          checkAndSelect(roomname, 'rooms', function(roomID){
            var queryString = "INSERT INTO messages (fk_users_id, message, fk_rooms_id) values (" +
                              userID + ",'" + message + "'," + roomID + ");";
            db.query(queryString, callback);
          });
        });
      } // a function which can be used to insert a message into the database
  },
  users: {
    // Ditto as above.
    get: function() {
      db.query('SELECT username FROM users', callback);
    },
    post: function(username, callback) {

      checkAndSelect(username, 'users', callback);
      // var queryString = "INSERT INTO users (username) values ('" + username +
      //   "');";
      // db.query(queryString, callback);
    }
  }
};
