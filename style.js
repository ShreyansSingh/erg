
Webcam.set({
    width:300,
    height:250,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");   

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}   

console.log('ml5 version:',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/cerjiFqFW/model.json',modelLoaded);

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}




function gotResult(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results)
        document.getElementById("result_emotion_name").innerHTML=results[0].label;

        if(results[0].label == "Shreyans"){
            document.getElementById("result_object_name").innerHTML = "Shreyans/Me";
        }else{
            document.getElementById("result_object_name").innerHTML = "Kiara/Sister"
        }
        }
    }