
function selectSucess (imageURI){
	var largeImage = document.getElementById('imagen');

      // Unhide image elements
      //
      largeImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      largeImage.src = imageURI;

}

function captureSucess(imageData) {
      // Uncomment to view the base64-encoded image data
      // console.log(imageData);

      // Get image handle
      //
      var smallImage = document.getElementById('imagen');

      // Unhide image elements
      //
      smallImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = "data:image/jpeg;base64," + imageData;
    }

function onFail(message) {
    alert('Failed because: ' + message);
}

function selectPhoto() {
  navigator.camera.getPicture(selectSucess, onFail, { quality: 50,sourceType : Camera.PictureSourceType.PHOTOLIBRARY, destinationType: Camera.DestinationType.FILE_URI });

}

function capturePhoto() {
  navigator.camera.getPicture(captureSucess, onFail, { quality: 50, destinationType: Camera.DestinationType.DATA_URL }); 
}



