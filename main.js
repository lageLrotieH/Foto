var SpeechRecognition=window.webkitSpeechRecognition;
var Recognition=new SpeechRecognition()
var textbox= document.getElementById("textbox")
function start(){
    textbox.innerHTML=""
    Recognition.start()
    speak()
}
Recognition.onresult=function(event){
    console.log(event)
}
function speak(){ var synth = window.speechSynthesis;
     speakData = "Tirando sua selfie em 5 segundos";
 var utterThis = new SpeechSynthesisUtterance(speakData);
 synth.speak(utterThis);
  
   setTimeout(function() {
     takeSelfie();
     save();
     }, 5000); }
     var camera=document.getElementById("camera")
     Webcam.attach("camera");
     Webcam.set({
        width:300,
        height:200,
        Image_format:"jpeg",jpeg_quality:90
     })
     function takeSelfie()
       { Webcam.snap(function(data_uri){ document.getElementById("result").innerHTML='<img id= "self_image" src="'+data_uri+'">'; })};