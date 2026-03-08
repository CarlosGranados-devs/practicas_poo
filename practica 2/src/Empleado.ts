type generoEmpleado = 'M' | 'F'

export class Empleado {
    nombre: string;
    genero: generoEmpleado;
    edad: number;
    numeroEmpleado: number;
    constructor(nombre: string, genero: generoEmpleado, edad: number, numeroEmpleado: number){
        this.validarDatos(nombre,genero,edad,numeroEmpleado)
        this.nombre=nombre
        this.genero=genero;
        this.edad=edad;
        this.numeroEmpleado=numeroEmpleado
    }

    trabajar(): void{
        console.log("Trabaja 8 horas al dia")
    }

    private validarDatos(nombre: string, genero: generoEmpleado, edad: number, numeroEmpleado: number){
        if(nombre.trim().length < 3)throw new Error('El nombre debe tener al menos 3 caracteres');
        if(genero !== 'M' && genero !== 'F')throw new Error('El genero debe ser "M" o "F"');
        if(edad < 18)throw new Error('El empleado no puede ser menor de edad');
        if (numeroEmpleado < 10000000)throw new Error('El nnumero no puede ser menor a 10000000');
    }
}

//empleado tiempo completo
export class EmpleadoTiemploCompleto extends Empleado{
    salarioBase: number;
    constructor(nombre: string, genero: generoEmpleado, edad: number, numeroEmpleado: number, salarioBase: number){
        super(nombre,genero,edad,numeroEmpleado)
        this.salarioBase=salarioBase
    }
    calcularSalario(): void{
        console.log(`Salario: $${this.salarioBase}`)
    }
}

export class EmpleadoPorHora extends Empleado{
    horasTrabajadas: number;
    tarifaPorHora:number
    constructor(nombre: string, genero: generoEmpleado, edad: number, numeroEmpleado: number, horasTrabajadas: number, tarifaPorHora:number){
        super(nombre,genero,edad,numeroEmpleado)
        this.horasTrabajadas=horasTrabajadas;
        this.tarifaPorHora=tarifaPorHora;
    }
    calcularSalario(): void{
        console.log(`Salario: $${this.horasTrabajadas * this.tarifaPorHora}`)
    }
}
