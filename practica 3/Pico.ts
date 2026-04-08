import { Bloque } from "./Bloque";

export class Pico {
    material: string;
    poderDeMineria: number;

    constructor(material: string, poder: number) {
        this.material = material;
        this.poderDeMineria = poder;
    }

    minar(bloque: Bloque): string | null {
        if (this.poderDeMineria >= bloque.dureza) {
            console.log(`Minando bloque de ${bloque.tipoBloque} con pico de ${this.material}...`);
            return bloque.romper();
        } else {
            console.log(` El pico de ${this.material} no tiene suficiente poder para romper ${bloque.tipoBloque}`);
            return null;
        }
    }
}