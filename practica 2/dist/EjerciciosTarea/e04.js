"use strict";
// 4. Modelar una jerarquía de figuras geométricas. Clase base: Figura (método calcularArea()). Clases hijas: Rectangulo y Circulo. Implementar validaciones para dimensiones mayores que 0.
Object.defineProperty(exports, "__esModule", { value: true });
class Figura {
    calcularArea() {
    }
    mostrarArea() {
        console.log(`area de ${this.constructor.name}: ${this.calcularArea()}`);
    }
}
class Rectangulo extends Figura {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
        if (base <= 0 || altura <= 0) {
            throw new Error("La base y la altura deben ser mayores que 0 ");
        }
    }
    calcularArea() {
        return this.base * this.altura;
    }
}
class Circulo extends Figura {
    constructor(radio) {
        super();
        this.radio = radio;
        if (radio <= 0)
            throw new Error("El radio debe ser mayor que 0");
    }
    calcularArea() {
        return Math.PI * Math.pow(this.radio, 2);
    }
}
const figura1 = new Rectangulo(20, 10);
figura1.mostrarArea();
const figura2 = new Circulo(15);
figura2.mostrarArea();
//# sourceMappingURL=e04.js.map