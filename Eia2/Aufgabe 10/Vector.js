"use strict";
var Canvas_Aufgabe_10;
(function (Canvas_Aufgabe_10) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        size(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        random(_minLength, _maxLength) {
            let length = _minLength = Math.random() * (_maxLength - _minLength);
            this.size(length);
        }
    }
    Canvas_Aufgabe_10.Vector = Vector;
})(Canvas_Aufgabe_10 || (Canvas_Aufgabe_10 = {}));
//# sourceMappingURL=Vector.js.map