// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApaeUuDkiq2VoQQ9JgcHjXj6GmK98RoGo",
  authDomain: "kwitter-b3511.firebaseapp.com",
  databaseURL: "https://kwitter-b3511-default-rtdb.firebaseio.com",
  projectId: "kwitter-b3511",
  storageBucket: "kwitter-b3511.appspot.com",
  messagingSenderId: "677229799596",
  appId: "1:677229799596:web:92a42901f56f1f589b5709"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}

