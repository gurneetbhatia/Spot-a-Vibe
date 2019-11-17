/**
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

}*/
var test = null;
(function() {
    var width = 320; // We will scale the photo width to this
    var height = 0; // This will be computed based on the input stream

    var streaming = false;

    var video = null;
    var canvas = null;
    var photo = null;
    var startbutton = null;

    function startup() {
        video = document.getElementById('video');
        canvas = document.getElementById('canvas');
        photo = document.getElementById('photo');
        startbutton = document.getElementById('startbutton');
        navigator.mediaDevices.getUserMedia({
                video: true,
                audio: false
            })
            .then(function(stream) {
                video.srcObject = stream;
                video.play();
            })
            .catch(function(err) {
                console.log("An error occurred: " + err);
            });
        video.addEventListener('canplay', function(ev) {
            if (!streaming) {
                height = video.videoHeight / (video.videoWidth / width);

                video.setAttribute('width', width);
                video.setAttribute('height', height);
                canvas.setAttribute('width', width);
                canvas.setAttribute('height', height);
                streaming = true;
            }
        }, false);
        startbutton.addEventListener('click', function(ev) {
            takepicture();
            ev.preventDefault();
        }, false);

        var files = document.getElementById("fileSelector");
        files.addEventListener("change", function(ev) {
            photo.src = files.files[0];
        })

        clearphoto();
    }

    function clearphoto() {
        var context = canvas.getContext('2d');
        context.fillStyle = "#AAA";
        context.fillRect(0, 0, canvas.width, canvas.height);

        var data = canvas.toDataURL('image/jpeg');
        photo.setAttribute('src', data);
    }

    function takepicture() {
        console.log("Print");
        var context = canvas.getContext('2d');
        if (width && height) {
            canvas.width = width;
            canvas.height = height;
            context.drawImage(video, 0, 0, width, height);

            var data = canvas.toDataURL('image/jpeg');
            test = data;

            photo.setAttribute('src', data);
        } else {
            clearphoto();
        }
    }

    window.addEventListener('load', startup, false);
})();

/*
$(function() {
    $("input:file").change(function (){
        //var fileName = $(this).val();
        //$(".filename").html(fileName);
        $.ajax({
            url: 'http://max-scene-classifier.max.us-south.containers.appdomain.cloud/model/predict',
            method: 'POST',
            data: {
                "accept": "application/json",
                "Content-Type": "multipart/form-data",
                "image": document.getElementById("fileSelector").files[0]
            },
            success: function (response) {
                    alert(response.status);
            },
            error: function (err) {
                console.log(err);
                alert("error");
            }
        })
    });
});*/

function filesSelected() {
    console.log("here1");
    document.getElementById("photo").setAttribute("src", document.getElementById("fileSelector").files[0])
}

$(function () {
    $("#fileSelector").change(function () {
        console.log("here");
        $.ajax({
            url: 'http://max-scene-classifier.max.us-south.containers.appdomain.cloud/model/predict',
            method: 'POST',
            data: {
                "accept": "application/json",
                "Content-Type": "multipart/form-data",
                "image": $("#fileSelector").files[0]
            },
            success: function (response) {
                    alert(response.status);
            },
            error: function (err) {
                console.log(err);
                alert("error");
            }
        })
    })
});