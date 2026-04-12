// PROCESAMIENTO DE ARCHIVOS

abstract class ProcesadorArchivo {
  constructor(public nombre: string) {}

  mostrarNombre(): void {
    console.log("Archivo:", this.nombre);
  }

  abstract procesar(): void;
}

class ProcesadorTexto extends ProcesadorArchivo {
  procesar(): void {
    console.log("Procesando archivo de texto...");
  }
}

class ProcesadorImagen extends ProcesadorArchivo {
  procesar(): void {
    console.log("Procesando imagen...");
  }
}

class ProcesadorVideo extends ProcesadorArchivo {
  procesar(): void {
    console.log("Procesando video...");
  }
}

const archivos: ProcesadorArchivo[] = [
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

abstract class Transformacion {
  abstract transformar(valor: string): string;
}

class Mayusculas extends Transformacion {
  transformar(valor: string): string {
    return valor.toUpperCase();
  }
}

class Minusculas extends Transformacion {
  transformar(valor: string): string {
    return valor.toLowerCase();
  }
}

class Reverso extends Transformacion {
  transformar(valor: string): string {
    return valor.split("").reverse().join("");
  }
}

class SinEspacios extends Transformacion {
  transformar(valor: string): string {
    return valor.replace(/\s+/g, "");
  }
}

const transformaciones: Transformacion[] = [
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

abstract class Operacion {
  abstract ejecutar(valor: string): string;
}

class OpMayusculas extends Operacion {
  ejecutar(valor: string): string {
    return valor.toUpperCase();
  }
}

class OpReverso extends Operacion {
  ejecutar(valor: string): string {
    return valor.split("").reverse().join("");
  }
}

class OpSinEspacios extends Operacion {
  ejecutar(valor: string): string {
    return valor.replace(/\s+/g, "");
  }
}

const operaciones: Operacion[] = [
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