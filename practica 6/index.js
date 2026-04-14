"use strict";
class Suscripcion {
    precioBase;
    constructor(precioBase) {
        this.precioBase = precioBase;
    }
    getPrecioBase() {
        return this.precioBase;
    }
}
class SuscripcionBasica extends Suscripcion {
    limiteUso;
    constructor(precio, limiteUso) {
        super(precio);
        this.limiteUso = limiteUso;
    }
    calcularCosto() {
        return this.getPrecioBase();
    }
    mostrarBeneficios() {
        console.log("Suscripción Básica");
        console.log("Límite de uso:", this.limiteUso);
    }
}
class SuscripcionPremium extends Suscripcion {
    beneficiosExtra;
    constructor(precio, beneficios) {
        super(precio);
        this.beneficiosExtra = beneficios;
    }
    calcularCosto() {
        return this.getPrecioBase() * 1.5;
    }
    mostrarBeneficios() {
        console.log("Suscripción Premium");
        console.log("Beneficios extra:", this.beneficiosExtra.join(", "));
    }
}
class Usuario {
    nombre;
    suscripcion = null;
    constructor(nombre) {
        this.nombre = nombre;
    }
    asignarSuscripcion(s) {
        this.suscripcion = s;
    }
    mostrarEstado() {
        console.log("Usuario:", this.nombre);
        if (this.suscripcion === null) {
            console.log("No tiene suscripción asignada");
            return;
        }
        this.suscripcion.mostrarBeneficios();
        console.log("Costo:", this.suscripcion.calcularCosto());
    }
}
const basica = new SuscripcionBasica(10, 100);
const premium = new SuscripcionPremium(20, ["Acceso ilimitado", "Soporte prioritario"]);
const usuario1 = new Usuario("Usuario1");
usuario1.asignarSuscripcion(basica);
const usuario2 = new Usuario("Usuario2");
usuario2.asignarSuscripcion(premium);
usuario1.mostrarEstado();
console.log("");
usuario2.mostrarEstado();
