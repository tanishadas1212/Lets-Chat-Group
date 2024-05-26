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

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() 
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "Kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirctToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name", name);
     window.location = "Kwitter_page.html";
}

function logout()
{
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location = "index.html";
}