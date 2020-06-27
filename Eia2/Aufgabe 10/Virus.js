"use strict";
var Canvas_Aufgabe_10;
(function (Canvas_Aufgabe_10) {
    class Virus {
        constructor() {
            let x = 800 * Math.random();
            let y = 600 * Math.random();
            this.position = new Canvas_Aufgabe_10.Vector(x, y);
            // Geschwindigkeit & Richtung
            this.velocity = new Canvas_Aufgabe_10.Vector((Math.random() * 3), (Math.random() * -3.5 + 2.5));
        }
        move() {
            let temporaryVelocity = this.velocity;
            // Geschwindigkeit & Richtung zu Positon addieren
            this.position.add(temporaryVelocity);
            if (this.position.x < 0) {
                this.position.x += Canvas_Aufgabe_10.crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += Canvas_Aufgabe_10.crc2.canvas.height;
            }
            if (this.position.x > Canvas_Aufgabe_10.crc2.canvas.width) {
                this.position.x -= Canvas_Aufgabe_10.crc2.canvas.width;
            }
            if (this.position.y > Canvas_Aufgabe_10.crc2.canvas.height) {
                this.position.y -= Canvas_Aufgabe_10.crc2.canvas.height;
            }
        }
        draw() {
            // console.log("drawn");
            let radius = 17;
            Canvas_Aufgabe_10.crc2.save();
            Canvas_Aufgabe_10.crc2.beginPath();
            let gradient = Canvas_Aufgabe_10.crc2.createRadialGradient(0, 0, 0, 0, 0, radius);
            gradient.addColorStop(0, "#6E6E6E");
            gradient.addColorStop(1, "#7D182F");
            Canvas_Aufgabe_10.crc2.arc(this.position.x, this.position.y, radius, 0, 2 * Math.PI);
            Canvas_Aufgabe_10.crc2.fillStyle = gradient;
            Canvas_Aufgabe_10.crc2.fill();
            Canvas_Aufgabe_10.crc2.closePath();
        }
    }
    Canvas_Aufgabe_10.Virus = Virus;
})(Canvas_Aufgabe_10 || (Canvas_Aufgabe_10 = {}));
//# sourceMappingURL=Virus.js.map