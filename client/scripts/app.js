// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);
    App.handleClick();
    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
    App.stopSpinner();
    // setInterval(App.fetch, 3000);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      Messages._updateMessageStorage(data);
      MessagesView.render();
      Rooms.updateRooms(data);
      RoomsView.render();
      // console.log(Messages._data);

      // TODO: Use the data to update Messages (data) and Rooms
      // and re-render the corresponding views.

      // This will call for messages, messagesView, rooms and roomsView. Must write out those functions
    });
  },
  
  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    //once #rooms button on click
    $('#refresh').on('click', () => { App.fetch(); });
   
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
