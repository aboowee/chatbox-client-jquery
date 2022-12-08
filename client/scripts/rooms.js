// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  
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