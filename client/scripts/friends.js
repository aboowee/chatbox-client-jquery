// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  _data: [],

  addFriend: function(friendName) {
    Friends._data.push(friendName);
  },

  removeFriend: function(friendName) {
    var index = Friends._data.indexOf(friendName);
    Friends._data.splice(index, 1);
  }
};