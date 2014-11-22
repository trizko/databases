var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, data){
        res.send(data);
        res.end('');
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // console.log('post messages:', req.body);
      var username = req.body.username;
      var message = req.body.message;
      var roomname = req.body.roomname;
      models.messages.post(username, message, roomname, function(err) {
        if (err) throw err;
        res.end('');
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, data){
        res.send(data);
        res.end('');
      });
    },
    post: function (req, res) {
      models.users.post(req.body.username, function() {
        res.end('');
      });
    }
  }
};

