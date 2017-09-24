document.addEventListener('contextmenu', event => event.preventDefault());
var EZWin = firebase.database();
// var fire = new Firebase("https://mist-d7448.firebaseio.com/");
// fire.on('child_added', function(snapshot) {
//     console.log(snapshot.key);
// })
var pics = firebase.storage().ref();
var numberOfNodesOnScreen=0;
var titles = ["hi","I","AM","Faris","lol"];
var tew = {
    1:"https://thenewcode.com/assets/images/dice-absolute.png"
}
window.onload=function() {
for(var i=0; i<5; i++) {
    var toUpdate=EZWin.ref("Nodes").child(numberOfNodesOnScreen).set("cool");
var toShow = document.getElementById("bodyElement");
console.log(foShow);
var foShow = toShow.cloneNode(true);
foShow.style.opacity=1;
foShow.style.position="";
foShow.style.left="0px";
foShow.style.width="100%";
EZWin.ref("Nodes").child(numberOfNodesOnScreen).once('value').then(function(snapshot) {
    console.log()
    foShow.children[0].children[0].innerHTML=snapshot.name
});
foShow.children[0].children[2].src=tew[1];
document.getElementById("bod").appendChild(foShow);
numberOfNodesOnScreen++;
}
}
function clik(event) {
    
}
function download() {
    pics.child('gmail.zip').getDownloadURL().then(function(url) {
        console.log(url);  // `url` is the download URL for 'images/stars.jpg'
        window.location.href=url;
    }).catch(function(evee){
        alert(evee);
    });
}
function goToUpload() {
    window.location.href="uploads.html";
    return false;
}