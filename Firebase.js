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

 //invokes firebase authentication.
 const auth = firebase.auth();
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

  function storedata(){
    console.log("got it");
    var fn=document.getElementById("f-name").value;
    var usn=document.getElementById("r-username").value;
    var ei=document.getElementById("r-email").value;
    var pw=document.getElementById("r-pass").value;

    // var data= {
    //     FullName: fn,
    //     username: usn,
    //     email: ei,
    //     password: pw
    // }
    let id1 = "signup";
    firebase.database().ref('login/'+ id1).push().set({
        FullName: fn,
        username: usn,
        email: ei,
        password: pw
    });
    // var database = firebase.database();
    // var ref = database.ref("signup");
    // ref.push(data);
    console.log("done database");
    // alert("Data Stored");
  }
  console.log("not done")
  document.querySelector("#register").addEventListener("click", () => {
    register();
    storedata();
    alert("Signed Up Successfully!!!");
  });
  
  document
  .querySelector("#r-pass")
  .addEventListener("keyup", (e) => {
    if (event.keyCode === 13) {
      e.preventDefault();
  
      register();
      storedata();
    }
  });

  console.log("Hello")
const login = () => {
    const email1 = document.querySelector("#login-email").value;
    const password1 = document.querySelector("#login-pass").value;
 
    if (email1.trim() == "") {
      alert("Enter Email");
    } else if (password1.trim() == "") {
      alert("Enter Password");
    } else {
      console.log("reached auth")
      authenticate(email1, password1);
      
      
    }
  };
 
  document.querySelector("#login").addEventListener("click", () => {
    login();
  });
 
  //sign in when you hit enter
  document
    .querySelector("#login-pass")
    .addEventListener("keyup", (e) => {
      if (event.keyCode === 13) {
        e.preventDefault();
 
        login();
      }
    });

    var idtoken='false';
    const authenticate = (email1, password1) => {
        // const auth = firebase.auth();
        
        auth.signInWithEmailAndPassword(email1, password1);
        firebase
          .auth()
          .signInWithEmailAndPassword(email1, password1)
          .then(function(authData) {
            var auth1 = authData;
            
            firebase.auth().onAuthStateChanged(user => {
              if(user) {
                const user = auth.currentUser;
                localStorage.setItem("login", "done");
                localStorage.setItem("userlog", user.email);
                console.log(user.email);
                
                // const fn1= database.ref('login/'+ user.uid).once('value');
                // console.log(fn1);
                // alert("Logged In");
                window.location = 'After_Login/index.html'; //After successful login, user will be redirected to home.html
              }
              
            });
            })
          .catch(function (error) {
            // Handle Errors here.
            
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
          });
            console.log("done 2")
          
          
      };
  
  
  