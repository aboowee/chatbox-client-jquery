// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.

  renderFriend: _.template(`
    <div class="chat friend">
      <div class="username"><%- username %></div>
      <div><%- text %></div>
    </div>
  `),

  render: _.template(`
    <div class="chat">
      <div class="username"><%- username %></div>
      <div><%- text %></div>
    </div>
  `)

};