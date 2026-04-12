"use strict";
// PROCESAMIENTO DE ARCHIVOS
class ProcesadorArchivo {
    nombre;
    constructor(nombre) {
        this.nombre = nombre;
    }
    mostrarNombre() {
        console.log("Archivo:", this.nombre);
    }
}
class ProcesadorTexto extends ProcesadorArchivo {
    procesar() {
        console.log("Procesando archivo de texto...");
    }
}
class ProcesadorImagen extends ProcesadorArchivo {
    procesar() {
        console.log("Procesando imagen...");
    }
}
class ProcesadorVideo extends ProcesadorArchivo {
    procesar() {
        console.log("Procesando video...");
    }
}
const archivos = [
    new ProcesadorTexto("documento.txt"),
    new ProcesadorImagen("foto.png"),
    new ProcesadorVideo("video.mp4")
];
console.log("=== PROCESAMIENTO DE ARCHIVOS ===");
archivos.forEach(a => {
    a.mostrarNombre();
    a.procesar();
});
// TRANSFORMACIONES
class Transformacion {
}
class Mayusculas extends Transformacion {
    transformar(valor) {
        return valor.toUpperCase();
    }
}
class Minusculas extends Transformacion {
    transformar(valor) {
        return valor.toLowerCase();
    }
}
class Reverso extends Transformacion {
    transformar(valor) {
        return valor.split("").reverse().join("");
    }
}
class SinEspacios extends Transformacion {
    transformar(valor) {
        return valor.replace(/\s+/g, "");
    }
}
const transformaciones = [
    new Mayusculas(),
    new Reverso(),
    new SinEspacios()
];
let texto = " Hola Mundo ";
console.log("\n=== TRANSFORMACIONES ===");
console.log("Original:", texto);
transformaciones.forEach((t, i) => {
    texto = t.transformar(texto);
    console.log(`Paso ${i + 1}:`, texto);
});
// PIPELINE DE OPERACIONES 
class Operacion {
}
class OpMayusculas extends Operacion {
    ejecutar(valor) {
        return valor.toUpperCase();
    }
}
class OpReverso extends Operacion {
    ejecutar(valor) {
        return valor.split("").reverse().join("");
    }
}
class OpSinEspacios extends Operacion {
    ejecutar(valor) {
        return valor.replace(/\s+/g, "");
    }
}
const operaciones = [
    new OpSinEspacios(),
    new OpMayusculas(),
    new OpReverso()
];
let dato = " hola mundo ";
console.log("\n=== PIPELINE DE OPERACIONES ===");
console.log("Entrada:", dato);
operaciones.forEach((op, i) => {
    dato = op.ejecutar(dato);
    console.log(`Operación ${i + 1}:`, dato);
});
console.log("Resultado final:", dato);
