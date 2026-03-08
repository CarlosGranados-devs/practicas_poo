"use strict";
// 2. Modelar un sistema académico. Clase base: Persona (nombre y edad). Clases hijas: Estudiante y Docente. Validar que la edad sea mayor a 0. Cada clase debe tener un método mostrarRol().
Object.defineProperty(exports, "__esModule", { value: true });
class Persona {
    constructor(nombre, edad) {
        if (edad <= 0)
            throw new Error("La edad debe ser mayor que 0");
        this.nombre = nombre;
        this.edad = edad;
    }
    mostrarRol() {
        console.log(`\nNombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}
class Estudiante extends Persona {
    constructor(nombre, edad) {
        super(nombre, edad);
    }
    mostrarRol() {
        super.mostrarRol();
        console.log("Rol> Estudiante");
    }
}
class Docente extends Persona {
    constructor(nombre, edad) {
        super(nombre, edad);
    }
    mostrarRol() {
        super.mostrarRol();
        console.log("Rol: Docente");
    }
}
const alumno = new Estudiante("Huan", 18);
alumno.mostrarRol();
const maestro = new Docente("Will", 28);
maestro.mostrarRol();
//# sourceMappingURL=E02.js.map