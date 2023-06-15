var speech_api=window.webkitSpeechRecognition;
var Recognition=new speech_api();
function Start(){
    document.getElementById("text-box").innerHTML="";
    Recognition.start();
}
Recognition.onresult=function(event){
    var content=event.results[0][0].transcript;
    document.getElementById("text-box").innerHTML=content;
    if(content=="take my selfie"){
    console.log("taking selfie ---")
    speak();
    }
}
function speak(){
    var synth= window.speechSynthesis;
    var speak_data= "Taking your selfie in five seconds";
    var UtterThis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(UtterThis);
    Webcam.attach(camera);
    setTimeout (function()
    {
        take_snapshot();
        save();
    },5000);
}
camera= document.getElementById("camera");
Webcam.set({
    width:360,
    height:360,
    image_format:"png",
    png_quality:90
});
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'">';
    });
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("capture_image").src;
    link.href=image;
    link.click();
}