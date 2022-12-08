// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    MessagesView.render();
    // when this view loads.
  },

  render: function(room) {
    // TODO: Render _all_ the messages.
    MessagesView.$chats.empty();
    if (room) {
      for (var key in Messages._data) {
        if (Messages._data[key].roomname === room) {
          MessagesView.renderMessage(Messages._data[key]);
        }
      }
    } else {
      for (var key in Messages._data) {
        // console.log('hello');
        MessagesView.renderMessage(Messages._data[key]);
      }
    }

  },

  renderMessage: function(message) {
    // console.log('message======>', message);
    // TODO: Render a single message.
    // var renderedMessage = MessageView.render({username: message.username, text: message.text});
    var renderedMessage = MessageView.render(message);
    MessagesView.$chats.prepend(renderedMessage);

  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};