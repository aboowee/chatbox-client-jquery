// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  //<select>
  //<option> name </option>
  //<option> name </option>
  //</select>

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.render();
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('change', RoomsView.handleChange);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    RoomsView.$select.empty();
    Rooms._data.forEach((currentRoom)=> {
      RoomsView.renderRoom(currentRoom);
      // console.log('currentRoom-------', currentRoom);
    });
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    var renderedRoom = RoomView.render({roomName: roomname});
    RoomsView.$select.prepend(renderedRoom);
  },

  handleChange: function(event) {
    console.log('event======>', RoomsView.$select.val());
    // TODO: Handle a user selecting a different room.
    MessagesView.render(RoomsView.$select.val());
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    //once #rooms button on click
    var newRoomName = $('#message').val();
    Rooms.addRoom(newRoomName);
  }

};
