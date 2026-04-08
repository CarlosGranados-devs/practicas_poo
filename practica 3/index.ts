const prompt = require("prompt-sync")();

import { Jugador } from "./Jugador";
import { Pico } from "./Pico";
import { Bloque } from "./Bloque";

console.log(" Iniciando sistema de minería...");

// Crear herramientas
const picoMadera = new Pico("madera", 1);
const picoPiedra = new Pico("piedra", 3);
const picoHierro = new Pico("hierro", 5);

// Crear bloques
const bloques = [
    new Bloque("carbón", 1, "carbón"),
    new Bloque("hierro", 3, "hierro"),
    new Bloque("diamante", 5, "diamante"),
    new Bloque("obsidiana", 7, "obsidiana"),
    new Bloque("esmeralda", 4, "esmeralda")
];

// Crear jugador
const nombre = prompt(" Ingresa tu nombre: ");

console.log("\n Elige tu pico:");
console.log("1. Madera");
console.log("2. Piedra");
console.log("3. Hierro");

const opcionPico = prompt("Opción: ");

let picoElegido;

switch (opcionPico) {
    case "1":
        picoElegido = picoMadera;
        break;
    case "2":
        picoElegido = picoPiedra;
        break;
    case "3":
        picoElegido = picoHierro;
        break;
    default:
        console.log(" Opción inválida, se asigna pico de madera");
        picoElegido = picoMadera;
}

const jugador = new Jugador(nombre, picoElegido);

// MINAR 3 VECES (requisito)
for (let i = 0; i < 3; i++) {
    console.log("\n Elige un bloque para minar:");

    bloques.forEach((b, index) => {
        console.log(`${index + 1}. ${b.tipoBloque}`);
    });

    const opcion = parseInt(prompt("Opción: "));
    const bloque = bloques[opcion - 1];

    if (bloque) {
        jugador.minarBloque(bloque);
    } else {
        console.log(" Opción inválida");
    }
}

// Mostrar inventario final
console.log("\n RESULTADO FINAL:");
jugador.mostrarInventario();