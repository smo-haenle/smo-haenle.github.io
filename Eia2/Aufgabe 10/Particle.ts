namespace Canvas_Aufgabe_10 {

    export class Particle {
        position: Vector;
        velocity: Vector;
        size: Vector;

        constructor() {
            let x: number = 800 * Math.random();
            let y: number = 600 * Math.random();

            this.position = new Vector(x, y);

            this.velocity = new Vector((Math.random() * 5), (Math.random() * -5.5 + 2.5)); // -0.5 - 0.5 || 2 - 3
        }

        move(): void {
            console.log("beweg dich doch bitte");
            let tempVel: Vector = this.velocity;

            this.position.add(tempVel);

            if (this.position.x < 0) {
                this.position.x += crc2.canvas.width;
            }

            if (this.position.y < 0) {
                this.position.y += crc2.canvas.height;
            }

            if (this.position.x > crc2.canvas.width) {
                this.position.x -= crc2.canvas.width;
            }

            if (this.position.y > crc2.canvas.height) {
                this.position.y -= crc2.canvas.height;
            }
        }

        draw(): void {
            console.log("draw");
            let radiusParticle: number = ((Math.random() + 0.5) * 3);
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            gradient.addColorStop(0, "yellow");
            gradient.addColorStop(1, "black");
            crc2.shadowColor = "black";
            //crc2.shadowOffsetX = 1;
            crc2.shadowOffsetY = 1;
            crc2.shadowBlur = 10;
           
            crc2.save();
            crc2.fillStyle = gradient;
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            crc2.fill(particle);
            crc2.restore();
            crc2.closePath();
            crc2.stroke();
            
        }
       
    }

}



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