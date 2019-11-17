
var x = document.getElementById("demo");


window.localStorage
// Set constraints for the video stream
var constraints = { video: { facingMode: "environment" }, audio: false };
// Define constants
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger")
// Access the device camera and stream to cameraView
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
        track = stream.getTracks()[0];
        cameraView.srcObject = stream;
    })
    .catch(function(error) {
        console.error("Oops. Something is broken.", error);
    });
}

// Take a picture when cameraTrigger is tapped
cameraTrigger.onclick = function() {
   
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    
    localStorage.setItem("pic", cameraView);
    cameraView.srcObject = null;
    var picture = localStorage.getItem("pic");

    
    cameraOutput.classList.add("taken");
    window.location.replace("validation.html");
    //PLAY AROUND WITH THIS BUTTON!!

    //x.innerHTML = "<button>YOUR MOM GAY</button>"
    var delayInMilliseconds = 2000; //1 second

    setTimeout(function() {
    //your code to be executed after 1 second
    }, delayInMilliseconds);
    window.location.replace("validation.html");

    //x.innerHTML = "<button onclick="location.href='validation.html'">YOUR MOM GAY</button>"

};

window.addEventListener("load", cameraStart, false);

function loadPic(){
    console.log("picture loaded");

}