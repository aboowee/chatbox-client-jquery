// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: {},
  //{user1: [message1, message2]}

  //Roomnumber

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  //Retrieve Method
  _retrieveMessage: function (data) {
    //Output would be a string of the message
  },
  //Add Method
  _addMesssage: function(userData) {
    //Input: String (somehow grabbed from Data)
    //Output: 
    //Constraints:
    //Edge Case:
    //Assumptions: Data received consists of username and message
      //Singular

    //Get data
    //In the _data object, create username as key
    //Input message to username as value;
    if (Messages._data[userData.username] === undefined) {
      Messages._data[userData.username] = [userData.message];
    } else {
      Messages._data[userData.username].push(userData.message);
    }



    //Message consists of message, who it's from, room number

  },




};