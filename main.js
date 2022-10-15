x=0;
y=0;
anoyc="";
aofr="";
function setup(){
    canvas=createCanvas(900,600);
}
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("status").innerHTML="System is listening. Please speak";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML="Speech has been recognised as "+ content;
    if(content=="circle" || content=="Circle"){
x=Math.floor(Math.random()*900);
y=Math.floor(Math.random()*600);
document.getElementById("status").innerHTML="Started drawing circle";
anoyc="set";
    }
    if(content=="rectangle" || content=="Rectangle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Started drawing Rectangle";
        aofr="set";
            }
}
function draw(){
    if(anoyc=="set"){
        r=Math.floor(Math.random()*100);
        circle(x,y,r);
        anoyc="";
        document.getElementById("status").innerHTML="Circle is drawn";
    }
    if(aofr=="set"){
        w=Math.floor(Math.random()*100);
        h=Math.floor(Math.random()*50);
        rect(x,y,w,h);
        aofr="";
        document.getElementById("status").innerHTML="Rectangle is drawn";
    }
}