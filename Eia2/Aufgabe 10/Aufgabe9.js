"use strict";
var Canvas_Aufgabe_10;
(function (Canvas_Aufgabe_10) {
    window.addEventListener("load", handleLoad);
    Canvas_Aufgabe_10.particles = [];
    Canvas_Aufgabe_10.virus = [];
    Canvas_Aufgabe_10.antibody = [];
    Canvas_Aufgabe_10.updateIntervalId = 0;
    let posDoor = { x: 400, y: 0 };
    let posFlagVirus = { x: 150, y: 200 };
    let posFlagAnti = { x: 450, y: 200 };
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Canvas_Aufgabe_10.crc2 = canvas.getContext("2d");
        drawBackground();
        drawVirus({ x: 150, y: 350 }, { x: 250, y: 375 });
        drawFlagVirus(posFlagVirus);
        drawFlagAnti(posFlagAnti);
        drawAnti({ x: 450, y: 200 }, { x: 200, y: 75 });
        drawParticle(50);
        drawParticle2({ x: 330, y: 375 }, { x: 667, y: 375 });
        drawDoor(posDoor);
        let background = Canvas_Aufgabe_10.crc2.getImageData(0, 0, 800, 600);
        Canvas_Aufgabe_10.updateIntervalId = window.setInterval(update, 20, background); // ticks = 1000 / 20 = 50
        function drawBackground() {
            Canvas_Aufgabe_10.crc2.beginPath();
            let pattern = document.createElement("canvas").getContext("2d");
            let gradient = Canvas_Aufgabe_10.crc2.createLinearGradient(0, 0, 0, Canvas_Aufgabe_10.crc2.canvas.height);
            gradient.addColorStop(0, "#880000");
            gradient.addColorStop(0.5, "black");
            gradient.addColorStop(0.2, "black");
            pattern.canvas.width = 40;
            pattern.canvas.height = 20;
            pattern.fillStyle = gradient;
            pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
            pattern.moveTo(0, 10);
            pattern.lineTo(5, 10);
            pattern.lineTo(20, 0);
            pattern.lineTo(30, 0);
            pattern.lineTo(40, 10);
            pattern.lineTo(30, 20);
            pattern.lineTo(20, 20);
            pattern.lineTo(10, 10);
            pattern.stroke();
            Canvas_Aufgabe_10.crc2.fillStyle = Canvas_Aufgabe_10.crc2.createPattern(pattern.canvas, "repeat");
            Canvas_Aufgabe_10.crc2.fillRect(0, 0, Canvas_Aufgabe_10.crc2.canvas.width, Canvas_Aufgabe_10.crc2.canvas.height);
            Canvas_Aufgabe_10.crc2.closePath();
        }
        function drawDoor(_position) {
            Canvas_Aufgabe_10.crc2.beginPath();
            console.log(_position.x, _position.y);
            Canvas_Aufgabe_10.crc2.beginPath();
            Canvas_Aufgabe_10.crc2.moveTo(_position.x, _position.y);
            Canvas_Aufgabe_10.crc2.lineTo(_position.x, 150);
            Canvas_Aufgabe_10.crc2.lineWidth = 10;
            Canvas_Aufgabe_10.crc2.lineTo(_position.x - 50, 190);
            Canvas_Aufgabe_10.crc2.moveTo(_position.x - 50, 210);
            Canvas_Aufgabe_10.crc2.lineTo(_position.x, 250);
            Canvas_Aufgabe_10.crc2.lineTo(_position.x, Canvas_Aufgabe_10.crc2.canvas.height);
            Canvas_Aufgabe_10.crc2.stroke();
            Canvas_Aufgabe_10.crc2.closePath();
        }
        function drawVirus(_position, _size) {
            console.log("Virus", _position);
            let nVirus = 20;
            for (let d = 0; d < nVirus; d++) {
                Canvas_Aufgabe_10.crc2.save();
                let radiusVirus = ((Math.random() + 0.5) * 10);
                let virus = new Path2D();
                let gradient = Canvas_Aufgabe_10.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusVirus);
                gradient.addColorStop(0, "green");
                gradient.addColorStop(1, "black");
                Canvas_Aufgabe_10.crc2.shadowColor = "green";
                Canvas_Aufgabe_10.crc2.shadowOffsetX = 1;
                Canvas_Aufgabe_10.crc2.shadowOffsetY = 1;
                Canvas_Aufgabe_10.crc2.shadowBlur = 20;
                Canvas_Aufgabe_10.crc2.save();
                Canvas_Aufgabe_10.crc2.translate(_position.x, _position.y);
                Canvas_Aufgabe_10.crc2.fillStyle = gradient;
                virus.arc(0, 0, radiusVirus, 0, 2 * Math.PI);
                let x = (Math.random() - 0.5) * _size.x;
                let y = -(Math.random() * _size.y);
                Canvas_Aufgabe_10.crc2.translate(x, y);
                /* for (let i: number = 0; i < 30; i++) {
                 let xr: number = ((Math.random() - 1) / 2);
                 let yr: number = ((Math.random() - 1) / 2);
                 crc2.moveTo (x, y);
                 console.log(x, y);
                 crc2.lineWidth = 0.5;
                 crc2.lineTo (xr, yr);
                 console.log("hier", xr);
                 crc2.stroke();
                 }*/
                Canvas_Aufgabe_10.crc2.fill(virus);
                Canvas_Aufgabe_10.crc2.restore();
            }
            Canvas_Aufgabe_10.crc2.restore();
        }
        function drawFlagVirus(_position) {
            Canvas_Aufgabe_10.crc2.beginPath();
            let gradient = Canvas_Aufgabe_10.crc2.createLinearGradient(_position.x, _position.y - 150, 150, 70);
            gradient.addColorStop(0, "green");
            gradient.addColorStop(1, "black");
            console.log(_position.x, _position.y);
            Canvas_Aufgabe_10.crc2.rect(_position.x, _position.y - 150, 150, 70);
            Canvas_Aufgabe_10.crc2.fillStyle = gradient;
            Canvas_Aufgabe_10.crc2.fill();
            Canvas_Aufgabe_10.crc2.save();
            Canvas_Aufgabe_10.crc2.closePath();
            Canvas_Aufgabe_10.crc2.font = "30px Comic Sans MS";
            Canvas_Aufgabe_10.crc2.fillStyle = "red";
            Canvas_Aufgabe_10.crc2.textAlign = "center";
            Canvas_Aufgabe_10.crc2.fillText("KILL", _position.x + 60, _position.y - 100);
            Canvas_Aufgabe_10.crc2.moveTo(_position.x, _position.y);
            Canvas_Aufgabe_10.crc2.lineTo(_position.x, _position.y - 150);
            Canvas_Aufgabe_10.crc2.lineWidth = 2;
            Canvas_Aufgabe_10.crc2.stroke();
        }
        function drawAnti(_position, _size) {
            let nAnti = 10;
            let x = 20;
            let y = 30;
            console.log("anti", _position.x, _position.y);
            for (let d = 0; d < nAnti; d++) { // schleife funktioniert noch nicht, da alle auf den gleichen punkt gezeichnet werden
                Canvas_Aufgabe_10.crc2.save();
                console.log("anti", _position.x, _position.y);
                Canvas_Aufgabe_10.crc2.beginPath();
                Canvas_Aufgabe_10.crc2.moveTo(_position.x, _position.y);
                Canvas_Aufgabe_10.crc2.lineTo(_position.x + 20, _position.y);
                Canvas_Aufgabe_10.crc2.lineTo(_position.x + 40, _position.y - 10);
                Canvas_Aufgabe_10.crc2.moveTo(_position.x, _position.y + 10);
                Canvas_Aufgabe_10.crc2.lineTo(_position.x + 20, _position.y + 10);
                Canvas_Aufgabe_10.crc2.lineTo(_position.x + 40, _position.y + 20);
                Canvas_Aufgabe_10.crc2.translate(_position.x + x, _position.y + y);
                Canvas_Aufgabe_10.crc2.strokeStyle = "lightblue";
                Canvas_Aufgabe_10.crc2.lineWidth = 3;
                console.log(x, y);
                Canvas_Aufgabe_10.crc2.stroke();
                Canvas_Aufgabe_10.crc2.restore();
            }
            Canvas_Aufgabe_10.crc2.restore();
        }
        function drawFlagAnti(_position) {
            Canvas_Aufgabe_10.crc2.beginPath();
            let gradient = Canvas_Aufgabe_10.crc2.createLinearGradient(_position.x, _position.y - 150, 150, 70);
            gradient.addColorStop(0, "blue");
            gradient.addColorStop(1, "lightblue");
            console.log(_position.x, _position.y);
            Canvas_Aufgabe_10.crc2.rect(_position.x, _position.y - 130, 150, 70);
            Canvas_Aufgabe_10.crc2.fillStyle = gradient;
            Canvas_Aufgabe_10.crc2.shadowColor = "blue";
            Canvas_Aufgabe_10.crc2.shadowOffsetX = 1;
            Canvas_Aufgabe_10.crc2.shadowOffsetY = 1;
            Canvas_Aufgabe_10.crc2.shadowBlur = 5;
            Canvas_Aufgabe_10.crc2.fill();
            Canvas_Aufgabe_10.crc2.save();
            Canvas_Aufgabe_10.crc2.closePath();
            Canvas_Aufgabe_10.crc2.font = "30px Helvetica neue";
            Canvas_Aufgabe_10.crc2.fillStyle = "Lightblue";
            Canvas_Aufgabe_10.crc2.textAlign = "center";
            Canvas_Aufgabe_10.crc2.fillText("SAFE", _position.x + 60, _position.y - 80);
            Canvas_Aufgabe_10.crc2.moveTo(_position.x, _position.y);
            Canvas_Aufgabe_10.crc2.lineTo(_position.x, _position.y - 130);
            Canvas_Aufgabe_10.crc2.lineWidth = 2;
            Canvas_Aufgabe_10.crc2.stroke();
        }
        function drawParticle(_nParticle) {
            for (let i = 0; i < _nParticle; i++) {
                let particle = new Canvas_Aufgabe_10.Particle();
                Canvas_Aufgabe_10.particles.push(particle);
            }
        }
        function drawParticle2(_position, _size) {
            console.log("particle2", _position);
            let nParticle = 50;
            for (let d = 0; d < nParticle; d++) {
                Canvas_Aufgabe_10.crc2.save();
                let radiusParticle2 = ((Math.random() + 0.5) * 3);
                let particle2 = new Path2D();
                let gradient = Canvas_Aufgabe_10.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle2);
                gradient.addColorStop(0, "green");
                gradient.addColorStop(1, "red");
                Canvas_Aufgabe_10.crc2.shadowColor = "black";
                Canvas_Aufgabe_10.crc2.shadowOffsetX = 1;
                Canvas_Aufgabe_10.crc2.shadowOffsetY = 1;
                Canvas_Aufgabe_10.crc2.shadowBlur = 5;
                Canvas_Aufgabe_10.crc2.save();
                Canvas_Aufgabe_10.crc2.translate(_position.x, _position.y);
                Canvas_Aufgabe_10.crc2.fillStyle = gradient;
                particle2.arc(0, 0, radiusParticle2, 0, 2 * Math.PI);
                let x = (Math.random() - 0.5) * _size.x;
                let y = -(Math.random() * _size.y);
                Canvas_Aufgabe_10.crc2.translate(x, y);
                Canvas_Aufgabe_10.crc2.fill(particle2);
                Canvas_Aufgabe_10.crc2.restore();
            }
            Canvas_Aufgabe_10.crc2.restore();
        }
        function update(_background) {
            console.log("update");
            Canvas_Aufgabe_10.crc2.putImageData(_background, 0, 0);
            for (let particle of Canvas_Aufgabe_10.particles) {
                particle.move();
                particle.draw();
            }
            /*  for (let corona of virus) {
                  corona.move();
                  corona.draw();
              }
              for (let anti of antibody) {
                  anti.move();
                  anti.draw();
              }*/
        }
    }
})(Canvas_Aufgabe_10 || (Canvas_Aufgabe_10 = {}));
//# sourceMappingURL=Aufgabe9.js.map