var L02_Blackmail;
(function (L02_Blackmail) {
    var chosenCharacter = "A";
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        var mail = document.querySelector("div#mail");
        mail.addEventListener("click", placeCharacter);
        document.addEventListener("keydown", chooseCharacter);
    }
    function placeCharacter(_event) {
        var x = _event.offsetX;
        var y = _event.offsetY;
        var mail = _event.target;
        var letter = document.createElement("span");
        mail.appendChild(letter);
        letter.textContent = chosenCharacter;
        letter.style.left = x + "px";
        letter.style.top = y + "px";
        letter.addEventListener("click", deleteLetter);
    }
    function chooseCharacter(_event) {
        chosenCharacter = _event.key;
    }
    function deleteLetter(_event) {
        var target = _event.target;
        var parent = target.parentNode;
        parent.removeChild(target);
    }
})(L02_Blackmail || (L02_Blackmail = {}));
//# sourceMappingURL=lektion.js.map