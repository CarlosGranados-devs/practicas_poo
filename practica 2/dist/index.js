"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Empleado_1 = require("./Empleado");
const empleado1 = new Empleado_1.Empleado('Juan', 'M', 19, 12345678);
empleado1.trabajar();
const empleado2 = new Empleado_1.EmpleadoTiemploCompleto('Juan', 'M', 19, 12345678, 320);
empleado2.calcularSalario();
const empleado3 = new Empleado_1.EmpleadoPorHora('Juan', 'M', 19, 12345678, 10, 3);
empleado3.calcularSalario();
//# sourceMappingURL=index.js.map