/*/var list:string
window.addEventListener("load", function(){
   document.querySelector(".blockblue").addEventListener("mousedown", PlaySample)
})

function PlaySample(){
    
    var sound:HTMLAudioElement = new Audio("assets/kick.mp3");
    sound.play();
}



//zeichenkette in  parameter dynamisch zusammenbauen also /kick usw. variabel
//Arrays beatmaschine automatiche sample abfolge

setInterval(function() {
    PlaySample(); //spielt alle 500 ms die kick automatisch ab
}, 500);
/*/

window.addEventListener("load", function (){
    document.querySelector("#Button1").addEventListener("mousedown", function(){playSample("kick.mp3");});
    document.querySelector("#Button2").addEventListener("mousedown", function(){playSample("snare.mp3");});
    document.querySelector("#Button3").addEventListener("mousedown", function(){playSample("hit.mp3");});
    document.querySelector("#Button4").addEventListener("mousedown", function(){playSample("ton1.mp3");});
    document.querySelector("#Button5").addEventListener("mousedown", function(){playSample("ton2.mp3");});
    document.querySelector("#Button6").addEventListener("mousedown", function(){playSample("ton3.mp3");});
    document.querySelector("#Button7").addEventListener("mousedown", function(){playSample("chant.mp3");});
    document.querySelector("#Button8").addEventListener("mousedown", function(){playSample("tom1.mp3");});
    document.querySelector("#Button9").addEventListener("mousedown", function(){playSample("tom2.mp3");});
    document.querySelector("#sidebutton").addEventListener("mousedown", function(){playSample("driftsounds.mp3");});
   document.querySelector("#Play").addEventListener("click", StartBeat) 
});

function playSample(myMP3: string)  {
    var sound:HTMLAudioElement = new Audio(myMP3);
    sound.play();   
};


function StartBeat () {
    var Kick = setInterval(myBeat, 500);
    var index:number = 0;
    var Beat: string [] = ["kick&hit.mp3","kick&hit&snare.mp3","kick&hit.mp3","kick&hit&snare.mp3"];
    function myBeat (){
        var mySound:HTMLAudioElement = new Audio(Beat [index]);
        mySound.play();
        index += 1;
        if (index>3) index=0;
        console.log(Beat [index] );
        
          }
          document.querySelector("#button10pause").addEventListener("mousedown", stopBeat);
          function stopBeat() {
              clearInterval(Kick); 
          
        }};;
    


