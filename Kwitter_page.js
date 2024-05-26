var firebaseConfig = {
    apiKey: "AIzaSyCG91_2XKI2UO9tyqYvQCxYUwF8HwzKdjA",
    authDomain: "health-alert-cc9a5.firebaseapp.com",
    databaseURL: "https://health-alert-cc9a5-default-rtdb.firebaseio.com",
    projectId: "health-alert-cc9a5",
    storageBucket: "health-alert-cc9a5.appspot.com",
    messagingSenderId: "494100194595",
    appId: "1:494100194595:web:2f1ba8322d0d4e83709896"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout()
{
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location = "index.html";
}

function send() 
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = ""
}