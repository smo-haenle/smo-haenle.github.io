"use strict";
var Canvas_Aufgabe_8;
(function (Canvas_Aufgabe_8) {
    window.addEventListener("load", handleLoad);
    let crc2;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        let posDoor = { x: 400, y: 0 };
        let posFlagVirus = { x: 150, y: 200 };
        let posFlagAnti = { x: 450, y: 200 };
        drawBackground();
        drawVirus({ x: 150, y: 350 }, { x: 250, y: 375 });
        drawFlagVirus(posFlagVirus);
        drawFlagAnti(posFlagAnti);
        drawAnti({ x: 450, y: 200 }, { x: 200, y: 75 });
        drawParticle({ x: 330, y: 375 }, { x: 667, y: 375 });
        drawParticle2({ x: 330, y: 375 }, { x: 667, y: 375 });
        drawDoor(posDoor);
        function drawBackground() {
            let pattern = document.createElement("canvas").getContext("2d");
            let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
            gradient.addColorStop(0, "#880000");
            gradient.addColorStop(0.5, "black");
            gradient.addColorStop(0.2, "black");
            pattern.canvas.width = 40;
            pattern.canvas.height = 20;
            pattern.fillStyle = gradient;
            pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
            pattern.moveTo(0, 10);
            pattern.lineTo(10, 10);
            pattern.lineTo(20, 0);
            pattern.lineTo(30, 0);
            pattern.lineTo(40, 10);
            pattern.lineTo(30, 20);
            pattern.lineTo(20, 20);
            pattern.lineTo(10, 10);
            pattern.stroke();
            crc2.fillStyle = crc2.createPattern(pattern.canvas, 'repeat');
            crc2.fillRect(0, 0, canvas.width, canvas.height);
        }
        function drawDoor(_position) {
            console.log(_position.x, _position.y);
            crc2.beginPath();
            crc2.moveTo(_position.x, _position.y);
            crc2.lineTo(_position.x, 150);
            crc2.lineWidth = 10;
            crc2.lineTo(_position.x - 50, 190);
            crc2.moveTo(_position.x - 50, 210);
            crc2.lineTo(_position.x, 250);
            crc2.lineTo(_position.x, canvas.height);
            crc2.stroke();
            crc2.closePath();
        }
        function drawVirus(_position, _size) {
            console.log("Virus", _position);
            let nVirus = 20;
            for (let d = 0; d < nVirus; d++) {
                crc2.save();
                let radiusVirus = ((Math.random() + 0.5) * 10);
                let virus = new Path2D();
                let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusVirus);
                gradient.addColorStop(0, "green");
                gradient.addColorStop(1, "black");
                crc2.shadowColor = "green";
                crc2.shadowOffsetX = 1;
                crc2.shadowOffsetY = 1;
                crc2.shadowBlur = 20;
                crc2.save();
                crc2.translate(_position.x, _position.y);
                crc2.fillStyle = gradient;
                virus.arc(0, 0, radiusVirus, 0, 2 * Math.PI);
                let x = (Math.random() - 0.5) * _size.x;
                let y = -(Math.random() * _size.y);
                crc2.translate(x, y);
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
                crc2.fill(virus);
                crc2.restore();
            }
            crc2.restore();
        }
        function drawFlagVirus(_position) {
            crc2.beginPath();
            let gradient = crc2.createLinearGradient(_position.x, _position.y - 150, 150, 70);
            gradient.addColorStop(0, "green");
            gradient.addColorStop(1, "black");
            console.log(_position.x, _position.y);
            crc2.rect(_position.x, _position.y - 150, 150, 70);
            crc2.fillStyle = gradient;
            crc2.fill();
            crc2.save();
            crc2.closePath();
            crc2.font = "30px Comic Sans MS";
            crc2.fillStyle = "red";
            crc2.textAlign = "center";
            crc2.fillText("KILL", _position.x + 60, _position.y - 100);
            crc2.moveTo(_position.x, _position.y);
            crc2.lineTo(_position.x, _position.y - 150);
            crc2.lineWidth = 2;
            crc2.stroke();
        }
        function drawAnti(_position, _size) {
            let nAnti = 10;
            let x = 20;
            let y = 30;
            console.log("anti", _position.x, _position.y);
            for (let d = 0; d < nAnti; d++) {
                crc2.save();
                console.log("anti", _position.x, _position.y);
                crc2.beginPath();
                crc2.moveTo(_position.x, _position.y);
                crc2.lineTo(_position.x + 20, _position.y);
                crc2.lineTo(_position.x + 40, _position.y - 10);
                crc2.moveTo(_position.x, _position.y + 10);
                crc2.lineTo(_position.x + 20, _position.y + 10);
                crc2.lineTo(_position.x + 40, _position.y + 20);
                crc2.translate(_position.x + x, _position.y + y);
                crc2.strokeStyle = "lightblue";
                crc2.lineWidth = 3;
                console.log(x, y);
                crc2.stroke();
                crc2.restore();
            }
            crc2.restore();
        }
        function drawFlagAnti(_position) {
            crc2.beginPath();
            let gradient = crc2.createLinearGradient(_position.x, _position.y - 150, 150, 70);
            gradient.addColorStop(0, "blue");
            gradient.addColorStop(1, "lightblue");
            console.log(_position.x, _position.y);
            crc2.rect(_position.x, _position.y - 130, 150, 70);
            crc2.fillStyle = gradient;
            crc2.shadowColor = "blue";
            crc2.shadowOffsetX = 1;
            crc2.shadowOffsetY = 1;
            crc2.shadowBlur = 5;
            crc2.fill();
            crc2.save();
            crc2.closePath();
            crc2.font = "30px Helvetica neue";
            crc2.fillStyle = "Lightblue";
            crc2.textAlign = "center";
            crc2.fillText("SAFE", _position.x + 60, _position.y - 80);
            crc2.moveTo(_position.x, _position.y);
            crc2.lineTo(_position.x, _position.y - 130);
            crc2.lineWidth = 2;
            crc2.stroke();
        }
        function drawParticle(_position, _size) {
            console.log("particle", _position);
            let nParticle = 50;
            for (let d = 0; d < nParticle; d++) {
                crc2.save();
                let radiusParticle = ((Math.random() + 0.5) * 3);
                let particle = new Path2D();
                let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
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
                let x = (Math.random() - 0.5) * _size.x;
                let y = -(Math.random() * _size.y);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            crc2.restore();
        }
        function drawParticle2(_position, _size) {
            console.log("particle2", _position);
            let nParticle = 50;
            for (let d = 0; d < nParticle; d++) {
                crc2.save();
                let radiusParticle2 = ((Math.random() + 0.5) * 3);
                let particle2 = new Path2D();
                let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle2);
                gradient.addColorStop(0, "green");
                gradient.addColorStop(1, "red");
                crc2.shadowColor = "black";
                crc2.shadowOffsetX = 1;
                crc2.shadowOffsetY = 1;
                crc2.shadowBlur = 5;
                crc2.save();
                crc2.translate(_position.x, _position.y);
                crc2.fillStyle = gradient;
                particle2.arc(0, 0, radiusParticle2, 0, 2 * Math.PI);
                let x = (Math.random() - 0.5) * _size.x;
                let y = -(Math.random() * _size.y);
                crc2.translate(x, y);
                crc2.fill(particle2);
                crc2.restore();
            }
            crc2.restore();
        }
    }
})(Canvas_Aufgabe_8 || (Canvas_Aufgabe_8 = {}));
//# sourceMappingURL=Aufgabe8.js.map