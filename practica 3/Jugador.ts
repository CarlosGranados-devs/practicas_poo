import { Pico } from "./Pico";
import { Bloque } from "./Bloque";

export class Jugador {
    nombre: string;
    pico: Pico;
    inventario: string[];

    constructor(nombre: string, pico: Pico) {
        this.nombre = nombre;
        this.pico = pico;
        this.inventario = [];
    }

    minarBloque(bloque: Bloque): void {
        const recurso = this.pico.minar(bloque);

        if (recurso) {
            this.inventario.push(recurso);
            console.log(` Recurso obtenido: ${recurso}`);
        }
    }

    mostrarInventario(): void {
        console.log(`Inventario de ${this.nombre}:`, this.inventario);
    }
}