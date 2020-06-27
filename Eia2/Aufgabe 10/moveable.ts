namespace Canvas_Aufgabe_10 {
    export class Moveable {
        position: Vector;
        velocity: Vector;

        constructor(_position: Vector) {
            this.position = _position; 
            this.velocity = new Vector(0, 0); 
        }

        draw(): void {
            //hidden message to Markus: warum bewegen sich meine particle nicht ): die werden oben links im Bild gezeichnet. Es uss also irgendwo an der move funktion liegen
            
        }

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
        }
    }
}