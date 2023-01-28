
const express = require("express");
const app = express();
const path = require('path');
const router = express.Router();
const firebase = require("firebase-admin");
// app.engine("html", require("ejs").renderFile);
// app.use(express.static("static"));
app.use(express.json());
app.use(express.static(__dirname));
app.use(express.urlencoded({extended: true}));

// set port and listen our request

const PORT = process.env.PORT || 8080;


const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('index.html').pipe(res)
})

server.listen(process.env.PORT || 3000)
const firebaseConfig = {
  apiKey: "AIzaSyCHX2s435RFvrZ72AHNzFpctBIvIrqnnT4",
  authDomain: "gratler-cec3b.firebaseapp.com",
  projectId: "gratler-cec3b",
  storageBucket: "gratler-cec3b.appspot.com",
  messagingSenderId: "1028782255982",
  appId: "1:1028782255982:web:ded319324feeb4a148db7f",
  measurementId: "G-FNBN7QRX38"
};

firebase.initializeApp(firebaseConfig);

//invokes firebase authentication.
const auth = firebase.auth();


// app.get("/", function(req, res){
//   res.render("index.html");
// });
router.get('/',function(req,res){
  res.sendFile(path.join('/index.html'));
  //__dirname : It will resolve to your project folder.
});
app.listen(PORT, () =>{
    console.log(`Server is running on PORT ${PORT}.`);
});

const register = () => {
  const email = document.querySelector("#r-email").value;
  const repass = document.querySelector("#r-pass2").value;
  const password = document.querySelector("#r-pass").value;

  if (email.trim() == "") {
    alert("Enter Email");
  } else if (password.trim().length < 7) {
    alert("Password must be at least 7 characters");
  } else if (password != repass) {
    alert("passwords do not match");
  } else {
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        // ...
      });
      console.log("register done")
  }
};
console.log("not done")
// document.querySelector("#register").addEventListener("click", () => {
//   register();
  
// });

// document
// .querySelector("#r-pass")
// .addEventListener("keyup", (e) => {
//   if (event.keyCode === 13) {
//     e.preventDefault();

//     register();
//   }
// });

function storedata(){
  console.log("got it");
  var fn=document.getElementById("f-name").value;
  var ei=document.getElementById("r-email").value;
  var pw=document.getElementById("r-password").value;
  firebase.database().ref("login/").push().set({
      FullName: fn,
      email: ei,
      password: pw
  });
  console.log("done database");
  alert("Signed Up Successfully");
}


