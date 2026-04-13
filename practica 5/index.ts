// CLASE PRODUCTO

class Producto {
  constructor(
    private nombre: string,
    private precio: number
  ) {}

  getNombre(): string {
    return this.nombre;
  }

  getPrecio(): number {
    return this.precio;
  }
}

// CLASE CARRITO

class Carrito {
  private productos: { producto: Producto; cantidad: number }[] = [];
  private total: number = 0;

  agregarProducto(producto: Producto, cantidad: number): void {
    if (cantidad <= 0) {
      console.log("Cantidad inválida");
      return;
    }

    const item = this.productos.find(p => p.producto === producto);

    if (item) {
      item.cantidad += cantidad;
    } else {
      this.productos.push({ producto, cantidad });
    }

    this.calcularTotal();
  }

  eliminarProducto(producto: Producto): void {
    this.productos = this.productos.filter(p => p.producto !== producto);
    this.calcularTotal();
  }

  private calcularTotal(): void {
    this.total = 0;

    this.productos.forEach(p => {
      this.total += p.producto.getPrecio() * p.cantidad;
    });
  }

  mostrarDetalle(): void {
    console.log("=== CARRITO ===");

    this.productos.forEach(p => {
      console.log(
        `${p.producto.getNombre()} x${p.cantidad} = $${p.producto.getPrecio() * p.cantidad}`
      );
    });

    console.log("Total:", this.total);
  }
}


// USO DEL SISTEMA

const p1 = new Producto("Laptop", 1000);
const p2 = new Producto("Mouse", 25);
const p3 = new Producto("Teclado", 50);

const carrito = new Carrito();

carrito.agregarProducto(p1, 1);
carrito.agregarProducto(p2, 2);
carrito.agregarProducto(p3, 1);

carrito.eliminarProducto(p2);

carrito.mostrarDetalle();