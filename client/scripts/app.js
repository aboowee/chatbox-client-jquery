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

    App.startSpinner();
    App.fetch(App.stopSpinner);
    App.stopSpinner();

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      Messages._updateMessageStorage(data);
      MessagesView.render();
      Rooms.updateRooms(data);
      RoomsView.render();
    });
  },
  
  handleClick: function(event) {
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
