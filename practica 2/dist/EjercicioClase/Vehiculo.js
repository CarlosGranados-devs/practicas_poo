"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motocicleta = exports.Automovil = exports.Vehiculo = void 0;
class Vehiculo {
    constructor(marca, modelo, anio) {
        this.validaciones(marca, modelo, anio);
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
    mostrarInformacion() {
        console.log(`
            Marca: ${this.marca}
            Modelo: ${this.modelo}
            Anio: ${this.anio}`);
    }
    validaciones(marca, modelo, anio) {
        if (marca.trim().length == 0)
            throw new Error('La marca no puede estar vacia');
        if (modelo.trim().length == 0)
            throw new Error('El modelo no puede estar vacia');
        if (anio > 2026)
            throw new Error('el anio no [puede ser mayor al actual');
    }
}
exports.Vehiculo = Vehiculo;
class Automovil extends Vehiculo {
    constructor(marca, modelo, anio, numeroPuertas) {
        super(marca, modelo, anio);
        this.numeroPuertas = numeroPuertas;
    }
    mostrarInformacion() {
        console.log(`
            Marca: ${this.marca}
            Modelo: ${this.modelo}
            Anio: ${this.anio}
            Numero de puertas: ${this.numeroPuertas}`);
    }
    validarAutomovil(numeroPuertas) {
        if (numeroPuertas > 6 && numeroPuertas < 1)
            throw new Error('Coloque la cantidad de puertas correctamente');
    }
}
exports.Automovil = Automovil;
class Motocicleta extends Vehiculo {
    constructor(marca, modelo, anio, cilindrada) {
        super(marca, modelo, anio);
        this.cilindrada = cilindrada;
    }
    mostrarInformacion() {
        console.log(`
            Marca: ${this.marca}
            Modelo: ${this.modelo}
            Anio: ${this.anio}
            Es cilindrada?: ${this.cilindrada}`);
    }
}
exports.Motocicleta = Motocicleta;
//# sourceMappingURL=Vehiculo.js.map