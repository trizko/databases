var db = require('../db');
var checkAndSelect = require('../queryHelpers');

module.exports = {
  messages: {
    get: function() {}, // a function which produces all the messages
    post: function(username, message, roomname, callback) {
        message = message.replace("'", "\\'");

        checkAndSelect(username, 'users', function(userID){
          checkAndSelect(roomname, 'rooms', function(roomID){
            var queryString = "INSERT INTO messages (fk_users_id, message, fk_rooms_id) values (" +
                              userID + ",'" + message + "'," + roomID + ");";
            db.query(queryString, callback);
          });
        });



      //   var userQuery = "SELECT pk_users_id FROM users WHERE username = '" +
      //                   username + "' LIMIT 1;";
      //   db.query(userQuery, function(err, user) {
      //     if (user.length > 0) {
      //       var userID = user[0].pk_users_id;
      //       console.log('userID', userID);
      //     } else { //add the user
      //       var userInsertQuery =
      //         "INSERT INTO users (username) values ('" + username + "');";
      //       db.query(userInsertQuery, function() {
      //         db.query(userQuery, function(err, user) {
      //           var userID = user[0].pk_users_id;
      //           console.log('insertedUserID', userID);
      //         });
      //       });
      //     }
      //   });
      //   var roomQuery = "SELECT pk_rooms_id FROM rooms WHERE roomname = '" +
      //                   roomname + "' LIMIT 1;";
      //   db.query(roomQuery, function(err, room) {
      //     if (room.length > 0) {
      //       var roomID = room[0].pk_rooms_id;
      //       console.log('roomID', roomID);
      //     } else { //add the room
      //       var roomInsertQuery =
      //         "INSERT INTO rooms (roomname) values ('" + roomname + "');";
      //       db.query(roomInsertQuery, function() {
      //         db.query(roomQuery, function(err, room) {
      //           var roomID = room[0].pk_rooms_id;
      //           console.log('insertedRoomID', roomID);
      //         });
      //       });
      //     }
      //   });
        // var queryString =
        //   "INSERT INTO messages (fk_users_id, message, roomname) values ('" +
        //   username + "','" + message + "','" + roomname + "');";
        // db.query(userQuery, callback);
      } // a function which can be used to insert a message into the database
  },
  users: {
    // Ditto as above.
    get: function() {},
    post: function(username, callback) {

      checkAndSelect(username, 'users', callback);
      // var queryString = "INSERT INTO users (username) values ('" + username +
      //   "');";
      // db.query(queryString, callback);
    }
  }
};
