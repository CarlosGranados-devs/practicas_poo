export class Bloque {
    tipoBloque: string;
    dureza: number;
    recursoQueEntrega: string;

    constructor(tipo: string, dureza: number, recurso: string) {
        this.tipoBloque = tipo;
        this.dureza = dureza;
        this.recursoQueEntrega = recurso;
    }

    romper(): string {
        this.mensajeAlRomperse();
        return this.recursoQueEntrega;
    }

    mensajeAlRomperse(): void {
        console.log(`Has roto un bloque de ${this.tipoBloque}`);
    }
}