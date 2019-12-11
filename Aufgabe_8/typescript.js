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
window.addEventListener("load", function () {
    document.querySelector("#play").addEventListener("click", StartBeat);
    document.querySelector("#Button1").addEventListener("mousedown", function () { PlaySample("kick.mp3"); });
    document.querySelector("#Button2").addEventListener("mousedown", function () { PlaySample("snare.mp3"); });
    document.querySelector("#Button3").addEventListener("mousedown", function () { PlaySample("hit.mp3"); });
    document.querySelector("#Button4").addEventListener("mousedown", function () { PlaySample("ton1.mp3"); });
    document.querySelector("#Button5").addEventListener("mousedown", function () { PlaySample("ton2.mp3"); });
    document.querySelector("#Button6").addEventListener("mousedown", function () { PlaySample("ton3.mp3"); });
    document.querySelector("#Button7").addEventListener("mousedown", function () { PlaySample("chant.mp3"); });
    document.querySelector("#Button8").addEventListener("mousedown", function () { PlaySample("tom1.mp3"); });
    document.querySelector("#Button9").addEventListener("mousedown", function () { PlaySample("tom2.mp3"); });
    document.querySelector("#sidebutton").addEventListener("mousedown", function () { PlaySample("driftsounds.mp3"); });
    document.querySelector("#rec").addEventListener("click", recordBeat);
    document.querySelector("#delete").addEventListener("click", deleteBeat);
    var beat = ["kick.mp3", "snare.mp3", "kick.mp3", "snare.mp3", "kick&hit.mp3", "kick&hit&snare.mp3", "kick&hit.mp3", "kick&hit&snare.mp3"];
    var record = false;
    function PlaySample(sample) {
        var sound = new Audio(sample);
        sound.play();
        if (record == true) {
            beat.push(sample);
        }
    }
    var tempo;
    var index = 0;
    function StartBeat() {
        if (document.getElementById("play").classList.contains("fa-play-circle")) {
            document.getElementById("play").classList.remove("fa-play-circle");
            document.getElementById("play").classList.add("fa-stop-circle");
            tempo = setInterval(dnb, 500);
            record = false;
        }
        else {
            document.getElementById("play").classList.remove("fa-stop-circle");
            document.getElementById("play").classList.add("fa-play-circle");
            clearInterval(tempo);
        }
    }
    function dnb() {
        PlaySample(beat[index]);
        index += 1;
        console.log(index);
        if (index > (beat.length - 1))
            index = 0;
    }
    function deleteBeat() {
        beat.length = 0;
    }
    function recordBeat() {
        record = true;
    }
});
/*
if (var1 == A){
log.console(ich bin A);}

else if (var1 == b){
log.console( ich bin b);}

else if (var1 == c){
log.console( ich bin C);}

else {
log.console( ich bin irgendwas);}
    }
    */ 
//# sourceMappingURL=typescript.js.map