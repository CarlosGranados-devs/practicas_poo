"use strict";
// 1. Modelar una jerarquía de CuentaBancaria. Clase base: titular y saldo. Clases hijas: CuentaAhorro y CuentaCorriente. Implementar métodos de depósito y retiro con validaciones (no permitir saldo negativo).
Object.defineProperty(exports, "__esModule", { value: true });
class CuentaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(deposito) {
        this.validaDeposito(deposito);
        this.mostrarSaldo();
    }
    validaDeposito(deposito) {
        if (deposito >= 1) {
            this.saldo += deposito;
            console.log(`Se ha depositado: $${deposito}`);
        }
        else if (deposito <= 0) {
            console.log(`Error: no se puede depositar $${deposito}
        Por favor deposite mas de 1 dolae`);
        }
    }
    retirar(retiro) {
        this.validarRetiro(retiro, this.saldo);
        this.mostrarSaldo();
    }
    validarRetiro(retiro, saldo) {
        if (retiro > this.saldo) {
            console.log(`Error: No se puede hacer el retiro de: $${retiro}`);
        }
        else {
            console.log(`Se han retirado: $${retiro}`);
            this.saldo -= retiro;
        }
    }
    mostrarSaldo() {
        console.log(`Saldo Actual: $${this.saldo}`);
    }
    mostrarDetalles() {
        console.log(`\nNombre del titular: ${this.titular}`);
        console.log(`Saldo: $${this.saldo}`);
    }
}
class CuentaAhorro extends CuentaBancaria {
    constructor(titular, saldo) {
        super(titular, saldo);
    }
    mostrarDetalles() {
        super.mostrarDetalles();
        console.log(`Tipo: Cuenta de Ahorro\n`);
    }
}
class CuentaCorriente extends CuentaBancaria {
    constructor(titular, saldo) {
        super(titular, saldo);
        this.limiteSaldo = 4000;
    }
    depositar(deposito) {
        let nuevoSaldo = this.saldo + deposito;
        if (nuevoSaldo > this.limiteSaldo) {
            console.log(`Error: una cuenta corriente no puede tener mas de $4000`);
            this.mostrarSaldo();
        }
        else {
            super.depositar(deposito);
        }
    }
    mostrarDetalles() {
        super.mostrarDetalles();
        console.log(`Tipo:    Cuenta Corriente`);
        console.log(`Límite:  $${this.limiteSaldo}\n`);
    }
}
const usuario1 = new CuentaBancaria("Yona", 0);
// usuario1.depositar(20)
// usuario1.retirar(4)
const usuario2 = new CuentaAhorro("Yona", 0);
usuario2.depositar(100);
usuario2.retirar(20);
usuario2.mostrarDetalles();
const usuario3 = new CuentaCorriente("Yona", 0);
usuario3.depositar(100);
usuario3.retirar(20);
usuario3.depositar(4000);
usuario3.mostrarDetalles();
// ...creo que me compliqué de manera innecesaria con esto xd
//# sourceMappingURL=E01.js.map