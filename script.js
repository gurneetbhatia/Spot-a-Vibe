/*$.ajax({
	url: 'http://max-scene-classifier.max.us-south.containers.appdomain.cloud/model/predict',
	beforeSend: function(xhr) {
		xhr.setRequestheader("accept", "application/json"),
		xhr.setRequestheader("Content-Type", "multipart/form-data")
	}, success: function(data) {
		alert(data);
	}
})*/

$.ajax({
    url: 'http://max-scene-classifier.max.us-south.containers.appdomain.cloud/model/predict',
    method: 'POST',
    data: {
        "accept": "application/json",
        "Content-Type": "multipart/form-data",
        "image": file
    },
    /*files: {
        "image": file
    },*/
    success: function (response) {
            alert(response.status);
    },
    error: function (err) {
        console.log(err);
        alert("error");
    }
})

