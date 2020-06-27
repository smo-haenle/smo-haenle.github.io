"use strict";
var Canvas_Aufgabe_10;
(function (Canvas_Aufgabe_10) {
    class Moveable {
        constructor(_position) {
            this.position = _position;
            this.velocity = new Canvas_Aufgabe_10.Vector(0, 0);
        }
        draw() {
            //hidden message to Markus: warum bewegen sich meine particle nicht ): die werden oben links im Bild gezeichnet. Es uss also irgendwo an der move funktion liegen
        }
        move(_timeslice) {
            let offset = new Canvas_Aufgabe_10.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
        }
    }
    Canvas_Aufgabe_10.Moveable = Moveable;
})(Canvas_Aufgabe_10 || (Canvas_Aufgabe_10 = {}));
//# sourceMappingURL=moveable.js.map