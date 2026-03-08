export class Vehiculo {
    marca: string;
    modelo: string;
    anio: number;
    constructor(marca: string, modelo: string, anio: number) {
        this.validaciones(marca, modelo, anio)
        this.marca = marca
        this.modelo = modelo
        this.anio = anio
    }

    mostrarInformacion() {
        console.log(`
            Marca: ${this.marca}
            Modelo: ${this.modelo}
            Anio: ${this.anio}`)
    }

    private validaciones(marca: string, modelo: string, anio: number) {
        if (marca.trim().length == 0) throw new Error('La marca no puede estar vacia');
        if (modelo.trim().length == 0) throw new Error('El modelo no puede estar vacia');
        if (anio > 2026) throw new Error('el anio no [puede ser mayor al actual');
    }
}

export class Automovil extends Vehiculo {
    numeroPuertas: number;
    constructor(marca: string, modelo: string, anio: number, numeroPuertas: number) {
        super(marca, modelo, anio)
        this.numeroPuertas = numeroPuertas
    }
    mostrarInformacion() {
        console.log(`
            Marca: ${this.marca}
            Modelo: ${this.modelo}
            Anio: ${this.anio}
            Numero de puertas: ${this.numeroPuertas}`)
    }
    private validarAutomovil(numeroPuertas: number) {
        if (numeroPuertas > 6 && numeroPuertas < 1) throw new Error('Coloque la cantidad de puertas correctamente');
    }
}

export class Motocicleta extends Vehiculo {
    cilindrada: boolean
    constructor(marca: string, modelo: string, anio: number, cilindrada: boolean) {
        super(marca, modelo, anio)
        this.cilindrada = cilindrada
    }
    mostrarInformacion() {
        console.log(`
            Marca: ${this.marca}
            Modelo: ${this.modelo}
            Anio: ${this.anio}
            Es cilindrada?: ${this.cilindrada}`)
    }
}