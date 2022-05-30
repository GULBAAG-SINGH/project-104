
Webcam.set({
    width: 330,
    height: 340,
    image_format:'png',
    png_quality:90
});
camera= document.getElementById("Camera");
Webcam.attach('#camera');
function take_snapshot() {
    Webcam.snap(function(data_uri)
               {
        document.getElementById("Result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
    }
               );
}
console.log('ml5 version',ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Kf8BfhOPB/',modelLoaded);
function modelLoaded(){
    console.log('modelLoaded sucessfully');
    
}
