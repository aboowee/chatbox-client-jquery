// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.render();
    MessagesView.$chats.on('click', MessagesView.handleClick);
  },

  render: function(room) {
    MessagesView.$chats.empty();
    if (room) {
      for (var key in Messages._data) {
        if (Messages._data[key].roomname === room) {
          MessagesView.renderMessage(Messages._data[key]);
        }
      }
    } else {
      for (var key in Messages._data) {
        MessagesView.renderMessage(Messages._data[key]);
      }
    }
  },
  
  renderMessage: function(message) {
    if (Friends._data.includes(message.username)) {
      var renderedMessage = MessageView.renderFriend(message);
    } else {
      var renderedMessage = MessageView.render(message);
    }   
    MessagesView.$chats.prepend(renderedMessage);
  },

  handleClick: function(event) {
    if (Friends._data.includes(event.target.innerHTML)) {
      Friends.removeFriend(event.target.innerHTML);
    } else {
      Friends.addFriend(event.target.innerHTML);
    }
    App.fetch();
  }

};