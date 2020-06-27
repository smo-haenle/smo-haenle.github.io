"use strict";
var Canvas_Aufgabe_10;
(function (Canvas_Aufgabe_10) {
    class Particle {
        constructor() {
            let x = 800 * Math.random();
            let y = 600 * Math.random();
            this.position = new Canvas_Aufgabe_10.Vector(x, y);
            this.velocity = new Canvas_Aufgabe_10.Vector((Math.random() * 5), (Math.random() * -5.5 + 2.5)); // -0.5 - 0.5 || 2 - 3
        }
        move() {
            console.log("beweg dich doch bitte");
            let tempVel = this.velocity;
            this.position.add(tempVel);
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
            console.log("draw");
            let radiusParticle = ((Math.random() + 0.5) * 3);
            let particle = new Path2D();
            let gradient = Canvas_Aufgabe_10.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            gradient.addColorStop(0, "yellow");
            gradient.addColorStop(1, "black");
            Canvas_Aufgabe_10.crc2.shadowColor = "black";
            //crc2.shadowOffsetX = 1;
            Canvas_Aufgabe_10.crc2.shadowOffsetY = 1;
            Canvas_Aufgabe_10.crc2.shadowBlur = 10;
            Canvas_Aufgabe_10.crc2.save();
            Canvas_Aufgabe_10.crc2.fillStyle = gradient;
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            Canvas_Aufgabe_10.crc2.fill(particle);
            Canvas_Aufgabe_10.crc2.restore();
            Canvas_Aufgabe_10.crc2.closePath();
            Canvas_Aufgabe_10.crc2.stroke();
        }
    }
    Canvas_Aufgabe_10.Particle = Particle;
})(Canvas_Aufgabe_10 || (Canvas_Aufgabe_10 = {}));
/*/function drawParticle(_position: Vector, _size: Vector): void {
    console.log("particle", _position);
    let nParticle: number = 50;

    for (let d: number = 0; d < nParticle; d++) {
        crc2.save();
        let radiusParticle: number = ((Math.random() + 0.5) * 3);
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        gradient.addColorStop(0, "yellow");
        gradient.addColorStop(1, "black");
        crc2.shadowColor = "black";
        crc2.shadowOffsetX = 1;
        crc2.shadowOffsetY = 1;
        crc2.shadowBlur = 10;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        let x: number = (Math.random() - 0.5) * _size.x;
        let y: number = - (Math.random() * _size.y);
        crc2.translate(x, y);
        crc2.fill(particle);
        crc2.restore();*/ 
//# sourceMappingURL=Particle.js.map