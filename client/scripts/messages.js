// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: {},
  //{member_id: message object}

  //Roomnumber

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.


  //Add Method
  _addToMesssageStorage: function(message) {
    
    Messages._data[message.message_id] = message;
    message.friend = false;

    //Assumptions: Data received consists of username and message
    //Singular
  
    //Message consists of message, who it's from, room number

  },

  _updateMessageStorage: function (dataCollection) {
    //Loop over data collection
    //Check each object for message ID
    dataCollection.forEach((currentMessage) => {
      if (!Messages._data[currentMessage.message_id]) {
        Messages._addToMesssageStorage(currentMessage);
      }
    });
  }


};