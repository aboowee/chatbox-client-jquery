// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),


  initialize: function() {
    RoomsView.render();
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('change', RoomsView.handleChange);
  },

  render: function() {
    RoomsView.$select.empty();
    Rooms._data.forEach((currentRoom)=> {
      RoomsView.renderRoom(currentRoom);
    });
  },

  renderRoom: function(roomname) {
    var renderedRoom = RoomView.render({roomName: roomname});
    RoomsView.$select.prepend(renderedRoom);
  },

  handleChange: function(event) {
    MessagesView.render(RoomsView.$select.val());
  },

  handleClick: function(event) {
    var newRoomName = $('#message').val();
    Rooms.addRoom(newRoomName);
  }

};
