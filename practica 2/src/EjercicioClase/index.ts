import { Automovil, Motocicleta, Vehiculo } from "./Vehiculo";

const auto1 = new Vehiculo("Mazda", "Rx-7", 2018)
auto1.mostrarInformacion()

const auto2 = new Automovil("Honda", "xdx", 2026, 4)
auto2.mostrarInformacion()

const moto = new Motocicleta("jhg", "fygv", 2021, true)
moto.mostrarInformacion()