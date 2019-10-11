// Initialize Firebase
var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

var firebase = require("firebase");

firebase.initializeApp(config);

export { firebase };
