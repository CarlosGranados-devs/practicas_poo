abstract class Suscripcion {
  private precioBase: number;

  constructor(precioBase: number) {
    this.precioBase = precioBase;
  }

  protected getPrecioBase(): number {
    return this.precioBase;
  }

  abstract calcularCosto(): number;
  abstract mostrarBeneficios(): void;
}

class SuscripcionBasica extends Suscripcion {
  private limiteUso: number;

  constructor(precio: number, limiteUso: number) {
    super(precio);
    this.limiteUso = limiteUso;
  }

  calcularCosto(): number {
    return this.getPrecioBase();
  }

  mostrarBeneficios(): void {
    console.log("Suscripción Básica");
    console.log("Límite de uso:", this.limiteUso);
  }
}

class SuscripcionPremium extends Suscripcion {
  private beneficiosExtra: string[];

  constructor(precio: number, beneficios: string[]) {
    super(precio);
    this.beneficiosExtra = beneficios;
  }

  calcularCosto(): number {
    return this.getPrecioBase() * 1.5;
  }

  mostrarBeneficios(): void {
    console.log("Suscripción Premium");
    console.log("Beneficios extra:", this.beneficiosExtra.join(", "));
  }
}

class Usuario {
  private suscripcion: Suscripcion | null = null;

  constructor(private nombre: string) {}

  asignarSuscripcion(s: Suscripcion): void {
    this.suscripcion = s;
  }

  mostrarEstado(): void {
    console.log("Usuario:", this.nombre);

    if (this.suscripcion === null) {
      console.log("No tiene suscripción asignada");
      return;
    }

    this.suscripcion.mostrarBeneficios();
    console.log("Costo:", this.suscripcion.calcularCosto());
  }
}

const basica = new SuscripcionBasica(10, 100);
const premium = new SuscripcionPremium(20, ["Acceso ilimitado", "Soporte prioritario"]);

const usuario1 = new Usuario("Usuario1");
usuario1.asignarSuscripcion(basica);

const usuario2 = new Usuario("Usuario2");
usuario2.asignarSuscripcion(premium);

usuario1.mostrarEstado();
console.log("");
usuario2.mostrarEstado();