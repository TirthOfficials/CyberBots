const firebaseConfig = {
    apiKey: "AIzaSyCHX2s435RFvrZ72AHNzFpctBIvIrqnnT4",
    authDomain: "gratler-cec3b.firebaseapp.com",
    databaseURL: "https://gratler-cec3b-default-rtdb.firebaseio.com",
    projectId: "gratler-cec3b",
    storageBucket: "gratler-cec3b.appspot.com",
    messagingSenderId: "1028782255982",
    appId: "1:1028782255982:web:ded319324feeb4a148db7f",
    measurementId: "G-FNBN7QRX38"
  };
  firebase.initializeApp(firebaseConfig);

var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
var userl1= localStorage.getItem("userlog");
const val2 = '_G';
var t1=userl1.substring(0, 5);
var logged_u1=t1+val2;
console.log(logged_u1);
function showPosition(position) {
    var lat1=position.coords.latitude;
    var lon1=position.coords.longitude;
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
  let ref1='location';
  
  firebase.database().ref('CurrentLocation/'+ ref1).child(logged_u1).set({
    Latitude: lat1,
    Longitude: lon1
});
    alert("Location Updated");
    console.log("Location Added")
}

