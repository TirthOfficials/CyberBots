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
  let id2 = "signup";
  
  firebase.database().ref('login/'+ id2).on('value',(snap)=>{
    console.log(snap.val());
  });