console.log("GO login");
var t='true'
var check = localStorage.getItem("login");
var userl= localStorage.getItem("userlog");
console.log(check);
const val1 = '_G';
// var t=userl.substring(0, 5);
// console.log(t);
// var val1 = Math.floor(1000 + Math.random() * 9000);
// document.getElementById("userlogin").innerHTML = t + val1;
var hours = 1; // to clear the localStorage after 1 hour
               // (if someone want to clear after 8hrs simply change hours=8)
var now = new Date().getTime();
var setupTime = localStorage.getItem('setupTime');
if (setupTime == null) {
    localStorage.setItem('setupTime', now)
} else {
    if(now-setupTime > hours*60*60*1000) {
        localStorage.clear()
        localStorage.setItem('setupTime', now);
    }
}
if (check!='done'){
    
    window.location = '../index.html';
}
// var t=userl.substring(0, 5);
var t=userl.substring(0, 5);
console.log(t);
document.getElementById("userlogin").innerHTML = t + val1;

function logout1(){
    console.log("Logout")
    localStorage.clear();
    window.location = '../index.html';
}

function callmap(){
    window.location = 'Map/index.html';
    
}