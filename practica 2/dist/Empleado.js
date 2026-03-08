"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleadoPorHora = exports.EmpleadoTiemploCompleto = exports.Empleado = void 0;
class Empleado {
    constructor(nombre, genero, edad, numeroEmpleado) {
        this.validarDatos(nombre, genero, edad, numeroEmpleado);
        this.nombre = nombre;
        this.genero = genero;
        this.edad = edad;
        this.numeroEmpleado = numeroEmpleado;
    }
    trabajar() {
        console.log("Trabaja 8 horas al dia");
    }
    validarDatos(nombre, genero, edad, numeroEmpleado) {
        if (nombre.trim().length < 3)
            throw new Error('El nombre debe tener al menos 3 caracteres');
        if (genero !== 'M' && genero !== 'F')
            throw new Error('El genero debe ser "M" o "F"');
        if (edad < 18)
            throw new Error('El empleado no puede ser menor de edad');
        if (numeroEmpleado < 10000000)
            throw new Error('El nnumero no puede ser menor a 10000000');
    }
}
exports.Empleado = Empleado;
//empleado tiempo completo
class EmpleadoTiemploCompleto extends Empleado {
    constructor(nombre, genero, edad, numeroEmpleado, salarioBase) {
        super(nombre, genero, edad, numeroEmpleado);
        this.salarioBase = salarioBase;
    }
    calcularSalario() {
        console.log(`Salario: $${this.salarioBase}`);
    }
}
exports.EmpleadoTiemploCompleto = EmpleadoTiemploCompleto;
class EmpleadoPorHora extends Empleado {
    constructor(nombre, genero, edad, numeroEmpleado, horasTrabajadas, tarifaPorHora) {
        super(nombre, genero, edad, numeroEmpleado);
        this.horasTrabajadas = horasTrabajadas;
        this.tarifaPorHora = tarifaPorHora;
    }
    calcularSalario() {
        console.log(`Salario: $${this.horasTrabajadas * this.tarifaPorHora}`);
    }
}
exports.EmpleadoPorHora = EmpleadoPorHora;
//# sourceMappingURL=Empleado.js.map