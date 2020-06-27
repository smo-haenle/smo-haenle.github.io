namespace Canvas_Aufgabe_10 {
    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    export let particles: Particle[] = [];
    export let virus: Virus[] = [];
    export let antibody: Anti[] = [];
    export let updateIntervalId: number = 0;


    let posDoor: Vector = { x: 400, y: 0 };
    let posFlagVirus: Vector = { x: 150, y: 200 };
    let posFlagAnti: Vector = { x: 450, y: 200 };

    function handleLoad(_event: Event): void {

        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawBackground();
        drawVirus({ x: 150, y: 350 }, { x: 250, y: 375 });
        drawFlagVirus(posFlagVirus);
        drawFlagAnti(posFlagAnti);
        drawAnti({ x: 450, y: 200 }, { x: 200, y: 75 });
        drawParticle(50);
        drawParticle2({ x: 330, y: 375 }, { x: 667, y: 375 });
        drawDoor(posDoor);
        let background: ImageData = crc2.getImageData(0, 0, 800, 600);
        updateIntervalId = window.setInterval(update, 20, background); // ticks = 1000 / 20 = 50

        function drawBackground(): void {
            crc2.beginPath();
            let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement("canvas").getContext("2d");
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
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

            crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            crc2.closePath();

        }

        function drawDoor(_position: Vector): void {
            crc2.beginPath();
            console.log(_position.x, _position.y);
            crc2.beginPath();
            crc2.moveTo(_position.x, _position.y);
            crc2.lineTo(_position.x, 150);
            crc2.lineWidth = 10;
            crc2.lineTo(_position.x - 50, 190);
            crc2.moveTo(_position.x - 50, 210);
            crc2.lineTo(_position.x, 250);
            crc2.lineTo(_position.x, crc2.canvas.height);
            crc2.stroke();
            crc2.closePath();


        }

        function drawVirus(_position: Vector, _size: Vector): void {
            console.log("Virus", _position);
            let nVirus: number = 20;

            for (let d: number = 0; d < nVirus; d++) {
                crc2.save();
                let radiusVirus: number = ((Math.random() + 0.5) * 10);
                let virus: Path2D = new Path2D();
                let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusVirus);
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
                let x: number = (Math.random() - 0.5) * _size.x;
                let y: number = - (Math.random() * _size.y);
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

        function drawFlagVirus(_position: Vector): void {
            crc2.beginPath();
            let gradient: CanvasGradient = crc2.createLinearGradient(_position.x, _position.y - 150, 150, 70);
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

        function drawAnti(_position: Vector, _size: Vector): void {
            let nAnti: number = 10;
            let x: number = 20;
            let y: number = 30;
            console.log("anti", _position.x, _position.y);


            for (let d: number = 0; d < nAnti; d++) {// schleife funktioniert noch nicht, da alle auf den gleichen punkt gezeichnet werden
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
        function drawFlagAnti(_position: Vector): void {

            crc2.beginPath();
            let gradient: CanvasGradient = crc2.createLinearGradient(_position.x, _position.y - 150, 150, 70);
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
        function drawParticle(_nParticle: number): void {

            for (let i: number = 0; i < _nParticle; i++) {
                let particle: Particle = new Particle();
                particles.push(particle);
            }
        }
        function drawParticle2(_position: Vector, _size: Vector): void {
            console.log("particle2", _position);
            let nParticle: number = 50;

            for (let d: number = 0; d < nParticle; d++) {
                crc2.save();
                let radiusParticle2: number = ((Math.random() + 0.5) * 3);
                let particle2: Path2D = new Path2D();
                let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle2);
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
                let x: number = (Math.random() - 0.5) * _size.x;
                let y: number = - (Math.random() * _size.y);
                crc2.translate(x, y);
                crc2.fill(particle2);
                crc2.restore();


            }

            crc2.restore();

        }
        function update(_background: ImageData): void {
            console.log("update");
            crc2.putImageData(_background, 0, 0);


            for (let particle of particles) {
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
}