// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  _data: [],
  
  addRoom: function(roomName) {
    Rooms._data.push(roomName);
  },

  updateRooms: function(dataCollection) {
    dataCollection.forEach((currentRoom) => {
      if (!Rooms._data.includes(currentRoom.roomname)) {
        Rooms.addRoom(currentRoom.roomname);
      }
    });
  }

};