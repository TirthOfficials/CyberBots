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

//  //invokes firebase authentication.
//  const auth = firebase.auth();
 let id2 = '';
 var myRef = firebase.database().ref('login');
 myRef.on("value", function(snapshot) {
    // Get the data from the snapshot
    var user1 = snapshot.val().username;

    // Log the data to the console
    console.log(user1);

});