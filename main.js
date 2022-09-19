var SpeechRecognition = window.wekitSpeechRecognition;
var recognition = new SpeechRecognition();
function speak(){
    var synth = window.speechSynthesis;
    set_timeout(function(){
        img_id = "selfie1";
        speak_data = "Capturing first selfie in 5 seconds."
        var utterThis = SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        take_snapshot();
        save();
    }, 5000);
    set_timeout(function(){
        img_id = "selfie2";
        speak_data = "Capturing second image in 5 seconds."
        var utterThis = SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        take_snapshot();
        save();
    }, 10000);
    set_timeout(function(){
        img_id = "selfie3";
        speak_data = "Capturing the third photo in 5 seconds."
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        take_snapshot();
        save();
    }, 15000);
}
function start() {
    document.getElementById("textarea").innerHTML="";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textarea").innerHTML = Content;
    console.log(Content);
    speak();
}
function take_snapshot(){
    console.log(img_id + " captured.");
    Webcam.snap(function(data_uri){
        if (img_id == "selfie1") {
            document.getElementById("result1").innerHTML ='<img id="selfie1" src="'+data_uri+'">'
        }
        if (img_id == "selfie2") {
            document.getElementById("result2").innerHTML ='<img id="selfie2" src="'+data_uri+'">'
        } 
        if (img_id == "selfie3") {
            document.getElementById("result3").innerHTML ='<img id="selfie3" src="'+data_uri+'">'
        } 
    });
}
function save() {
    if(img_id == "selfie1"){
        link = document.getElementById("link");
    }
}