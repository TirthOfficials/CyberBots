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
  var userl2= localStorage.getItem("userlog");
    const val3 = '_G';
    var t2=userl2.substring(0, 5);
    var logged_u2=t2+val3;
    console.log(logged_u2);
  let id2 = "signup";
  firebase.database().ref('login/'+ id2).orderByChild('username').equalTo('toxicofficials').on("value", function(snapshot) {
    console.log(snapshot.val());
    
    snapshot.forEach(function(data) {
        console.log(data.key);
        // console.log(data.value);
    });
});
//   firebase.database().ref('login/'+ id2).on('value',(snap)=>{
//     console.log(snap.val());
//   });
// firebase.database().ref('login/'+ id2).once('value',   function(snapshot) {
//     snapshot.forEach(function(childSnapshot) {
//       var childKey = childSnapshot.key;
//       var childData = childSnapshot.val();
//       console.log(childKey);
//       console.log(childData);
//       // ...
//     });
//   });
  