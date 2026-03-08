type generoEmpleado = 'M' | 'F';
export declare class Empleado {
    nombre: string;
    genero: generoEmpleado;
    edad: number;
    numeroEmpleado: number;
    constructor(nombre: string, genero: generoEmpleado, edad: number, numeroEmpleado: number);
    trabajar(): void;
    private validarDatos;
}
export declare class EmpleadoTiemploCompleto extends Empleado {
    salarioBase: number;
    constructor(nombre: string, genero: generoEmpleado, edad: number, numeroEmpleado: number, salarioBase: number);
    calcularSalario(): void;
}
export declare class EmpleadoPorHora extends Empleado {
    horasTrabajadas: number;
    tarifaPorHora: number;
    constructor(nombre: string, genero: generoEmpleado, edad: number, numeroEmpleado: number, horasTrabajadas: number, tarifaPorHora: number);
    calcularSalario(): void;
}
export {};
//# sourceMappingURL=Empleado.d.ts.map