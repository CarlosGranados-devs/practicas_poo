export declare class Vehiculo {
    marca: string;
    modelo: string;
    anio: number;
    constructor(marca: string, modelo: string, anio: number);
    mostrarInformacion(): void;
    private validaciones;
}
export declare class Automovil extends Vehiculo {
    numeroPuertas: number;
    constructor(marca: string, modelo: string, anio: number, numeroPuertas: number);
    mostrarInformacion(): void;
    private validarAutomovil;
}
export declare class Motocicleta extends Vehiculo {
    cilindrada: boolean;
    constructor(marca: string, modelo: string, anio: number, cilindrada: boolean);
    mostrarInformacion(): void;
}
//# sourceMappingURL=Vehiculo.d.ts.map