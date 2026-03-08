import { Empleado, EmpleadoPorHora, EmpleadoTiemploCompleto } from "./Empleado";

const empleado1 = new Empleado('Juan', 'M', 19, 12345678)
empleado1.trabajar()

const empleado2 = new EmpleadoTiemploCompleto('Juan', 'M', 19, 12345678,320)
empleado2.calcularSalario()

const empleado3 = new EmpleadoPorHora('Juan', 'M', 19, 12345678, 10, 3)
empleado3.calcularSalario()