// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  _data: {},
  //{member_id: message object}

  _addToMesssageStorage: function(message) {
    
    Messages._data[message.message_id] = message;
    message.friend = false;  
    //Message consists of message, who it's from, room number

  },

  _updateMessageStorage: function (dataCollection) {
    dataCollection.forEach((currentMessage) => {
      if (!Messages._data[currentMessage.message_id]) {
        Messages._addToMesssageStorage(currentMessage);
      }
    });
  }


};